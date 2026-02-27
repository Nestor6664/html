
# Zad. 1 
def zadanie_1():
    paliwo = 100
    paliwo_zuzyte_na_s = 10
    czas = 0
    
    while paliwo > 0:
        print(f"Pozostało {paliwo} litrów paliwa.")
        paliwo -= paliwo_zuzyte_na_s
        czas += 1
    
    print("Konie lotu.")


# Zad. 2 
def zadanie_2():
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


# Zad. 3і
def zadanie_3():
    ulice = ["Jagodowa", "Lipowa", "Kwiatowa", "Kasztanowa", "Polna"]
    adresy = []
    
    for ulica in ulice:
        for blok in range(1, 6): 
            for lokal in range(1, 11): 
                adres = f"{ulica} {blok}/{lokal}"
                adresy.append(adres)
    
    for adres in adresy:
        print(adres)


# Zad. 4 
def zadanie_4():
    try:
        x = int(input("Podaj liczbę gości: "))
        n = int(input("Podaj liczbę zamówionych dań: "))
        
        if x <= 0 or n <= 0:
            print("Liczba gości i dań musi być większa od 0!")
            return
        
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
    except ValueError:
        print("Błąd: Wprowadź poprawne liczby!")


# Zad. 5 
def zadanie_5():
    lista = list(range(80, -1, -4))
    print(lista)


# Zad. 6 
def zadanie_6():
    while True:
        try:
            liczba = int(input("Podaj liczbę całkowitą: "))
            if liczba < 0:
                print("Wykryto liczbę ujemną. Wyjście z pętli.")
                break
            print(f"Wprowadzono: {liczba}")
        except ValueError:
            print("Błąd: Wprowadź liczbę całkowitą!")


# Zad. 7A 
def zadanie_7a():
    try:
        n = int(input("Podaj liczbę studentów: "))
        if n <= 0:
            print("Liczba studentów musi być większa od 0!")
            return
        
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
    except ValueError:
        print("Błąd: Wprowadź poprawne liczby!")


# Zad. 7B 
def zadanie_7b():
    try:
        n = int(input("Podaj liczbę studentów: "))
        if n <= 0:
            print("Liczba studentów musi być większa od 0!")
            return
        
        suma_punktow = 0
        licznik = 0
        i = 0
        
        while True:
            if i >= n:
                break
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
    except ValueError:
        print("Błąd: Wprowadź poprawne liczby!")


# Zad. 8 
def zadanie_8():
    tekst = "Python jest super"
    
    print(f"Tekst: {tekst}")
    print(f"Znak o indeksie zerowym: {tekst[0]}")
    print(f"Znak o indeksie ostatnim: {tekst[-1]}")
    print(f"Co drugi, zaczynając od zerowego: {tekst[0::2]}")
    print(f"Co trzeci, zaczynając od pierwszego: {tekst[1::3]}")
    print(f"Od dziesiątego do ostatniego: {tekst[10:]}")
    print(f"Od końca do początku: {tekst[::-1]}")


# Zad. 9 
def zadanie_9():

    
    # 1. 
    imie = input("Podaj imię: ")
    print(f"Witaj {imie}")
    
    # 2. 
    wiek = input("Podaj wiek: ")
    print(f"Twój wiek to: {wiek}")
    
    # 3. 
    imie2 = input("Podaj imię: ")
    nazwisko = input("Podaj nazwisko: ")
    inicjaly = imie2[0].upper() + "." + nazwisko[0].upper() + "."
    print(f"Inicjały: {inicjaly}")
    
    lancuch = input("Podaj łańcuch: ")
    for i in range(5):
        print(lancuch)
    
    # 5. 
    lancuch1 = input("Podaj pierwszy łańcuch: ")
    lancuch2 = input("Podaj drugi łańcuch: ")
    lancuch3 = lancuch1 + lancuch2
    print(f"Połączone łańcuchy: {lancuch3}")
    
    # 6.
    lancuch1_pol = input("Podaj pierwszy łańcuch (do połowy): ")
    lancuch2_pol = input("Podaj drugi łańcuch (do połowy): ")
    polowa1 = lancuch1_pol[:len(lancuch1_pol)//2]
    polowa2 = lancuch2_pol[:len(lancuch2_pol)//2]
    lancuch_polaczony = polowa1 + polowa2
    print(f"Pierwsza połowa pierwszego + pierwsza połowa drugiego: {lancuch_polaczony}")


def main():
    print("=" * 50)
    print("LABORATORIUM NR 3 - Wszystkie zadania")
    print("=" * 50)
    
    
    zadanie_1()
    zadanie_2()
    zadanie_3()
    
    
    print("\n" + "=" * 50)
    print("Zadania wymagające wprowadzenia danych:")
    print("=" * 50)
    
    # zadanie_4()
    # zadanie_6()
    # zadanie_7a()
    # zadanie_7b()
    # zadanie_9()
    
    zadanie_5()
    zadanie_8()
    
    print("\n" + "=" * 50)
    print("Aby wykonać zadania z wprowadzeniem danych, odkomentuj odpowiednie funkcje w main()")
    print("=" * 50)


if __name__ == "__main__":
    main()
