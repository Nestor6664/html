# Laboratorium nr 3 - Instrukcje uruchamiania

## Jak uruchomić zadania

### Metoda 1: Uruchamianie pojedynczych plików

W terminalu (PowerShell) uruchom:

```powershell
# Zadanie 1 - Kontrola paliwa w samolocie
python zadanie_1.py

# Zadanie 2 - 10 pierwszych liczb pierwszych
python zadanie_2.py

# Zadanie 3 - Lista adresów w dzielnicy
python zadanie_3.py

# Zadanie 4 - Rachunek w restauracji (wymaga wprowadzenia danych)
python zadanie_4.py

# Zadanie 5 - Lista liczb od 80 do 0
python zadanie_5.py

# Zadanie 6 - Nieskończona pętla (wymaga wprowadzenia danych)
python zadanie_6.py

# Zadanie 7A - Średnia punktów z while i continue (wymaga wprowadzenia danych)
python zadanie_7a.py

# Zadanie 7B - Średnia punktów z break (wymaga wprowadzenia danych)
python zadanie_7b.py

# Zadanie 8 - Praca z łańcuchem "Python jest super"
python zadanie_8.py

# Zadanie 9 - Programy do pracy z łańcuchami (wymaga wprowadzenia danych)
python zadanie_9.py
```

### Metoda 2: Uruchamianie wszystkich zadań z main.py

```powershell
python main.py
```

To uruchomi wszystkie zadania, które nie wymagają wprowadzenia danych (1, 2, 3, 5, 8).

### Metoda 3: Uruchamianie w Python IDLE lub VS Code

1. Otwórz plik `.py` w edytorze
2. Naciśnij F5 lub kliknij "Run"
3. Dla zadań wymagających wprowadzenia danych, wprowadź wartości w konsoli

## Zadania wymagające wprowadzenia danych

Następujące zadania wymagają wprowadzenia danych przez użytkownika:

- **Zadanie 4**: Liczba gości i dań, ceny potraw
- **Zadanie 6**: Liczby całkowite (ujemna kończy pętlę)
- **Zadanie 7A**: Liczba studentów, punkty dla każdego
- **Zadanie 7B**: Liczba studentów, punkty dla każdego
- **Zadanie 9**: Imię, wiek, imię i nazwisko, łańcuchy tekstowe

## Przykładowe uruchomienie

### Zadanie 1 (automatyczne):
```powershell
python zadanie_1.py
```
Wynik:
```
Pozostało 100 litrów paliwa.
Pozostało 90 litrów paliwa.
Pozostało 80 litrów paliwa.
...
Konie lotu.
```

### Zadanie 4 (interaktywne):
```powershell
python zadanie_4.py
```
Następnie wprowadź:
```
Podaj liczbę gości: 4
Podaj liczbę zamówionych dań: 3
Podaj cenę 1. potrawy: 25.50
Podaj cenę 2. potrawy: 30.00
Podaj cenę 3. potrawy: 20.00
```

## Uwagi

- Upewnij się, że masz zainstalowany Python 3
- Jeśli `python` nie działa, spróbuj `python3` lub `py`
- W przypadku błędów sprawdź, czy wszystkie pliki są w tym samym katalogu

