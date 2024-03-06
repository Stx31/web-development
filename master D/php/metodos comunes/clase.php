<?php
class miclase {
    public $color;

    public function __construct($valor) {
        $this->color = $valor;
    }

    public function __toString() {
        return $this->color;
    }
}

$objeto = new miclase('rojo');
echo $objeto; //devuelve ‘rojo’
?>
