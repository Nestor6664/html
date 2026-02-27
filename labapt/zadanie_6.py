#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 6 - Нескінченний цикл з введенням чисел
while True:
    try:
        liczba = int(input("Podaj liczbę całkowitą: "))
        if liczba < 0:
            print("Wykryto liczbę ujemną. Wyjście z pętli.")
            break
        print(f"Wprowadzono: {liczba}")
    except ValueError:
        print("Błąd: Wprowadź liczbę całkowitą!")

