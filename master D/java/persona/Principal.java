import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

  
        System.out.print("Introduce el nombre: ");
        String nombre = scanner.nextLine();

   
        System.out.print("Introduce los apellidos: ");
        String apellidos = scanner.nextLine();

     
        System.out.print("Introduce la edad: ");
        int edad = scanner.nextInt();

      
        Persona persona = new Persona(nombre, apellidos, edad);

      
        System.out.println("\nDatos introducidos:");
        persona.mostrarInformacion();

        scanner.close();
    }
}
