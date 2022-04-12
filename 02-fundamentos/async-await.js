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


const getEmpleado = (id) => {
    
    return new Promise( (resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado) 
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    
    return new Promise( (resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario) 
            ? resolve(salario)
            : reject(`No existe el salario para el id ${id}`);
    });
}

const getInfoUsuario = async(id) =>{
    
    try{

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado ${empleado} tiene un salario de ${salario}`;

    }catch(error){
        throw error;
    }

    
}

const id = 1;

getInfoUsuario(id)
    .then(msg =>  console.log(msg))
    .catch(err => console.log(err));