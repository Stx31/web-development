<?php

class Animal {
    private $tamanio = "";
    private $tipo = "";

    function __construct($tamanio, $tipo) {
        $this->tamanio = $tamanio;
        $this->tipo = $tipo;
    }

    function saluda() {
        echo "Hola soy de tamaño ".$this->tamanio." y de tipo ".$this->tipo.".";
    }
}

class Pez extends Animal {
    function saluda() {
        parent::saluda();
        echo " Pero además hago glup glup glup";
    }

    function nada() {
        echo "Estoy nadando!!";
    }
}

class Pajaro extends Animal {
    function saluda() {
        parent::saluda();
        echo " Pero además hago pío pío pío";
    }

    function vuela() {
        echo "Estoy volando!!";
    }
}

$pez = new Pez("pequeño", "herbívoro");
$pajaro = new Pajaro("mediano", "carnívoro");

// Pez
$pez->saluda();
echo "<br />";
$pez->nada();
echo "<br /><br />";

// Pájaro
$pajaro->saluda();
echo "<br />";
$pajaro->vuela();
