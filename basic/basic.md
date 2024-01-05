# JavaScript 
  
  ##  O que é JavaScript? 

JavaScript é uma linguagem de **scripting** e orientção a objetos usada para tornar páginas da web interativas. Por exemplo, ela pode ser usada para criar animações complexas, botões clicáveis, menus pop-up, entre outras funcionalidades. Além disso, existem versões avançadas do JavaScript para o lado do servidor, como **Node.js**, que permitem adicionar mais funcionalidades a um site, como coloaboração em tempo real entre múltiplos computadores. 

O JS contém uma biblioteca padrão de objetos, como _Array_, _Date_ e _Math_, e um conjunto básico de elementos de linguagem, como operadores, estruturas de controle e declarações. O JavaScript principal pode ser estendido para vários propósitos, completando-o com objetos adicionais. Por exemplo, o JavaScript do lado do cliente estende o idioma principal fornecendo objetos para controlar um navegador e seu **Modelo de Objeto de Documento (DOM)**.

Além disso, sua sintaxe é baseada nas linguagens **Java** e **C**, suportando POO com protótipos de objeto e classes. Também suporta **programação funcional**, pois **funções** são **objetos de primeira classe** que podem ser facilmente criadas por meio de expressões e passadas ao redor como qualquer outro objeto.

# Operações Básicas

As operações matemáticas básicas incluem **adição** (+), **subtração** (-), **multiplicação** (*), **divisão** (/), **exponenciação** (**) e **resto da divisão** (%). Vamos ver alguns exemplos de como usar essas operações.

Primeiro, vamos declarar duas variáveis n1 e n2, que receberão dois números inteiros inseridos pelo usuário. Em seguida, realizaremos várias operações matemáticas com essas variáveis.

```javascript

var n1 = parseInt(prompt('Digite um número: '));
var n2 = parseInt(prompt('Digite outro número: '));

```
### Adição (+): Adiciona os dois números.

```javascript

  var soma = n1 + n2;

```

### Subtração (-): Subtrai o segundo número do primeiro.


```javascript

  var subtracao = n1 - n2;

```

### Multiplicação (*): Multiplica os dois números.

```javascript

  var multiplicaca = n1 * n2;

```


### Divisão (/): Divide o primeiro número pelo segundo.

```javascript

  var divisao = n1 / n2;

```

### Exponenciação ()**: Eleva o primeiro número à potência do segundo.

```javascript

  var exponenciacao = Math.pow(n1, n2);

```

### Resto da divisão (%): Retorna o resto da divisão do primeiro número pelo segundo.

```javascript

  var resto = n1 % n2;

```

### Finalmente, imprimimos os resultados dessas operações.

```javascript
alert('Soma: ' + soma + '\nSubtração: ' + subtracao + '\nMultiplicação: ' + multiplicacao + '\nDivisão: ' + divisao + '\nExponenciação: ' + exponenciacao + '\nResto: ' + resto);

```


# Condicionais 

Em JavaScript, as **estruturas condicionais** são usadas para _controlar o fluxo de execução do código_. As principais estruturas condicionais são **if**, **else** **if** e **else**. Além disso, também existem os operadores lógicos **AND**, **OR** e **NOT**, e a estrutura **switch**.

## If e Else

### A sintaxe básica para if e else é a seguinte:

```javascript


if (condição) {
 // Código para executar caso a condição seja verdadeira
} else {
 // Senão, executar este código
}


```

A condição dentro dos parênteses pode fazer uso de **operadores de comparação**, que podem retornar **true** ou **false**. O código dentro do _primeiro_ par de chaves **será executado** se a **condição** for **verdadeira**, enquanto o código dentro do _segundo_ par de chaves **será executado** se a condição for **falsa**.

Os **operadores lógicos** **AND**, **OR** e **NOT** podem ser usados para testar várias condições. O operador **&& (AND)** permite encadear duas ou mais expressões para que todas elas tenham que ser avaliadas individualmente como _true_ para que toda a expressão retorne _true_. O operador **|| (OR)** permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como _true_ para que toda a expressão retorne _true_. Posteriormente, falarei de forma um pouco mais aprofundada sobre os operadores lógicos.


## Switch

A estrutura switch é usada quando você deseja definir uma variável para uma determinada opção de valor ou imprimir uma determinada instrução dependendo de uma condição.

### A sintaxe é a seguinte:

```javascript 

switch (expressão) {
 case escolha1:
   // Código para executar se a escolha1 corresponder à expressão
   break;

 case escolha2:
   // Código para executar se a escolha2 corresponder à expressão
   break;

 // Inclua tantos casos quanto desejar

 default:
   // Código para executar se nenhuma das opções corresponder
}


```

# Operadores Lógicos 

Os operadores lógicos em JavaScript são usados para criar **condicionais complexas**. Eles são usados em conjunto com os **operadores de comparação** para formar **expressões booleanas** que podem ser avaliadas como verdadeiras ou falsas. Os operadores lógicos em JavaScript são:

- &&: AND lógico
- ||: OR lógico
- !: NOT lógico

Agora, vamos entender melhor esses operadores através de uma tabela verdade. Uma tabela verdade é uma maneira de visualizar todas as possíveis combinações de valores verdadeiros e falsos para uma expressão lógica.

| A     | B     | A && B | A \|\| B | !A    |
|-------|-------|--------|----------|-------|
| true  | true  | true   | true     | false |
| true  | false | false  | true     | false |
| false | true  | false  | true     | true  |
| false | false | false  | false    | true  |


### 1. E lógico (&&): Retorna verdadeiro se ambos os operandos forem verdadeiros.

```javascript 

true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false

```

### 2. OU lógico (||): Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.


```javascript 

true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false

```

### 3. NÃO lógico (!): Inverte o valor do operando, retornando true se o operando for false, e false se o operando for true.

```javascript 

!true;  // false
!false; // true

```
# Tipagem dinâmica e fraca 

O JS é uma linguagem __dinâmica__ com __tipos dinâmicos__. As variáveis não são diretamente associadas a nenhum tipo de valor especifíco, e qualquer variável pode receber (e reatribuir) valores de todos os tipos.


```javascript 
let foo = 42 // foo agora é um int

foo = "bar"; // foo agora é uma string

foo = true; // foo agora é um booleano
```

O JS tambem é uma linguagem com __tipagem fraca__, o que significa que permite a __conversão implicita__ de tipo quando uma operação envolve tipos incompatíveis, em vez de gerar __erros de tipo__!

```javascript

const foo = 42; //foo inicialmente é inicializada como inteiro

const result = foo + "1"; // o JS transforma foo em uma string para que possa ser concatenada

console.log(result); // 412

```

Coerções implícitas são muito convenientes, porem podem ser uma arma em potencial se os desenvolvedores não pretendem fazer a conversão ou pretendem converter na outra direção (por exemplo, string para número em vez de número para string!). Para __symbols__ e __BigInts__, o JS desativou intencionalmente certas conversões de tipo implicito.
# Tipos de Variáveis

Em JavaScript, existem três tipos principais de variáveis: números, strings e objetos. Cada um desses tipos de variáveis pode armazenar diferentes tipos de dados.


### 1. Números: 
Este tipo de variável pode armazenar valores numéricos, sejam eles inteiros ou decimais.
```javascript

   var idade = 25; // número inteiro
   var altura = 1.75; // número decimal

```
### 2. Strings:
 Este tipo de variável pode armazenar uma sequência de caracteres. As strings são geralmente usadas para armazenar texto

```javascript 

   var nome = "João"; // string


```

### 3. Objetos: 
Este tipo de variável pode armazenar um conjunto de pares de chaves e valores. Um objeto é declarado usando chaves {}

```javascript

   var pessoa = {
       nome: "João",
       idade: 25,
       altura: 1.75
   }; // objeto

```

Em JavaScript, existem vários tipos de variáveis além dos já mencionados (números, strings e objetos). Vamos explorar mais detalhadamente:

### Booleanos: 
Este tipo de variável pode armazenar um valor verdadeiro (true) ou falso (false).

```javascript

   var isAdult = true; // boolean

```

### Null: 
Este é um tipo especial que representa a ausência intencional de qualquer objeto de valor. É frequentemente usado para indicar que uma variável não aponta para um objeto.

```javascript 

  var emptyValue = null; // null

```

### Undefined:
  Este é um tipo especial que representa a ausência de valor. Uma variável que foi declarada, mas não inicializada, tem o valor undefined

```javascript 

   var uninitializedVariable; // undefined

```

### Symbol:

 Este é um tipo de dado introduzido no ES6. Cada instância de Symbol é única e não igual a nenhum outro valor, incluindo outros Symbols. Symbols são comumente usados como chaves de objeto para evitar conflitos com outras partes do código.

 ```javascript

    var symbolKey = Symbol(); // symbol

 ```

 ### BigInt

 Este é um tipo de dado introduzido no ES2020. BigInt é usado para armazenar números inteiros grandes, que não podem ser representados com segurança usando o tipo Number.

```javascript

  var bigNumber = 1234567890123456789012345678901234567890n; // bigint

```

# Estrutura de dados

__Todas__ as linguagens de programação __possuem estruturas de dados__ embutidas, embora essas estruturas possam variar de uma linguagem para outra. No entanto, sua __essência e propósito _geralmente_ são os mesmos__. Essas estruturas são projetadas para serem utilizadas na construção de outras formas de dados, e sempre que possível, faremos comparações com outras linguagens.

Em resumo, uma __estrutura de dados__ é um formato que __organiza__, __gerencia__ e __armazena dados__, oferecendo meios de __acesso__ e __modificações__.

## Arrays

É um tipo de dado que pode armazenar múltiplos valores em uma única variável.

```javascript 
let numbers = [1,2,3,4,5,6]; //numbers é um array
let letters = ['a', 'b','c','d']; //letters é um array 
let name = ['l','e','o']; //name tambem e um array
```
Em JS também é possível colocar valores de multiplos tipos no mesmo array.

```javascript 
let arr = ['store', 1, 'whatever', 2.0, 'you want', true];
```

Essa é uma característica crucial; dessa forma, podemos incorporar mais de um array dentro de outro em JavaScript, resultando no __array multidimensional__.

```javascript
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ];
```
## Objects (hash-tables) && Maps

Em JavaScript, tanto objetos (Objects) quanto mapas (Maps) são estruturas de dados usadas para armazenar pares chave-valor. No entanto, existem algumas diferenças fundamentais entre eles:

É dessa maneira que criamos um object e um map em JS:
```javascript
// Objeto em JavaScript

const objetoExemplo = {
  chaveString: 'valor1',
  'outra-chave': 'valor2',
  42: 'valor3'
};

// Mapa em JavaScript
const mapaExemplo = new Map([
  ['chaveString', 'valor1'],
  ['outra-chave', 'valor2'],
  [42, 'valor3']
]);
```

### Diferenças fundamentais 

#### 1. Tipo de Chave 

- __Objetos__: As chaves em objetos JavaScript são strings ou símbolos. No entanto, as strings são automaticamente convertidas em símbolos se necessário.
- __Mapas__: As chaves em mapas podem ser de qualquer tipo de dado, incluindo objetos, funções e valores primitivos.

```javascript
// Tipo de Chave
objetoExemplo[42] = 'valor4'; // A chave 42 é automaticamente convertida em uma string.
mapaExemplo.set(function() {}, 'valor4'); // Função como chave.
```

#### 2. Ordem das Chaves

- __Objetos__: Não garantem uma ordem específica das chaves. A ordem das propriedades pode depender de vários fatores, como o mecanismo JavaScript ou a ordem de inserção.
- __Mapas__: Mantêm a ordem de inserção das chaves. Isso significa que a ordem em que você insere e itera sobre as chaves será a mesma.

```javascript
// Ordem das Chaves
console.log(Object.keys(objetoExemplo)); // Pode variar a ordem.
for (const [chave, valor] of mapaExemplo) {
  console.log(chave, valor); // Ordem garantida.
}
```

#### 3. Iteração

- __Objetos__: Para iterar sobre as propriedades de um objeto, você precisa usar técnicas como __for...in__ ou __*Object.keys()*__.
- __Mapas__: Oferecem métodos __dedicados__ para iteração, como __forEach__, __for...of__, e outros, o que torna mais __fácil__ trabalhar com eles em comparação com __objetos__.

```javascript
// Iteração
Object.keys(objetoExemplo).forEach(chave => console.log(chave, objetoExemplo[chave]));
mapaExemplo.forEach((valor, chave) => console.log(chave, valor));
```

#### 4. Tamanho
- __Objetos__: **Não** possuem um método direto para **obter** o **número** de **propriedades**. Você precisa usar **_Object.keys(obj).length._**
- __Mapas__: Têm um método **size** que fornece **diretamente** o **número** de pares **chave-valor**.

```javascript
// Tamanho
console.log(Object.keys(objetoExemplo).length); // Número de propriedades.
console.log(mapaExemplo.size); // Método size diretamente.
```
### 5. Uso em Contextos Especificos
- __Objetos__: São mais **comumente** usados quando as **chaves** são **strings** ou **símbolos** e quando a **_ordem das propriedades_** **_não importa muito_**.
- __Mapas__: São preferidos quando é _**necessário manter a ordem das chaves**_, ou quando as _**chaves podem ser de vários tipos diferentes**_.


Em resumo, enquanto objetos são mais adequados para casos simples com chaves de string ou símbolos, mapas oferecem flexibilidade adicional com tipos de chave variados, ordem garantida e métodos específicos para iteração e manipulação. A escolha entre eles depende do contexto específico de uso.


## Set
O set é uma coleção de valores únicos, onde cada valor deve ser único. ele fornece métodos para adicionar, remover e verificar a existência de elementos:

```javascript 
const meuSet = new Set([1, 2, 3, 3, 4]); //  {1, 2, 3, 4}
meuSet.add(5); //{1, 2, 3, 4, 5}
console.log(meuSet.has(3)); // Saída: true
```


## Array Buffer e TypedArrays

Array Buffer é uma estrutura de dados que representa uma área de memória bruta, enquanto Typed Arrays fornecem uma visão específica desse buffer, permitindo o trabalho com dados binários de maneira eficiente.
### Arrary buffer

O ArrayBuffer é uma estrutura de daos que representa uma área de memória bruta. Ao contrário de arrays tradicionais em JS, o ArrayBuffer não permite acesso direto aos seus elementos. Em vez disso, ele fornece um local para armazenar dados binários de forma eficiente. O tamanho do ArrayBuffer é especificado em bytes durante a criação.


```javascript
const buffer = new ArrayBuffer(8) 
```
_Eu recomendo realizar testes com essas variáveis para observar como funcionam na prática. Isso proporcionará uma perspectiva mais concreta e enriquecerá sua compreensão durante os estudos._

### Typed Arrays

Os Typed Arrays são vistas específicas dos dados armazenados em um 'ArrayBuff'. Eles fornecem maneiras eficientes de interagir com dados binários, proporcionando uma interface para ler e escrever valores de tipos especificos. Existem vários tipos de Typed Arrays, como __Int8Array__, __Uint8Array__, __Int16Array__, __Uint16Array__, __Int32Array__, __Uint32Array__, __Float32Array__ e __Float64Array__, cada um correspondendo a um tipo de dado específico.

```javascript
const buffer = new ArrayBuffer(16); //16 bytes
const intArray = new Int32Array(buffer); // Cria uma "vista" de 4 inteiros de 32 bits

// Atribui valores aos inteiros
intArray[0] = 42;
intArray[1] = 17;

console.log(intArray); // Saída: Int32Array [ 42, 17, 0, 0 ]
```

Ao usar Typed Arrays, você pode manipular dados binários de maneira eficiente, especialmente útil em operações que requerem manipulação direta de bytes, como processamento de imagens, áudio e comunicação de rede.

Ambas as estruturas, Array Buffers e Typed Arrays, são comumente usadas em conjunto para manipular dados binários em JavaScript de maneira eficiente e segura. Elas são especialmente úteis em cenários onde o desempenho e o controle preciso dos dados são essenciais.

## WeakMap e WeakSet
WeakMap e WeakSet são variantes de Map e Set, respectivamente, que permitem a coleta de lixo dos itens quando não são mais referenciados em outras partes do código.

### WeakMap

Um WeakMap é uma coleção de pares chave-valor em que as chaves são objetos e os valores podem ser de qualquer tipo. Ao contrário de um Map regular, as chaves em um WeakMap são __fracas__ __(weak)__, o que significa que não impedem a coleta de lixo para os objetos usados como chaves. _Em outras palavras, se não houver outras referências para um objeto usado como chave, ele pode ser removido da memória._

#### Uso típico:
Os WeakMaps são úteis quando você deseja associar dados adicionais a objetos sem impedir que esses objetos sejam coletados pelo garbage collector. Isso é particularmente útil em situações onde você está anexando informações a objetos temporários ou privados.

```javascript
let weakMap = new WeakMap();

let objetoChave = {};
weakMap.set(objetoChave, "Valor associado à chave");

console.log(weakMap.get(objetoChave)); // Saída: Valor associado à chave

```

### WeakSet

Semelhante a um WeakMap, um WeakSet é uma coleção de objetos. No entanto, em um WeakSet, os objetos são fracos e não impedem a coleta de lixo. _A principal característica é que, ao contrário de um Set regular, um WeakSet só aceita objetos como membros e não permite iteração sobre seus elementos._

#### Uso típico
WeakSets são __úteis__ quando você precisa __manter__ uma __coleção de objetos únicos__, mas __não deseja impedir__ a __coleta de lixo__ nesses objetos.

```javascript
let weakSet = new WeakSet();

let objeto1 = {};
let objeto2 = {};

weakSet.add(objeto1);
weakSet.add(objeto2);

console.log(weakSet.has(objeto1)); // Saída: true
console.log(weakSet.has(objeto2)); // Saída: true

// Não há método para iterar sobre elementos em um WeakSet
```

_Em resumo, WeakMap e WeakSet são úteis quando você precisa associar dados a objetos ou manter uma coleção de objetos únicos, mas deseja permitir que esses objetos sejam coletados pelo garbage collector quando não são mais referenciados em outras partes do código._

## Funções 

As funções em JavaScript são __blocos de código__ que realizam uma tarefa específica. Elas permitem que você armazene um pedaço de código que realiza uma tarefa dentro de um bloco, e então __chame aquele código__ sempre que você __precisar usá-lo__ com um curto comando.
Existem várias maneiras de definir funções em JS.

### __1- Função declarada__: É a maneira mais comum de definir uma função.
Uma função declarada tem um nome e pode ser chamada antes de ser definida graças ao conceito de hoisting

```javascript 

function myFunction(){
  console.log("Hello World")
}

```

### __2 - Função Expressão__: Nesse caso, a função é atribuída a uma variavel. 

Essa função é anônima, o que significa que ela não tem um nome próprio. Funções expressas não sofrem hoisting, o que significa que devem ser definidas antes de serem chamadas
```javascript
var myFunction = function(){
  console.log("Hello World")
}

```
### __3 - Função Seta (arrow function)__: Introduzida no ES6, é uma maneira mais curta de escrever funções. 
São frequentemente usadas em códigos modernos de JavaScript. As funções de seta não têm seu próprio this, arguments, super ou new.target. Além disso, elas não podem ser usadas como construtores. Outra característica importante das funções de seta é que elas não sofrem hoisting

```javascript
const myFunction = () =>{
  console.log("Hello World")
}
```

Para chamar uma função, você precisa usar o nome da função seguida por parênteses():

```javascript
myFunction() // Imprime Hello World 
```

As funções aceitam parâmetros, que são valores que você pode passar para a função quando a chama:

```javascript
function myFunction(name){
  console.log("Hello " + name)
}

var myVarFunction = function(name){
  console.log("Hello " + name)
}

const myArrowFunction = (name) => {
  console.log("Hello " + name)
}

myFunction("Leo") // Hello Leo
myVarFunction("Leo") // Hello Leo
myArrowFunction("Leo") // Hello Leo
```

Em resumo, você deve usar funções declaradas quando quiser criar uma função no escopo global e torná-la disponível em todo o código. Use expressões de função para limitar o local em que a função estará disponível, manter o escopo global mais leve e fazer a manutenção de uma sintaxe limpa. As funções de seta são úteis para funções menores e quando você quer manter o contexto de this