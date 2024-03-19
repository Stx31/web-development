<?php
function doble($i){
    return $i * 2;
}
$b = $a = 5;
/* asignar el valor cinco a la variable $a y $b */
$c = $a++;
/* post-incremento, asignar el valor original de $a (5) a $c */
$e = $d = ++$b;
/* pre-incremento, asignar valor incrementado de $b (6) a $d y $e */
/* en este punto, $d y $e son iguales a 6 */
$f = doble($d++);
/* asignar el doble del valor de $d antes del incremento, 2*6 = 12, a $f */
$g = doble(++$e);
/* asignar el doble del valor de $e después del incremento, 2*7 =14, a $g */
$h = $g += 10;
/* primero, $g es incrementado en 10 y finaliza con el valor 24. El
valor de la asignación (24) es asignado después a $h, y $h finaliza
también con el valor 24. */
?>