#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 2 - Вивести 10 перших простих чисел
liczby_pierwsze = []
liczba = 2

while len(liczby_pierwsze) < 10:
    jest_pierwsza = True
    for i in range(2, int(liczba ** 0.5) + 1):
        if liczba % i == 0:
            jest_pierwsza = False
            break
    
    if jest_pierwsza:
        liczby_pierwsze.append(liczba)
    
    liczba += 1
    
    if len(liczby_pierwsze) == 10:
        break

print(",".join(map(str, liczby_pierwsze)))

