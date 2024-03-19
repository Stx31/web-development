<html>
	<body><p>		
        <?php
        class miclase
        {
            static $instancias = 0;
            public $valor;
        
            public function __construct() {
                $this->valor = ++self::$instancias;
            }
        
            public function __clone() {
                $this->valor = ++self::$instancias;
            }
        }  
        
        $objeto = new miclase();
        $objeto2 = clone $objeto;      
        
        print("Objeto Original:\n");
        print_r($objeto);
        echo '<br/><br/>';
        print("Objeto Clonado:\n");
        print_r($objeto2);
        ?>
  	</p></body>
</html>


