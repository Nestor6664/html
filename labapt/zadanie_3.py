#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Zad. 3 - Список адрес в районі
ulice = ["Jagodowa", "Lipowa", "Kwiatowa", "Kasztanowa", "Polna"]

for ulica in ulice:
    for blok in range(1, 6):  # 5 будинків
        for lokal in range(1, 11):  # 10 квартир
            print(f"{ulica} {blok}/{lokal}")

