#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 9 - Різні програми для роботи з рядками

# 1. Wczytać imię i wyświetlić "Witaj" oraz imię
imie = input("Podaj imię: ")
print(f"Witaj {imie}")

# 2. Wczytać wiek i wyświetlić "Twój wiek to: " oraz wiek
wiek = input("Podaj wiek: ")
print(f"Twój wiek to: {wiek}")

# 3. Wczytać imię i nazwisko i wyświetlić inicjały
imie2 = input("Podaj imię: ")
nazwisko = input("Podaj nazwisko: ")
inicjaly = imie2[0].upper() + "." + nazwisko[0].upper() + "."
print(f"Inicjały: {inicjaly}")

# 4. Wczytać łańcuch i wyświetlić go pięć razy
lancuch = input("Podaj łańcuch: ")
for i in range(5):
    print(lancuch)

# 5. Wczytać dwa łańcuchy i zapamiętać połączone w trzecim
lancuch1 = input("Podaj pierwszy łańcuch: ")
lancuch2 = input("Podaj drugi łańcuch: ")
lancuch3 = lancuch1 + lancuch2
print(f"Połączone łańcuchy: {lancuch3}")

# 6. Wczytać dwa łańcuchy i zapamiętać pierwszą połowę pierwszego
lancuch1_pol = input("Podaj pierwszy łańcuch (do połowy): ")
lancuch2_pol = input("Podaj drugi łańcuch (do połowy): ")
polowa1 = lancuch1_pol[:len(lancuch1_pol)//2]
polowa2 = lancuch2_pol[:len(lancuch2_pol)//2]
lancuch_polaczony = polowa1 + polowa2
print(f"Pierwsza połowa pierwszego + pierwsza połowa drugiego: {lancuch_polaczony}")

