
class Empleado {
    constructor(id, nombre, puesto, salarioBase, proyectos = []) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.salarioBase = salarioBase;
        this.proyectos = proyectos;
    }

    asignarProyecto(proyecto) {
        this.proyectos.push(proyecto);
    }

    calcularSalario() {
        const bonificacionPorProyecto = 200; 
        return this.salarioBase + (this.proyectos.length * bonificacionPorProyecto);
    }

    listarProyectos() {
        console.log(`Proyectos de ${this.nombre}:`);
        this.proyectos.forEach(proyecto => {
            console.log(`- ${proyecto}`);
        });
    }
}


class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
    }

  
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }

   
    encontrarEmpleadoPorId(id) {
        return this.empleados.find(empleado => empleado.id === id);
    }

   
    listarEmpleados() {
        this.empleados.forEach(empleado => {
            console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}, Salario: ${empleado.calcularSalario()}`);
        });
    }

    
    asignarProyectoAEmpleado(id, proyecto) {
        const empleado = this.encontrarEmpleadoPorId(id);
        if (empleado) {
            empleado.asignarProyecto(proyecto);
        } else {
            console.log(`Empleado con ID ${id} no encontrado`);
        }
    }


    filtrarPorPuesto(puesto) {
        return this.empleados.filter(empleado => empleado.puesto === puesto);
    }

    
    listarEmpleadosConSalarioSuperior(salario) {
        return this.empleados.filter(empleado => empleado.calcularSalario() > salario);
    }
}


const empresa = new Empresa('Tech Solutions');

const empleado1 = new Empleado(1, 'Juan Perez', 'Desarrollador', 3000);
const empleado2 = new Empleado(2, 'Ana Garcia', 'Diseñadora', 2800);
const empleado3 = new Empleado(3, 'Carlos Ramirez', 'Gerente de Proyecto', 5000);
const empleado4 = new Empleado(4, 'Maria Lopez', 'Desarrolladora', 3200);


empresa.agregarEmpleado(empleado1);
empresa.agregarEmpleado(empleado2);
empresa.agregarEmpleado(empleado3);
empresa.agregarEmpleado(empleado4);


empresa.asignarProyectoAEmpleado(1, 'Proyecto A');
empresa.asignarProyectoAEmpleado(1, 'Proyecto B');
empresa.asignarProyectoAEmpleado(2, 'Proyecto C');
empresa.asignarProyectoAEmpleado(4, 'Proyecto D');
empresa.asignarProyectoAEmpleado(4, 'Proyecto E');


console.log('Lista de todos los empleados:');
empresa.listarEmpleados();


console.log('\nProyectos de un empleado específico:');
const empleadoEspecifico = empresa.encontrarEmpleadoPorId(1);
if (empleadoEspecifico) {
    empleadoEspecifico.listarProyectos();
}


console.log('\nEmpleados en el puesto "Desarrollador":');
const desarrolladores = empresa.filtrarPorPuesto('Desarrollador');
desarrolladores.forEach(dev => {
    console.log(`ID: ${dev.id}, Nombre: ${dev.nombre}, Salario: ${dev.calcularSalario()}`);
});


console.log('\nEmpleados con salario superior a 3500:');
const empleadosConSalarioSuperior = empresa.listarEmpleadosConSalarioSuperior(3500);
empleadosConSalarioSuperior.forEach(empleado => {
    console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}, Salario: ${empleado.calcularSalario()}`);
});
