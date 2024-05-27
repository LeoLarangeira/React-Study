//Tipos de import

//import {soma, subtracao, div, mult} from './utils';
//const saudacao = require('./saudacoes')
//const utils = require('./utils')
import * as utils from './utils';
import * as saudacao  from './saudacoes';



console.log(saudacao.saudacao('Leo'))
console.log(utils.soma(2,2))
console.log(utils.subtracao(5,2))
console.log(utils.div(10,5))