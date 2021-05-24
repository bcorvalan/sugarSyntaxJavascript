//Spread Operator (Operador de propagación)
/* 
Para llamadas de funciones:

myFunction(...iterableObj);
Para arreglos literales o cadenas de caracteres:

[...iterableObj, '4', 'five', 6];
Para objetos literales (nuevo en ECMAScript 2018):

let objClone = { ...obj };

Más información Mayor informaciòn: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

*/

//Spread Operator con Arrys
const numeros = [1, 2, 4];
let copiaNumeros = numeros;

console.log(
  ` numeros : ${numeros} copiaNumberos : ${copiaNumeros}
  `
);

copiaNumeros[0] = [23];

console.log(
  ` numeros : ${numeros} copiaNumberos : ${copiaNumeros}
  `
);

//Esto es porque cuando asignamos una array o objeto a una variable lo que se crea no es una copia sino una referencia al obejto/array original.
//let copiaNumeros = [...numeros];

console.log(
  ` numeros : ${numeros} copiaNumberos : ${copiaNumeros}
  `
);

//Otro ejemplo de SpredOperator con arrays
const personajesDC = ["Batman", "Mujer Maravilla", "Superman"];
const personajesMarvel = ["Spiderman", "Doctor Strange", "Capitan America"];

// const personajes = personajesDC.concat(personajesMarvel);
const personajes = [...personajesDC, ...personajesMarvel];

console.log(personajes);

//Spread Operator con Strings (cadenas de texto)
const palabra = "React";
const letras = [...palabra];
console.log(letras);

//Spread Operator con funciones

const saludo = (nombre, apellido) => {
  console.log(
    ` Hello ${nombre} ${apellido}
    `
  );
};
const args = ["belen", "corvalan"];
//saludo(args);
saludo(...args);

//Otro ejemplo de SpredOperator con Objeto
const user = {
  name: "Belen Corvalan",
  id: 223
};

//let copyUser = user // es incorrecto

let copyUser = { ...user }; //tenemos que hacer una copia de nuestro objeto.

copyUser.lengauje = "React";

console.log(user);
console.log(copyUser);

/*
Sintaxis Rest (parámetros)
La sintaxis Rest luce exactamente como la sintaxis spread, pero esto es usado por la desestructuración de arreglos y objetos. De cierta forma, la sintaxis rest es la opuesta a la sintaxis spread: spread 'expande' un arreglo en sus elementos, mientras rest agrupa múltiples elementos y los 'condensa' en un único elemento.
*/

const students = ["flor", "mariana", "juan"];
const listStudents = (...names) => {
  console.log(names);
};
listStudents(students);
