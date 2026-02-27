#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 7A - Обчислення середньої кількості балів (з while та continue)
n = int(input("Podaj liczbę studentów: "))

if n <= 0:
    print("Liczba studentów musi być większa od 0!")
    exit()

suma_punktow = 0
licznik = 0
i = 0

while i < n:
    punkty = float(input(f"Podaj liczbę punktów dla studenta {i+1}: "))
    if punkty < 0 or punkty > 100:
        print(f"Liczba punktów {punkty} jest poza przedziałem 0-100. Pomijam.")
        i += 1
        continue
    suma_punktow += punkty
    licznik += 1
    i += 1

if licznik > 0:
    srednia = suma_punktow / licznik
    print(f"Średnia liczba punktów w grupie: {srednia:.2f}")
else:
    print("Brak poprawnych danych do obliczenia średniej.")

