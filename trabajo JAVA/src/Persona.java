public class Persona implements Comparable<Persona> {

    // Propiedades privadas de la clase Persona
    private String nombre;
    private String apellidos;
    private int edad;

    // Constructor vacío
    public Persona() {}

    // Constructor con parámetros
    public Persona(String nombre, String apellidos, int edad) {
        setNombre(nombre);
        setApellidos(apellidos);
        setEdad(edad);
    }

    // Método para establecer el nombre de la persona con validación
    public void setNombre(String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre no puede ser nulo o vacío.");
        }
        this.nombre = nombre;
    }

    // Método para obtener el nombre de la persona
    public String getNombre() {
        return this.nombre;
    }

    // Método para establecer los apellidos de la persona con validación
    public void setApellidos(String apellidos) {
        if (apellidos == null || apellidos.trim().isEmpty()) {
            throw new IllegalArgumentException("Los apellidos no pueden ser nulos o vacíos.");
        }
        this.apellidos = apellidos;
    }

    // Método para obtener los apellidos de la persona
    public String getApellidos() {
        return this.apellidos;
    }

    // Método para establecer la edad de la persona con validación
    public void setEdad(int edad) {
        if (edad < 0) {
            throw new IllegalArgumentException("La edad no puede ser negativa.");
        }
        this.edad = edad;
    }

    // Método para obtener la edad de la persona
    public int getEdad() {
        return this.edad;
    }

    // Método toString para representar a la persona como una cadena
    @Override
    public String toString() {
        return "Persona[nombre=" + nombre + ", apellidos=" + apellidos + ", edad=" + edad + "]";
    }

    // Método equals para comparar dos objetos Persona
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Persona persona = (Persona) obj;
        return edad == persona.edad &&
               nombre.equals(persona.nombre) &&
               apellidos.equals(persona.apellidos);
    }

    // Método hashCode para obtener el código hash de la Persona
    @Override
    public int hashCode() {
        return Objects.hash(nombre, apellidos, edad);
    }

    // Método compareTo para comparar dos objetos Persona por edad
    @Override
    public int compareTo(Persona o) {
        return Integer.compare(this.edad, o.edad);
    }
}
