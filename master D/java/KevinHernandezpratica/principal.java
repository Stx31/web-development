import java.util.Scanner;

class Persona {
    String nombre;
    String apellidos;
    int edad;
    
    public Persona(String nombre, String apellidos, int edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    
    public void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellidos: " + apellidos);
        System.out.println("Edad: " + edad);
    }
}

public class Principal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Introduce el nombre:");
        String nombre = scanner.nextLine();
        
        System.out.println("Introduce los apellidos:");
        String apellidos = scanner.nextLine();
        
        System.out.println("Introduce la edad:");
        int edad = scanner.nextInt();
        
        Persona persona = new Persona(nombre, apellidos, edad);
        
        System.out.println("\nDatos de la persona:");
        persona.mostrarDatos();
        
        scanner.close();
    }
}
