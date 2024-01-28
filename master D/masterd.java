import java.util.Scanner;

class Persona {
    // Variables de la clase Persona
    String nombre;
    String apellidos;
    int edad;
}

public class Principal {
    public static void main(String[] args) {
        // Crear una instancia de la clase Persona
        Persona persona = new Persona();

        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Pedir al usuario que introduzca los datos
        System.out.println("Introduce el nombre:");
        persona.nombre = scanner.nextLine();

        System.out.println("Introduce los apellidos:");
        persona.apellidos = scanner.nextLine();

        System.out.println("Introduce la edad:");
        persona.edad = scanner.nextInt();

        // Mostrar los datos introducidos por pantalla
        System.out.println("\nDatos introducidos:");
        System.out.println("Nombre: " + persona.nombre);
        System.out.println("Apellidos: " + persona.apellidos);
        System.out.println("Edad: " + persona.edad);

        // Cerrar el scanner para evitar posibles fugas de recursos
        scanner.close();
    }
}
