const empleados = [
    {
        id: 1,
        nombre: "Nombre1"
    },
    {
        id: 2,
        nombre: "Nombre2"
    },
    {
        id: 3,
        nombre: "Nombre3"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


/**** Promesas ****/

//Forma1
const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    
    const promesa = new Promise( (resolve, reject) => {

        if (empleado){
            resolve(empleado);
        } else{
            reject(`No existe el empleado con id ${id}`);
        }

    });

    return promesa;
}

const getSalario = (id) => {
    const salario = salarios.find(e => e.id === id)?.salario;
    
    const promesa = new Promise( (resolve, reject) => {

        if (salario){
            resolve(salario);
        } else{
            reject(`No existe el salario para el id ${id}`);
        }

    });

    return promesa;
}

/*const id = 1;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
*/

//Forma2
const getEmpleado2 = (id) => {
    
    return new Promise( (resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado) 
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const getSalario2 = (id) => {
    
    return new Promise( (resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario) 
            ? resolve(salario)
            : reject(`No existe el salario para el id ${id}`);
    });
}


const id2 = 1;

getEmpleado2(id2)
    .then(empleado => {
        
        getSalario2(id2)
            .then(salario => {
                console.log('El empleado',empleado, 'tiene un salario de', salario)
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

