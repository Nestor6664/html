#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 1 - Програма контролю витрати палива в літаку
paliwo = 100
paliwo_zuzyte_na_s = 10
czas = 0

while paliwo > 0:
    print(f"Pozostało {paliwo} litrów paliwa.")
    paliwo -= paliwo_zuzyte_na_s
    czas += 1

print("Konie lotu.")

