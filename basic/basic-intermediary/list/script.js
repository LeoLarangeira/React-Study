//foreach

const { array } = require("yup")

const lista = [1,2,3,4,5,6,7,8,9,10]



const cb = (value, i, listRef) =>{
    console.log(value + i)
}

lista.forEach(cb)


for(let i = 0; i< lista.length; i++){
    const element = array[i]
    cb(element, i, lista)
}

// filter 

lista.filter((element, i, listRef)=>{
    if(element % 2 === 0){
        console.log(i)
        
    }
})


//map 

class Pessoa{
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
    }
}

const pessoaLista = [new Pessoa('Leo', 22) , new Pessoa('Leo2', 22), new Pessoa('Leo3', 22), new Pessoa('Leo4', 22), new Pessoa('Leo5', 22)]

console.log(pessoaLista)

const listaNomes = []


for (let i = 0; i < pessoaLista.length; i++) {
    const element = array[i];
    listaNomes.push(pessoaLista[i]['nome'])

}
console.log(listaNomes)

//ou podemos fazer o seguinte 

const listaMap = pessoaLista.map((element) =>{
        //console.log(element.nome)
        //return element.nome
        return `
            <li>
               Nome: ${element.nome}
               Idade: ${element.idade}
            </li>
        `
})

console.log(listaMap)


//reduce 

const somaDeTodosOsNumeros = lista.reduce((previous, current) =>{
    console.log(previous, current)
    return previous + current
}, 0)

console.log(somaDeTodosOsNumeros)


//filter
const listaNome = [{nome: 'Leo'}, {nome: 'foo'}, {nome: 'baar'}, {nome: 'Leozin'}]

console.log(listaNome.filter((e)=> e.nome.startsWith('f')))

const elementosHTML = listaNome.filter((e) => e.nome.startsWith('Leo')).map(e => `<li> ${e.nome} </li>`).join('')

console.log(elementosHTML)