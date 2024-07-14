document.getElementById('psaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dpi = parseFloat(document.getElementById('dpi').value);
    const sensibilidad = parseFloat(document.getElementById('sensibilidad').value);
    
    if (isNaN(dpi) || isNaN(sensibilidad)) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }
  
   
    const psa = dpi * sensibilidad;
  
   
    document.getElementById('resultado').innerText = `Tu PSA es: ${psa.toFixed(2)}`;
  });
  