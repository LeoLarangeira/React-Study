const soma = (a: number, b: number) => {
    console.log(a+b)
}


soma(2,2)
//top 10 coisas que eu tenho dificuldade -> manipulacao de arrays em js 

const array : Array<number> = [1,2,3,4]

const stringArray : string[] = ['a', 'b', 'c']

const findNum = array.find(num => num > 2 )

console.log("length --> ",stringArray.length)
console.log("array original ", array )
array.push(5)
console.log("array modificado ", array)
array.pop()
console.log(array)
console.log(array[0])
console.log("Find number", findNum)


console.log("chama na bota da soma", soma(array[1], array[3]))

//-------------------------------------------------------------------------

array.forEach(num =>{
    console.log("Numb->", num)
    console.log("SUM-> ", num+=num )
})
array.filter(num =>{
    if(num == 4){
        console.log(num)
    }else{
        console.log("Nao e quatro")
    }
})

array.reduce((m,v) =>{
    console.log(m)
    console.log(v)
    return m + v
}, 0)