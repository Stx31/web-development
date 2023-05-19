const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("me has clickeado!")
    console.log("se que funciona!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("no me toques crack!")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert(' has clickeado  h1!')
}


const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("que si bro ");
})

function twist() {
    console.log("vamos ")
}
function shout() {
    console.log("xd")
}

const tasButton = document.querySelector('#tas');



tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
