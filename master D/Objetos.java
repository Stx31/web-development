class Coche
	{
	   String marca;
	   String modelo;
	   String color;
	   int numeroDePuertas;
	   int cuentaKilometros;
	   int velocidad;
	   boolean arrancado;
	   void arrancar()
	   {
	      arrancado = true;
	   }
	   void parar()
	   {
	      arrancado = false;
	   }
	   void acelerar()
	   {
	      velocidad = velocidad + 1;
	   }
	   void frenar()
	   {
	      velocidad = velocidad – 1;
	   }
	   void pitar()
	   {
	      System.out.println("Piiiiiiiiiiiiiiiiiiiii");
	   }
	   int consultarCuentaKilometros()
	   {
	      return cuentaKilometros;
	   }
	}

	coche1.color = "rojo";
	coche1.numeroDePuertas = 3;
	coche1.velocidad = 0;
	coche1.arrancado = false;
	coche1.arrancar();

	// crear arrays 
	int[] nombreArray;
	int nombreArray[];

	nombreArray = new int[30];

	double[] arrayDouble = {1.1, 2.2, 3.3, 4.4};
	String[] meses = {"Enero", "Febrero", "Marzo", "Abril"};

	System.out.println("El primer mes del año es: " + meses[0]);