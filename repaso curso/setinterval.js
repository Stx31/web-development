
const intervalId = setInterval(() => {
    console.log('Este mensaje aparece cada 1 segundo');
}, 1000);


setTimeout(() => {
    clearInterval(intervalId);
    console.log('stop 5');
}, 5000);
