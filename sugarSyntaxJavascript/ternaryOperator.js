/*Ternary Operator (Operador Ternario)

Sintaxis :
condición ? expr1 : expr2 

Misma funcionalidad que el if /else
if(userAge >= legalAge){
  console.log('Es mayor de edad')
}
else{
  console.log('Es menor')
}
Más información Mayor informaciòn: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/

let userAge = 19;
const legalAge = 18;

const acces = userAge >= legalAge ? "Es mayor" : "Es menor";
console.log(acces);
