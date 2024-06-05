//em js a forma que fazemos herança é usando os prototipos 
/*const pessoa ={
  generos:"masculino"
}

const leo ={
  nome: "Leo",
  idade: 30, 
  __proto__: pessoa
}
*/

function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.falar = function(){
  console.log(`Meu nome é: ${this.nome}`)
}

const leo = new Pessoa('Leo', 22)

console.log(leo)
leo.falar()


class Person {
   constructor(nome, idade){
      this.nome = nome
      this.idade = idade
   }

   falar(){
    console.log(`Meu nome é ${this.nome}`)
   }
}

//create objects 

const vehicle = {
      type: 'car'
}

const ford = Object.create(vehicle)

ford.name = 'Maverick'

console.log(ford.type)


const renan = {
  nome: 'Renan'
}

renan.__proto__ = {
  idade: 30
}

console.log(renan.idade)