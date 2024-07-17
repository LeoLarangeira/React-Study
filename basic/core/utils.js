// usando o ES6, nos podemos fazer desse jeito aqui 


export function mult(a, b){
    return a * b
};
export function div(a,b){
    return a/b
};

const soma = (a,b) => a + b;
const subtracao = (a,b) => a-b;
module.exports = {soma, subtracao}