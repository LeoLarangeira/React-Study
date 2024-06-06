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