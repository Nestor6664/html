#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 8 - Робота з рядком "Python jest super"
tekst = "Python jest super"

print(f"Tekst: {tekst}")
print(f"Znak o indeksie zerowym: {tekst[0]}")
print(f"Znak o indeksie ostatnim: {tekst[-1]}")
print(f"Co drugi, zaczynając od zerowego: {tekst[0::2]}")
print(f"Co trzeci, zaczynając od pierwszego: {tekst[1::3]}")
print(f"Od dziesiątego do ostatniego: {tekst[10:]}")
print(f"Od końca do początku: {tekst[::-1]}")

