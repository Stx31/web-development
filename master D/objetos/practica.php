<?php

class Equipo {
    private $nombre;
    private $ganados;
    private $perdidos;
    
    
    public function __construct($nombre, $ganados, $perdidos) {
        $this->nombre = $nombre;
        $this->ganados = $ganados;
        $this->perdidos = $perdidos;
    }
    
    
    public function leerNombre() {
        return $this->nombre;
    }
    
    public function leerGanados() {
        return $this->ganados;
    }
    
    public function leerPerdidos() {
        return $this->perdidos;
    }
    
    public function porcentajeCalidad() {
        $totalPartidos = $this->ganados + $this->perdidos;
        if ($totalPartidos > 0) {
            return ($this->ganados / $totalPartidos) * 100;
        } else {
            return 0;
        }
    }
    
    
    public function sumarVictoria() {
        $this->ganados++;
    }
    
    public function sumarDerrota() {
        $this->perdidos++;
    }
}


$equipo = new Equipo("Equipo A", 5, 3);
echo "Nombre del equipo: " . $equipo->leerNombre() . "\n";
echo "Partidos ganados: " . $equipo->leerGanados() . "\n";
echo "Partidos perdidos: " . $equipo->leerPerdidos() . "\n";
echo "Porcentaje de calidad: " . $equipo->porcentajeCalidad() . "%\n";

$equipo->sumarVictoria();
$equipo->sumarDerrota();

echo "Después de sumar una victoria y una derrota:\n";
echo "Partidos ganados: " . $equipo->leerGanados() . "\n";
echo "Partidos perdidos: " . $equipo->leerPerdidos() . "\n";
echo "Porcentaje de calidad: " . $equipo->porcentajeCalidad() . "%\n";

?>
