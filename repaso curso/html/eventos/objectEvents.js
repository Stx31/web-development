
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
}


const eventEmitter = new EventEmitter();


eventEmitter.on('customEvent', (message) => {
    console.log(`Evento personalizado disparado: ${message}`);
});

const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', function () {

    eventEmitter.emit('customEvent', '¡Hola desde el evento personalizado!');
});
