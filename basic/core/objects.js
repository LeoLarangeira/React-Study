// Objetos 


//Eles são usados para representar entidades e podem conter propriedades (variáveis) e métodos (funções)

//Criando Objetos 

// 1 - Usando a Sintaxe Literal: 

let pessoa = {
    nome: 'Maria', 
    idade: 30, 
    saudacao: function(){
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

console.log(pessoa.nome)
console.log(pessoa.saudacao())

// 2- Usando a Palavra-Chave new Object();
let person = new Object();
person.nome = "João";
person.idade = 25;
person.saudacao = function() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
};


console.log(person.nome)
console.log(person.saudacao())

// 3 - Usando Funções Construtoras

function Persoon(name, alter){
    this.name = name; 
    this.alter = alter; 
    this.tschuss = function (){
        return `Hallo, ich haisser ${this.name} und ich bin ${this.alter} Jahre alt`;
    }
}

let persoon1 = new Persoon('Leo', 25)
let persoon2 = new Persoon('LeodoB1', 22)

console.log(persoon1.name)
console.log(persoon1.tschuss())

console.log(persoon2.name)
console.log(persoon2.tschuss())


// 4 - Usando a Sintaxe de Classe (ES6)
class Persona{
    constructor(nome, eta){
        this.nome = nome;
        this.eta = eta;
    }
    saluto (){
        return `Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`;
    }
}
let persona1 = new Persona("Lucas", 22);
let persona2 = new Persona("Fernanda", 31);

console.log(persona1.nome);        // Output: Lucas
console.log(persona1.saluto());  // Output: Olá, meu nome é Lucas e eu tenho 22 anos.
console.log(persona2.nome);        // Output: Fernanda
console.log(persona2.saluto());


//Adicionando e Modificando Propriedades 

persona1.sobrenome = 'Teste'
persona1['idade'] = 31
console.log(persona1.sobrenome)
console.log(persona1.idade)
console.log(persona1)


// Excluindo Propriedades 

delete persona1.sobrenome
//isso deve retornar algo como undefined
//console.log(person1.sobrenome)


//Iterando sobre as propriedades 
for (let chave in persona1){
    console.log(chave)
    console.log(persona1[chave])
}

//Métodos 

// Métodos são funções associadas a objetos. Eles podem ser definidos como funções normais dentro do objeto 

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020, 
    descrever: function() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

console.log(carro.descrever())

// Herança de Propriedades 

// Js usa um modelo de herança baseado em protótipos. Cada objeto pode ter um protótipo, e herda e métodos desse protótipo

let animal = {
    tipo: 'mamifero',
    fazerSom: function(){
        return 'Som do Animal'
    }
}

let cachorro = Object.create(animal)
cachorro.raca = "labrador"
cachorro.fazerSom = function(){
    return 'Latido'
}

console.log(cachorro.tipo)
console.log(cachorro.fazerSom())