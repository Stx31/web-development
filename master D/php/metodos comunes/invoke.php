<?php
class miclase {
    public $color;

    public function __construct($valor) {
        $this->color = $valor;
    }

    public function __invoke($numero) {
        echo 'comprar ' . $numero . ' de color ' . $this->color;
    }
}

$objeto = new miclase('rojo');
$objeto(4);
?>
