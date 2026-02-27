#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 4 - Розрахунок рахунку в ресторані (додаткове)
x = int(input("Podaj liczbę gości: "))
n = int(input("Podaj liczbę zamówionych dań: "))

if x <= 0 or n <= 0:
    print("Liczba gości i dań musi być większa od 0!")
    exit()

suma_cen = 0
i = 0

while i < n:
    cena = float(input(f"Podaj cenę {i+1}. potrawy: "))
    suma_cen += cena
    i += 1

srednia_cena = suma_cen / n
rachunek_na_osobe = suma_cen / x

print(f"\nŚrednia cena zamówionej potrawy: {srednia_cena:.2f}")
print(f"Całkowity rachunek: {suma_cen:.2f}")
print(f"Rachunek na osobę: {rachunek_na_osobe:.2f}")

