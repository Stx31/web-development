class Coche { 
    private String modelo; 
    private String matricula; 
    private String color; 

    public void setModelo( String modelo){ 
       this.modelo = modelo; 
    } 
   
    public String getModelo(){ 
       return this.modelo; 
    } 
   
    public static void main(String[] args) { 
       Coche coche = new Coche(); coche.setModelo ("Audi 100"); 
       System.out.println("El modelo es: " + coche.getModelo() );  
      
       System.out.println("El modelo es: " + coche.modelo); 
    } 
 }

 //solucion 
 public class Coche {
    private String matricula; 
    private String color; 
    public void setModelo( String modelo){ 
       this.modelo = modelo; 
    } 
    public void setMatricula(String matricula){ 
       this.matricula=matricula; 
    } 
    public void setColor(String color){ 
       this.color=color; 
    } 
    public String getModelo(){ 
       return this.modelo; 
    } 
    public String getMatricula(){ 
       return this.matricula; 
    } 
    public String getColor(){ 
       return this.color; 
    } 
    public static void main(String[] args) { 
       Coche coche = new Coche(); 
       coche.setModelo ("Audi 100"); 
       coche.setMatricula("32547W");
       coche.setColor("Azúl"); 
       System.out.println("El modelo es: " + coche.getModelo() ); 
       System.out.println("La matrícula es: " + coche.getMatricula() ); 
       System.out.println("La matrícula es: " + coche.getColor() ); 
    } 
 }