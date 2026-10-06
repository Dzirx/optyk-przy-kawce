# Mapa strony: Optyk przy Kawce

Cel strony: zaprezentować ofertę salonu i opisać, co robią. Główne działanie: telefon (723 980 100) lub wizyta w salonie.

## Struktura

```
site/
├── index.html                       strona główna
└── oferta/                          jedna usługa = jedna podstrona
    ├── badanie-wzroku.html
    ├── okulary-korekcyjne.html
    ├── okulary-przeciwsloneczne.html
    ├── okulary-progresywne.html
    ├── soczewki-kontaktowe.html
    └── recepty-refundowane.html
```

### Strona główna (kolejność sekcji)
1. Hero: zdjęcie z neonem „Miło Cię widzieć" do prawej krawędzi, tytuł „Zobacz wyraźnie. Przy kawie." (na telefonie zdjęcie na górze)
2. Oferta: sześć wierszy prowadzących do podstron
3. Przymierz: zdjęcia w szkłach o kształcie okularów z fotografii (okrągłe, pilotki)
4. Tablica ostrości: interaktywny suwak (zabawa, nie badanie)
5. FAQ „Dobrze wiedzieć": pytania w kartach po lewej, po prawej kafel „Wpadnij. Porozmawiajmy przy kawie." (ilustracja filiżanki, docelowo zdjęcie kawy)
6. „Do zobaczenia przy kawie.": adres, telefon, e-mail, godziny (z plakietką „dziś"), przyciski „Wyznacz trasę" i „Zadzwoń", duża mapa Google po prawej, zawsze widoczna (z=18). Ta sekcja jest też na każdej podstronie oferty
7. Smukła stopka: logo i hasło, lista ofert, „Na skróty", ©

Usunięto sekcję „Wizyta krok po kroku", tekst o salonie i zdjęcie gabloty z FAQ. Skalowanie na duże ekrany: szerokość treści rośnie z oknem (do ok. 80% szerokości), a rozmiar czcionki rośnie od ok. 1440 px.

### Podstrona oferty (wspólny szablon)
Okruszki → nagłówek + lead + ilustracja (docelowo zdjęcie) → „Co obejmuje" → „Dla kogo" → uwaga (kiedy do lekarza) → FAQ → „Zobacz też" → CTA „Zadzwoń".

## Paleta (jasna, bez czerni)

| Zmienna | Kolor | Użycie |
|---|---|---|
| `--tlo` | `#f8fbfd` | tło strony |
| `--mgla` | `#e5f3fb` | jasnobłękitne sekcje |
| `--blekit` | `#1fa3e5` | błękit z logo, akcenty |
| `--blekit-ciemny` | `#0b6a9e` | przyciski, linki, sekcja kontaktu |
| `--granat` | `#0f2a3d` | tekst (zamiast czerni) |
| `--karmel` | `#c98b52` | tylko drobny akcent kawy: filiżanka, kropki w pasku |

Jeśli klient uzna, że karmel gryzie się z błękitem, wystarczy zmienić `--karmel` na błękit lub go usunąć.

## Animacje
Nagłówek „wyostrzający się" na starcie, odblask światła na zdjęciach, rysowanie ikon na podstronach, nagłówki wchodzące słowo po słowie, pojawianie się sekcji przy przewijaniu, tablica wyostrzająca się sama, paralaks zdjęcia w Salonie, mrugające oko i obracające się słońce w ilustracjach na podstronach, płynne przejścia między podstronami. Przy ustawieniu systemowym „ogranicz ruch" wszystko jest wyłączone.

## Do potwierdzenia z klientem (zanim strona pójdzie na produkcję)
- Czy salon oferuje: okulary progresywne, soczewki kontaktowe, recepty refundowane, okulary przeciwsłoneczne z korekcją.
- Przebieg wizyty (krótki opis w sekcji Salon).
- Czy salon zapewnia dopasowanie okularów przy odbiorze, naukę zakładania soczewek.
- Godziny otwarcia (źródło: wizytówka Google).
- Czy w salonie jest okulista; obecnie strona tylko odsyła do lekarza przy niepokojących objawach.
- Brak cen, marek, czasu realizacji i gwarancji, bo nie mamy tych danych. Nie dopisywać bez potwierdzenia.

## Zdjęcia do dostarczenia
Obecnie jest jedno zdjęcie salonu (`img/salon.jpg`). Na podstronach są ilustracje SVG. Gdy pojawią się zdjęcia, wstawić je w miejsce komentarza `TU MOŻE WEJŚĆ ZDJĘCIE` w każdej podstronie.

| Plik | Co na zdjęciu |
|---|---|
| `img/hero.jpg` | wnętrze salonu, najlepiej pionowo (4:5) |
| `img/badanie-wzroku.jpg` | gabinet / stanowisko badania |
| `img/okulary-korekcyjne.jpg` | osoba przymierzająca oprawki |
| `img/okulary-przeciwsloneczne.jpg` | okulary przeciwsłoneczne |
| `img/okulary-progresywne.jpg` | okulary, detal |
| `img/soczewki-kontaktowe.jpg` | opakowania / soczewki na dłoni |
| `img/salon-kawa.jpg` | kawa i oprawki na stole |

Zdjęcia osób wymagają ich zgody.

## Uwagi
- Nie mam narzędzia do generowania zdjęć. Zamiast nich są ilustracje liniowe SVG.
- Logo przerobione na przezroczyste tło (`img/optyk-przy-kawce-logo.png`: błękitne „Optyk", granatowe „przy kawce"). Docelowo lepsza byłaby wersja wektorowa (SVG).
- Treści napisane od zera. Strona Optymax posłużyła jako wskazówka, jakie usługi zwykle wchodzą w skład oferty. Nie kopiujemy z niej tekstów, układu ani danych.

## Ocena krytyka (screenshot, świeży kontekst)
Trzy iteracje: 5/10, 6/10, 6/10. Stop zgodnie z regułą maksymalnie 3 iteracji (nie osiągnięto 9/10). Po trzeciej wykonano removal pass: usunięto ikony z listy oferty, oś kroków 1-2-3, trzecie zdjęcie karuzeli, kropki na końcu nagłówków sekcji i komunikat „Zamknięte" z hero. Wymaga oceny projektanta przed pokazaniem klientowi.

## Paleta (ze wzoru od użytkownika)
Tło `#FEFCF8`, nagłówki `#041A39`, akcent „przy kawie" `#015CAD`, przyciski `#005E96`, jasny kafel `#EBF6FD`, tekst pomocniczy `#4A6179`, napisy na przyciskach białe.

## Mapa Google
Mapa jest osadzona na stałe w sekcji kontaktu (na życzenie), więc Google dostaje dane i może zapisać cookies już przy wejściu na stronę. Przed publikacją potrzebne: baner zgody na cookies (z zablokowaniem iframe do czasu zgody) i polityka prywatności.

## Do potwierdzenia: odpowiedzi w FAQ (umawianie, cena, refundacja).

Brakuje jeszcze: polityki prywatności i ustawień cookies (we wzorze są w stopce) oraz linków do mediów społecznościowych (brak adresów profili).

## Podstrona „Badanie wzroku" (nowy projekt, styl strony głównej)
Sekcje: hero (tekst po lewej, zdjęcie do prawej krawędzi) → trzy fakty w pasku → „Co dzieje się podczas badania" (4 karty + zdjęcie) → „To dla Ciebie, jeśli" (karty z ptaszkiem) → tablica ostrości (ta sama co na stronie głównej) → „Co zabrać ze sobą" + uwaga o okuliście → FAQ + zdjęcie kawy → „Pozostała oferta" (5 małych kart) → sekcja kontaktu z mapą → stopka.
Teksty bez cen, czasu trwania i nazw sprzętu (do potwierdzenia z klientem). Do ustalenia: czy tablica ostrości zostaje też na stronie głównej.

### Zdjęcia do dostarczenia dla tej podstrony
Miejsca w kodzie oznaczone komentarzem `TU ZDJĘCIE`. Do czasu dostarczenia są jasne panele z ilustracją oka.

| Plik | Gdzie | Co na zdjęciu | Format |
|---|---|---|---|
| `img/badanie-hero.jpg` | hero, prawa połowa ekranu, na całą wysokość | osoba podczas badania wzroku (przy aparacie lub tablicy z literami), albo optometrysta z klientem; ciepłe światło | pion lub kwadrat, min. 1400 px wysokości |
| `img/badanie-gabinet.jpg` | sekcja „Co dzieje się podczas badania" | stanowisko badania lub rozmowa z klientem; najlepiej inne ujęcie niż hero | 4:3, min. 1200 px szerokości |
| `img/badanie-detal.jpg` (opcjonalnie) | rezerwa na dalszy rozwój | zbliżenie: oprawka próbna lub soczewki próbne | 1:1 |

Wymagania: prawdziwe zdjęcia z salonu, bez napisów i logotypów wmontowanych w obraz, bez widocznych marek na sprzęcie, w wysokiej rozdzielczości (JPG lub PNG). Zdjęcia osób wymagają ich zgody.
