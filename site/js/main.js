(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Rok w stopce
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Menu na telefonie
  var burger = $('.top__burger');
  var menu = $('#menu');
  if (burger && menu) {
    var zamknij = function () {
      burger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    };
    burger.addEventListener('click', function () {
      var otwarte = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!otwarte));
      menu.classList.toggle('is-open', !otwarte);
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) zamknij(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zamknij(); });
  }

  // Nagłówki: rozbij na słowa (wejście słowo po słowie)
  $$('.split').forEach(function (el) {
    // <br> w nagłówku traktujemy jak spację, żeby słowa się nie sklejały
    var czysty = el.innerHTML.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    var tekst = czysty.split(' ');
    el.setAttribute('aria-label', czysty);
    el.innerHTML = tekst.map(function (s, i) {
      return '<span class="w" aria-hidden="true"><span style="--i:' + i + '">' + s + '</span></span> ';
    }).join('');
  });

  // Pojawianie się elementów przy przewijaniu
  var obserwowane = $$('.reveal, .stagger, .split, .draw, .krok');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (wpisy) {
      wpisy.forEach(function (w) {
        if (w.isIntersecting) { w.target.classList.add('is-in'); io.unobserve(w.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
    obserwowane.forEach(function (el) { io.observe(el); });
  } else {
    obserwowane.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Przewijanie: pasek postępu, wskaźnik ostrości (20/200 → 20/20), oś wizyty, paralaks
  var drabina = ['20/200', '20/100', '20/70', '20/50', '20/40', '20/30', '20/25', '20/20'];
  var wskaznik = $('[data-ostrosc]');
  var paralaksy = $$('[data-parallax]');
  var czeka = false;
  function przy() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var f = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    document.documentElement.style.setProperty('--scroll', f.toFixed(4));
    if (wskaznik) wskaznik.textContent = drabina[Math.min(drabina.length - 1, Math.floor(f * drabina.length))];

    if (!reduced) {
      paralaksy.forEach(function (img) {
        var b = img.parentElement.getBoundingClientRect();
        var d = (b.top + b.height / 2 - window.innerHeight / 2) * -0.06;
        img.style.transform = 'translateY(' + d.toFixed(1) + 'px)';
      });
    }
    czeka = false;
  }
  window.addEventListener('scroll', function () { if (!czeka) { czeka = true; requestAnimationFrame(przy); } }, { passive: true });
  window.addEventListener('resize', przy);
  przy();

  // Przymierz: przesuwana półka ze zdjęciami
  var rail = $('[data-rail]');
  if (rail) {
    var slajdy = $$('.slajd', rail);
    var licznik = $('[data-rail-licznik]');
    var lewy = function (s) {
      var pad = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      return s.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft - pad;
    };
    var indeks = function () {
      var najb = 0, d = Infinity;
      slajdy.forEach(function (s, i) {
        var k = Math.abs(lewy(s) - rail.scrollLeft);
        if (k < d) { d = k; najb = i; }
      });
      return najb;
    };
    var odswiez = function () { if (licznik) licznik.textContent = (indeks() + 1) + ' / ' + slajdy.length; };
    var idz = function (n) {
      n = Math.max(0, Math.min(slajdy.length - 1, n));
      rail.scrollTo({ left: lewy(slajdy[n]), behavior: reduced ? 'auto' : 'smooth' });
    };
    rail.addEventListener('scroll', odswiez, { passive: true });
    var prev = $('[data-rail-prev]'), next = $('[data-rail-next]');
    if (prev) prev.addEventListener('click', function () { idz(indeks() - 1); });
    if (next) next.addEventListener('click', function () { idz(indeks() + 1); });
    rail.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); idz(indeks() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); idz(indeks() - 1); }
    });
    odswiez();
  }

  // Tablica: na początku wyostrza się sama, potem steruje nią suwak
  var suwak = $('[data-blur-range]');
  var tablica = $('[data-chart]');
  if (suwak && tablica) {
    var ustawB = function (v) { tablica.style.setProperty('--b', v); };
    ustawB(suwak.value);
    var dotkniety = false;
    suwak.addEventListener('input', function () { dotkniety = true; ustawB(suwak.value); });
    if (!reduced && 'IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (w) {
        if (!w[0].isIntersecting) return;
        io2.disconnect();
        var start = performance.now();
        (function anim(t) {
          if (dotkniety) return;
          var k = Math.min((t - start) / 2800, 1);
          var v = 12 * Math.pow(1 - k, 3);
          ustawB(v.toFixed(2));
          suwak.value = v;
          if (k < 1) requestAnimationFrame(anim);
        })(start);
      }, { threshold: 0.5 });
      io2.observe(tablica);
    } else { ustawB(0); suwak.value = 0; }
  }

  // Podświetlenie dzisiejszego dnia w godzinach otwarcia (czas w Polsce)
  try {
    var cz = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Warsaw', weekday: 'short', hour: 'numeric', hour12: false
    }).formatToParts(new Date());
    var dzien = cz.filter(function (p) { return p.type === 'weekday'; })[0].value.toLowerCase();
    var godz = parseInt(cz.filter(function (p) { return p.type === 'hour'; })[0].value, 10) % 24;
    var nr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(dzien);
    var roboczy = nr >= 1 && nr <= 5;
    $$('.godziny [data-days]').forEach(function (w) {
      if (w.getAttribute('data-days').split(',').indexOf(String(nr)) !== -1) w.classList.add('is-today');
    });
  } catch (e) { /* bez wskaźnika */ }
})();
