const sopa = [
    "MIA.......",
    ".........Z",
    "......JAZZ",
    ".S........",
    ".E..MOVIE.",
    ".B........",
    ".A........",
    ".S........",
    ".T..MUSIC.",
    "IANROMANCE"
];

const grid = document.getElementById('sopa');


sopa.forEach(row => {
    for (let letter of row) {
        const cell = document.createElement('div');
        cell.textContent = letter !== '.' ? letter : ' ';
        grid.appendChild(cell);
    }
});


let selectedCells = [];
grid.addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.classList.toggle('selected');
        if (e.target.classList.contains('selected')) {
            selectedCells.push(e.target);
        } else {
            selectedCells.splice(selectedCells.indexOf(e.target), 1);
        }
    }
});
