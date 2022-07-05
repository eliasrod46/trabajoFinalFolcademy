function suma(a: number, b:number){
    return a+b;
}
function resta(a: number, b:number){
    return a-b;
}
function multip(a: number, b:number){
    return a*b;
}
function div(a: number, b:number){
    return a/b;
}

let num1 = 2
let num2 = 8

console.log(`La suma de ${num1} + ${num2} es: ${suma(num1,num2)}`);
console.log(`La resta de ${num1} - ${num2} es: ${resta(num1,num2)}`);
console.log(`La multiplicacion de ${num1} x ${num2} es: ${multip(num1,num2)}`);
console.log(`La division de ${num1} / ${num2} es: ${div(num1,num2)}`);
