/*
Promises e Async
A promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Ela é usada para ldiar com operações async de forma mais simples e mais limpa do que usando callbacks.
Geralmente usamos com requisições de rede, leitura de arquivos, timers, entre outros.
*/


const promessaNumeroQualquer  = new Promise ((resolve, reject)=>{
    setTimeout(() =>{
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000   
    )


})



try {
    
} catch (error) {
    
}finally{

}

// isso é basicamente o código abaixo 

promessaNumeroQualquer.then((value) =>{
    console.log(value)
}).catch((error) =>{
    console.log(error)
}).finally(()=>{
    console.log('FINALIZOU')
})