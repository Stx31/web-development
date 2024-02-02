function realizarAtaque() {
    var pokemon1 = document.getElementById("pokemon1");
    var pokemon2 = document.getElementById("pokemon2");

    var dañoPokemon1 = parseInt(pokemon1.querySelector(".daño").innerText.split(":")[1].trim());
    var dañoPokemon2 = parseInt(pokemon2.querySelector(".daño").innerText.split(":")[1].trim());

    
    var atacante = Math.random() < 0.5 ? pokemon1 : pokemon2;
    var defensor = atacante === pokemon1 ? pokemon2 : pokemon1;

   
    var vidaDefensor = parseInt(defensor.querySelector(".vida").innerText.split(":")[1].trim());
    vidaDefensor -= atacante === pokemon1 ? dañoPokemon1 : dañoPokemon2;

  
    defensor.querySelector(".vida").innerText = "Vida: " + vidaDefensor;

   
    console.log(atacante.querySelector("h2").innerText + " ataca a " + defensor.querySelector("h2").innerText + " causando " + (atacante === pokemon1 ? dañoPokemon1 : dañoPokemon2) + " de daño.");
}
