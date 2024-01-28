import java.util.Scanner;
class Persona {
 
    String nombre;
    String apellidos;
    int edad;
}

public class Principal {
    public static void main(String[] args) {
       
        Persona persona = new Persona();

        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce el nombre:");
        persona.nombre = scanner.nextLine();

        System.out.println("Introduce los apellidos:");
        persona.apellidos = scanner.nextLine();

        System.out.println("Introduce la edad:");
        
        while (!scanner.hasNextInt()) {
            System.out.println("Por favor, introduce una edad válida:");
            scanner.next();
        }
        persona.edad = scanner.nextInt();

       
        System.out.println("\nDatos introducidos:");
        System.out.println("Nombre: " + persona.nombre);
        System.out.println("Apellidos: " + persona.apellidos);
        System.out.println("Edad: " + persona.edad);

        
        scanner.close();
    }
}
