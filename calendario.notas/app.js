
function mostrarResultado() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count++;
      }
    });
  
    let porcentaje = 0;
    if (count === 6) {
      porcentaje = 100;
    } else if (count === 5) {
      porcentaje = 85;
    } else if (count === 4) {
      porcentaje = 60;
    } else if (count === 3) {
      porcentaje = 45;
    }else if (count === 2) {
        porcentaje = 30; }
        else if (count === 1) {
            porcentaje = 10; }
  
    
    alert(`El porcentaje es: ${porcentaje}%`);
  }
  
 
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', mostrarResultado);
  });
  