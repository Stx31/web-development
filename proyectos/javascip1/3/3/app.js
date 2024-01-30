
// var interval;
// function update() {
//     var element = document.getElementById("myprogressBar");
//     //con este se selecciona  lo que queremos usar //
//     var width = 1;

//     if(interval) clearInterval(interval);
//     interval = setInterval(scene, 10);

//     function scene() {
//         if (width >= inp.value) {
//             clearInterval(interval);
//         } else {
//             width++;
//             element.style.width = width + '%';
//         }
//     }
// }

let bar1size = 0;

const inp = document.getElementById("in");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");

function update(bar) {
    bar1size = inp.value
    if(bar === "bar2"){

        bar2.style.width = bar1size + '%';
    }else{

        bar1.style.width = bar1size + '%';
    }
}