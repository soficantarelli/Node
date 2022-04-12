//Funcion que se manda como argumento a otra

//Ej1
const getUsuarioByID = (id) => {
    const usuario = {
        id,
        nombre: "Sofia"
    }

    setTimeout(() => {
        console.log(usuario);
    }, 1000);
}

getUsuarioByID(10);

//Ej2

const getUsuarioByID2 = (id, callback) => {
    const user = {
        id,
        nombre: "Ana"
    }

    setTimeout(() => {
        callback(user);
    }, 1000);
}

getUsuarioByID2(5, (usuario) => {
    console.log(usuario.nombre.toUpperCase());
});