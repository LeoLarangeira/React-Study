//Object Destructuring 

/*
Ela permite extrair valores de objetos e atribui-los a variaveis de forma concisa e legivel, assim, você consegue extrair dados de extruturas
complexas como objetos e arrays
*/

// a sintaxe básica é isso aqui 

//const {prop1, prop2} = objeto;


//Vamos para exemplos

const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
};

const {nome,idade,cidade} = pessoa;

console.log(nome)
console.log(idade)
console.log(cidade)


//usando outros nomes para as variaveis

const {nome: nomePessoa, idade: idadePessoa} = pessoa;
console.log(nomePessoa)
console.log(idadePessoa)

//valores padrões

const person = {
    name: "Carlos"
}

const {name, age = 40} = person;

console.log(name)
console.log(age)

//Destructuring em Funções 

function apresentar({nome, idade}){
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

apresentar(pessoa)

// Rest operator 
const persona = {
    nombre: 'Ana',
    idade: 22,
    profissao: 'Engenheira'
};

const {nombre, ...resto} = persona;

console.log(nombre)
console.log(resto)

