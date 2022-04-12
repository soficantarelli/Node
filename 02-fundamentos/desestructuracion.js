const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(getNombre());

/*const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;*/

/**** DESESTRUCTURACION ****/

//Ej1
//{} coloca las propiedades que quiero extraer del objeto
const{nombre, apellido, poder} = {deadpool};
console.log(nombre, apellido, poder);


//Ej2
function imprimeHeroe({nombre, apellido, poder} = {deadpool}){
    console.log(nombre, apellido, poder);
}

imprimeHeroe(deadpool);

//Ej3
const heroes = ['Deadpool', 'Batman', 'Superman'];

/*const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];*/

const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);

//solo me interesa el tercero
const [ , , h4] = heroes;
console.log(h4);