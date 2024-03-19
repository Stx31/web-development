//async function hello (){
//}
const sing  = async () =>{
    throw new console.error("error xd");
    return `LA LA LA `
}
sing().then((data)=>{
    console.log(" in the middle on the night;",data)
})



//||para separar o esto y lo otro 

const login = async(username , password)=>{
    if (!username || !password) throw  `missing credential`
    if(password === `juanmecanico`) return `welcome!`
    throw`Invalid password bro`
}