import java.util.Scanner;

class Persona {
    String nombre;
    String apellidos;
    int edad;
}

public class Principal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Persona persona = new Persona();
        System.out.print("Introduce el nombre: ");
        persona.nombre = scanner.nextLine();
        System.out.print("Introduce los apellidos: ");
        persona.apellidos = scanner.nextLine();
        System.out.print("Introduce la edad: ");
        persona.edad = scanner.nextInt();
        System.out.println("\nDatos introducidos:");
        System.out.println("Nombre: " + persona.nombre);
        System.out.println("Apellidos: " + persona.apellidos);
        System.out.println("Edad: " + persona.edad);
        scanner.close();
    }
}
