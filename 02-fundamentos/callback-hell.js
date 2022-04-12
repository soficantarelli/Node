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


const getEmpleado = (id, callback) => {
    //busco en empleados uno que coincida con el id que le paso
    const empleado = empleados.find(e => e.id === id);

    if (empleado){
        callback(null, empleado); //coloco null para que mande ese valor para error y salga que el empleado existe
    } else{
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario; //? pregunto si existe para que ejecute lo que sigue

    if (salario){
        callback(null, salario);
    } else{
        callback(`El salario para el id ${id} no existe`);
    }
}

getEmpleado(1, (err, empleado) => {
    
    if(err){
        console.log("Error");
        return console.log(err);
    }
    
    getSalario(1, (err, salario) => {
    
        if(err){
            console.log("Error");
            return console.log(err);
        }

        console.log("El empleado:", empleado.nombre, "tiene un salario de:", salario );
        
    });
    
});