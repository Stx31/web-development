//defaul parametros
function rollsdie(numberSides) {
    return Math.floor(Math.random() * numberSides) + 1
}

//spreads//
const cats = [`blue`, `samuel `, `xddddddd`];
const dogs = [`pacho `, `x22`, `dukeaa`];

const pets = [...cats, ...dogs]


const datafromform = {
    emaiil: `blueman#gmail.com`,
    password: `123567`,
    username: ` nosecomomellamo`,

}
const newuser = { ...datafromform, id: 235, isAdimn: false }

//rest //

function sum(...numbs) {
    return numbs.reduce((total, el) => total + el)
}

//Destructuring Arrays //

const scores = [8978128, 4783287, 238993, 293848, 2345];
const highscore = scores[0];
const secondhighscore = scores[1];
const [gold, silver] = scores

//destructuring objects////////
const user = {
    email: `kevin`,
    paswword: `hernndnedzzz`,
    firstname: `keb`,
    lastname: `yoqse`,
    born: `elsalvador`,
    die: `tomorrow`,
    city: `santander`,
    state: `nose`,
}


// opcion 1 //
const firstname = user.firstname;
const lastname = user.lastname;
const email = user.email;
const born = user.born;

//opcion 2 //
//const{email , firt name , lastname , paswwod , city  }= user ;


//params Destructuring //


function fullname(user, args = { showLastName: false }) {
    return `${user.firstname} ${args?.showLastName ? user.lastname : ""}`
}

console.log(fullname(user))
console.log(fullname(user, { showLastName: true }))