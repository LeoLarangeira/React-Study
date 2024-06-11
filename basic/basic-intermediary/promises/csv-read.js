const fs = require('fs')
const path = require('path')


const filePath = path.resolve(__dirname,'tarefas.csv')

//const promiseArchRead = fs.promises.readFile(filePath)

/*promiseArchRead
  .then((file) => file.toString('utf8'))
  .then((fileText) => console.log(fileText.split('\n').slice(1))
  )
  .then((noHeader) => noHeader.map((line) => {
    const [nome, completed] = line.split(';');
    return{
        name, 
        completed : completed === 'true'
    }
  }))
  .catch((error) =>{
    console.log("ERROR ", error)
  }).finally(()=>{
      console.log('Leitura do arquivo finalizada')
  }) */

async function findFile() {
  try{
    const promiseReadFile = await fs.promises.readFile(filePath)
    const fileText = promiseReadFile.toString('utf8')
    console.log(fileText)
  }catch(error){
    console.log(error)
  }finally{
    console.log('Leitura Finalizada')
  }

}

findFile()
