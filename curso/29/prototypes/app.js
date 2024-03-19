//String.prototype es un "objeto de plantilla" para cada cadena//
//Podríamos  agregar nuestro propio método llamado scream//

String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//Podemos sobrescribir un método Array existente como pop (no es una buena idea):
Array.prototype.pop = function() {
	return 'LO SIENTO, QUIERO ESE ELEMENTO';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "LO SIENTO, QUIERO ESE ELEMENTO"
