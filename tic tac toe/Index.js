let turn = true
const setX = new Set() //constantes//
const setO = new Set()
const winConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]//win condi//
const table = document.querySelector('.table')
const buttons = [...table.children]
table.addEventListener('click', event=>{ //al escuchar clcik  =event//
    const btn = event.target
    const index = buttons.indexOf(btn)
    if (index < 0) return
    updateGame(index, btn)

})

function updateGame(index, btnNode) {
    btnNode.textContent = turn?'X':'O' // cambiar turno//
    const setAux = turn? setX: setO
    setAux.add(index)
    const won = winConditions.some(winCond => winCond.every(i => setAux.has(i)))
    if (won) document.querySelector('#winner').textContent = `Ganador: ${turn?'X':'O'}`
    turn = !turn
}
function reset(){
    document.querySelectorAll(".xd").forEach((Element)=> {
        Element.innerHTML="";
    })
}