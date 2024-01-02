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