document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let currentPlayer = 'blue';
  
    boxes.forEach(box => {
      box.addEventListener('click', () => {
        if (!box.classList.contains('blue') && !box.classList.contains('red')) {
          box.classList.add(currentPlayer);
          currentPlayer = currentPlayer === 'blue' ? 'red' : 'blue';
        }
      });
    });
  });
  