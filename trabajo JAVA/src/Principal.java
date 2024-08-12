
import java.util.Scanner;


public class Principal {
    public static void main(String[] args) {
        
        Persona persona = new Persona();

        
        Scanner scanner = new Scanner(System.in);

   
        System.out.println("Introduce tu nombre:");
        String nombre = scanner.nextLine();
        persona.setNombre(nombre);

        System.out.println("Introduce tus apellidos:");
        String apellidos = scanner.nextLine();
        persona.setApellidos(apellidos);

        System.out.println("Introduce tu edad:");
        int edad = scanner.nextInt();
        persona.setEdad(edad);

        
        System.out.println("Datos introducidos:");
        System.out.println("Nombre: " + persona.getNombre());
        System.out.println("Apellidos: " + persona.getApellidos());
        System.out.println("Edad: " + persona.getEdad());

       
        scanner.close();
    }
}
