def choose_number():
    numbers = []
    
    # Ingresar los números
    for i in range(10):
        number = input("Ingresa un número (o presiona Enter para finalizar): ")
        if not number:
            break
        numbers.append(int(number))
    
    # Verificar si se ingresaron números suficientes
    if len(numbers) < 1:
        print("Debes ingresar al menos un número.")
        return
    
    # Mostrar los números 
    print("Números ingresados:")
    for i, number in enumerate(numbers):
        print(f"{i+1}. {number}")
    
    # Seleccionar un número
    while True:
        choice = input("Elige un número (1-10): ")
        if choice.isdigit() and 1 <= int(choice) <= len(numbers):
            selected_number = numbers[int(choice) - 1]
            print(f"Has seleccionado el número {selected_number}.")
            break
        else:
            print("Elección inválida. Inténtalo de nuevo.")

# para comenzar
choose_number()