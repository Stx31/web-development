<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>

</head>
<body >
<?php
class equipo {
    public $nombre;
    public $puntos_clasificacion;
    public $ganar = 3;
    public $empatar = 2;
    public $perder = 1;
    
    public function equipo($nombre){
        $this->nombre = $nombre;     
        $this->puntos_clasificacion = 0;   
    }
    
    public function leerNombre(){
        return $this->nombre;
    }
    
    public function ponerNombre($nombre){
        $this->nombre = $nombre;
    }
    
    public function leerClasificacion(){
        return $this->puntos_clasificacion;
    }
    public function insertarPuntuacion($res){
        switch ($res){
            case 'ganado':
                $this->puntos_clasificacion += $this->ganar;
                break;
            case 'empatado':
                $this->puntos_clasificacion += $this->empatar;
                break;
            case 'perdido':
                $this->puntos_clasificacion += $this->perder;
                break;
        }
    }
    public function __clone() {
        $this->ganar = 4;
        $this->empatar = 1;
        $this->perder = 0;
        $this->puntos_clasificacion = 0; 
    }
}

$obj = new equipo('Madrid');
$obj2 = clone $obj;
$obj2->ponerNombre('Madrid  B');

$obj->insertarPuntuacion('ganado');
$obj2->insertarPuntuacion('ganado');

echo $obj->leerNombre().' lleva puntuacion '.$obj->leerClasificacion().'<br/>';
echo $obj2->leerNombre().' lleva puntucacion '.$obj2->leerClasificacion().'<br/>';

?>
</body>
</html>
