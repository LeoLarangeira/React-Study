//Declaração de Funções 

/*
As funções em JS são como funções em outras linguagens, seu principal conceito/ideia de funcionamento é agrupar um conjunto de códigos que podem ser reutilizados em outras partes do código 
assim evitando uma repetição e facilitando a manutenção!
Segue os diversos tipos de declaração de função
*/


// 1 - Função 


function nomeDaFuncao (param1 , param2){
    sum = param1 + param2;
    return sum;
}

function saudacao (nome){
    return `Òlá, ${nome}`;
}

console.log(saudacao('Leozin do B1'))

// 2 -Função expressa

const nomeDaFuncaoExpressa = function(param1, param2){
    sum = param1 + param2 ;
    return sum;
}

const greeting = function(nome){
    return `Òlá, ${nome}`;
}

console.log(greeting('Leozindob1'))


// 3 - A famosa Arrow Function 

const arrowNameFunction = (param1, param2) =>{
    return param1 + param2 ;
}

const arrowGreeting = (name) => {
    return `Òlá, ${name}`; 
}

const arrowGreetingShort = (name) => `Òlá, ${name}`;


console.log(arrowNameFunction(2, 3))
console.log(arrowGreeting('Arrow Greeting'))
console.log(arrowGreetingShort('Arrow Greeting Short'))


// Funções Aninhadas 
// acho que ficaria como as famosas nested functions 

/*
Funções podem ser definidas dentro de outras funções. A função interna tem acesso às variaveis da função externa 
*/

function externa (){
    let message = 'Hello from the outside';

    function interna(){
        return message
    }


    return interna
}

console.log(externa());


//Funções como objetos de primeira classe 

/* Em Js e tambem no python, as funções são objetos de primeira classe, o que significa que podem ser atribuidas a variáveis, 
passadas como argumentos para outras funções, e retornadas de outras funções */


function cumprimentar(nome, callback){
    console.log(`Òlá, ${nome}`)
    callback();
}

function despedida(){
    console.log('Tchau!');
}

cumprimentar('Leo', despedida)


// Funções de Ordem Superior 

// Funções que recebem outras funções como argumentos ou retornam funções 

function createMult(mult){
    return function(number){
        return number * mult;
    }
}

const dobrar = createMult(2)
console.log(dobrar(2))

const triplicar = createMult(3)
console.log(triplicar(5))
