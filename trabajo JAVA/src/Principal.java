// Importamos la clase Scanner para leer datos que el usuario escriba en la consola
import java.util.Scanner;

// Definimos la clase Principal, que es donde vamos a ejecutar el programa
public class Principal {
    public static void main(String[] args) {
        
        // Creamos una instancia de la clase Persona, que es donde vamos a guardar los datos del usuario
        Persona persona = new Persona();

        // Creamos un objeto Scanner para poder leer lo que el usuario escriba
        Scanner scanner = new Scanner(System.in);

        // Le pedimos al usuario que introduzca su nombre
        System.out.println("Introduce tu nombre:");
        String nombre = scanner.nextLine();  // Leemos el nombre que el usuario escribe
        persona.setNombre(nombre);           // Guardamos el nombre en el objeto persona

        // Le pedimos al usuario que introduzca sus apellidos
        System.out.println("Introduce tus apellidos:");
        String apellidos = scanner.nextLine(); // Leemos los apellidos
        persona.setApellidos(apellidos);       // Guardamos los apellidos en el objeto persona

        // Le pedimos al usuario que introduzca su edad
        System.out.println("Introduce tu edad:");
        int edad = scanner.nextInt();          // Leemos la edad
        persona.setEdad(edad);                 // Guardamos la edad en el objeto persona

        // Ahora vamos a mostrar por pantalla los datos que el usuario ha introducido
        System.out.println("Datos introducidos:");
        System.out.println("Nombre: " + persona.getNombre());      // Mostramos el nombre guardado
        System.out.println("Apellidos: " + persona.getApellidos()); // Mostramos los apellidos guardados
        System.out.println("Edad: " + persona.getEdad());           // Mostramos la edad guardada

        // Cerramos el Scanner para no dejar recursos abiertos
        scanner.close();
    }
}
