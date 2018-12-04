

// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// console.log( sumar(10, 20) );


// function saludar(){
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar( nombre ){
//     return `Hola ${ nombre }`;
// }

// let saludar = (nombre) => `Hola ${nombre}`

// console.log( saludar('Jader') );



// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneración',
//     getNombre: function(){
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
//     }
// }

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

