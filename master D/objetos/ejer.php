<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>

</head>
<body >
<?php
class equipo {
    public $nombre;
    public $perdidos;
    public $ganados;
    
    public function equipo($nombre,$ganados,$perdidos){
        $this->nombre = $nombre;
        $this->ganados = $ganados;
        $this->perdidos = $perdidos;
    }
    
    public function leerNombre(){
        return $this->nombre;
    }
    public function leerGanados(){
        return $this->ganados;
    }
    public function leerPerdidos(){
        return $this->perdidos;
    }
    public function porcentajeCalidad(){
        return (($this->ganados * 100)/($this->ganados + $this->perdidos));
    }
    public function sumarVistoria(){
        $this->ganados++;
    }
    public function sumarDerrota(){
        $this->perdidos++;
    }
}

$obj = new equipo('Madrid',5,5);
$obj2 = new equipo('Valencia',2,7);

$obj->sumarVistoria();
$obj->sumarVistoria();

$obj2->sumarVistoria();
$obj->sumarDerrota();

echo $obj->leerNombre().' con '.$obj->leerGanados().' partidos ganados y '.$obj->leerPerdidos(). ' perdidos, tiene una calidad media de '.$obj->porcentajeCalidad().'<br/>';
echo $obj2->leerNombre().' con '.$obj2->leerGanados().' partidos ganados y '.$obj2->leerPerdidos(). ' perdidos, tiene una calidad media de '.$obj2->porcentajeCalidad().'<br/>';

?>
</body>
</html>
