// First Class Functions 



//Higher Order Functions





function falarMeuNome(){
    console.log('Meu nome é leo')
}

const referenciaNova = falarMeuNome

referenciaNova()


function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Alves da costa')
}

falarMeuNomeCompleto(falarMeuNome)


function funcao1(){
    console.log(this)
}


const funcao2 = () => {
    console.log(this)
}

const leo = {
    nome: "leo",
    funcao1, 
    funcao2 
}

leo.funcao1()
leo.funcao2()

//closure 

function soma(x){
    return (y) => {
        return x + y;
    }
}

console.log(soma(10)(20))

const pessoa = {
    nome: "Leo",
    idade: 30
}

function gritar(prfixo){
    console.log(prfixo, this.nome)
}

gritar.apply()



function adicao(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function mult(x,y){
    return x*y
}


function calculadora(x, operacao, y){
    console.log(operacao(x,y))

}


calculadora(10,adicao,20)
//isso equivale a isso aqu: 

document.getElementById('btn1').addEventListener('click', () =>{
    console.log('Clicou')
})