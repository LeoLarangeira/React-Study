## Como o css grid funciona?

Basicamente o css grid divide a tela em uma grade de lihas e colunas, oferecendo um conjunto de propriedades para manipular elementos das formas mais variáveis possíveis.



![grid](https://www.alura.com.br/artigos/assets/css-grid-guia-propriedades-grid-container-grid-item/imagem1.jpg)

### Propriedades do grid container 

Por padrão, iremos utilizar o seguinte modelo de html, assim podemos focar apenas no css

~~~html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
~~~


#### 1.  display: grid 

A propriedade display com o valor grid é o ponto de partida para criar um grid container. Ela transforma um elemento HTML em um contêiner de grade, onde você pode organizar os elementos filhos em linhas e colunas.


~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 5% 5% 0 5%;
  width: 100vw;
  font-size: 2rem;
}

.container {
  display: grid;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~

#### 2.  grid-template-columns

A propriedade grid-template-columns é usada para definir o número e o tamanho das colunas em um contêiner de grade CSS.

~~~css

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 0 0 50px;
  font-size: 2rem;
}

.container {
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~

### 3 . grid-template-rows


A propriedade grid-template-rows funciona de maneira semelhante à grid-template-columns, mas em vez de definir as colunas, você define o número e o tamanho das linhas em um contêiner de grade CSS.


~~~css

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 0 0 50px;
  font-size: 2rem;
}

.container {
  display: grid;
  grid-template-rows: 200px 200px 200px 200px 200px 200px;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}

~~~


### 4. grid-template-areas 

Essa propriedade permite que você defina áreas nomeadas no grid, facilitando a organização de elementos filihoes em regiões específicas do layout.
Nesse, vamos usar um template HTML diferente 

~~~html
<div class="container">
  <div class="item cabecalho">Cabeçalho</div>
  <div class="item menu-lateral">Menu Lateral</div>
  <div class="item principal">Conteúdo Principal</div>
  <div class="item rodape">Rodapé</div>
</div>
~~~

~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  font-size: 2rem;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 200px 500px 200px;
  grid-template-areas:
    "cabecalho cabecalho cabecalho"
    "menu-lateral principal principal"
    "rodape rodape rodape";
}

.cabecalho {
  grid-area: cabecalho;
}

.menu-lateral {
  grid-area: menu-lateral;
}

.principal {
  grid-area: principal;
}

.rodape {
  grid-area: rodape;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~


### 5. grid-template

Essa é uma propriedade abreviada que combina grid-template-rows, grid-template-columns e grid-template-areas para definir o layout da grade em uma única linha. 

~~~html
<div class="container">
  <div class="item cabecalho">Cabeçalho</div>
  <div class="item menu-lateral">Menu Lateral</div>
  <div class="item principal">Conteúdo Principal</div>
  <div class="item rodape">Rodapé</div>
</div>
~~~

~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  font-size: 2rem;
}

.container {
  display: grid;
  /* grid-template-columns: 1fr 3fr;
  grid-template-rows: 200px 500px 200px; */
  grid-template: 200px 500px 200px / 1fr 3fr;
  grid-template-areas:
    "cabecalho cabecalho cabecalho"
    "menu-lateral principal principal"
    "rodape rodape rodape";
}

.cabecalho {
  grid-area: cabecalho;
}

.menu-lateral {
  grid-area: menu-lateral;
}

.principal {
  grid-area: principal;
}

.rodape {
  grid-area: rodape;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~

### 6. grid-auto-rows 

É usada para definir o tamanho padrão das linhas que são criadas automaticamente em um contêiner de grade css quando não há uma especificação explícita para essas linhas. Isso é útil quando você possui um layout em grade onde algumas colunas ou linhas são explicitamente definidas, mas outras são criadas dinamicamente com base no conteúdo.

(Voltaremos a utiliizar o template padrão)

~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  font-size: 2rem;
}

.container {
  padding: 10px;
  border: 1px solid #2bdefd;
  display: grid;
  grid-template-columns: 100px 50px 100px;
  /* grid-template-rows: 100px; */
  grid-auto-rows: 100px;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}

~~~

### 7. grid-auto-columns 

É semelhante à grid-auto-rows, mas ela controla o tamanho padrão das colunas criadas automaticamente quando não há umas especificação explicita para essas colunas 

~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  font-size: 2rem;
}

.container {
  padding: 10px;
  border: 1px solid #2bdefd;
  display: grid;
  grid-template-areas: "1 2 3 4 5";
  grid-auto-columns: 200px;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~

### 8. grid-auto-flow 

Esta propriedade determina como os itens de grade são automaticamente colocados no grid. Você pode definir se eles fluem em linhas ou colunas automaticamente.

~~~html 
<h2>grid-auto-flow: Column</h2>
<div class="container flow-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
<h2>grid-auto-flow: Row</h2>
<div class="container flow-column">
  <section>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>
<h2>grid-auto-flow: Dense</h2>
<div class="container flow-dense">
  <section>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

~~~


~~~css
.flow-row {
  display: grid;
  grid-auto-flow: column;
}

.flow-column {
  display: grid;
  grid-auto-flow: row;
}

.flow-dense {
  display: grid;
  grid-auto-flow: column;
}

.item {
  border: 1px solid #00f4bf;
  font-size: 1.25em;
  font-weight: normal;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  text-align: center;
  font-size: 2rem;
}

.container {
  padding: 10px;
  border: 1px solid #2bdefd;
}

h2 {
  padding-top: 50px;
  padding-bottom: 20px;
}
~~~


### 9. justify-items

É usada para alinhar horizontalmente os itens (elementos filhos) dentro das células de uma grade (grid). Ela permite definir como os itens se comportam em relação ao eixo horizontal da célula da grade.

~~~html 
<div>
  <h1>justify-items: start</h1>
  <section class="justify-items start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-items: end</h1>
  <section class="justify-items end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-items: center</h1>
  <section class="justify-items center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-items: stretch</h1>
  <section class="justify-items stretch">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

~~~



~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 5% 5% 0 5%;
  width: 100vw;
  font-size: 2rem;
}

body > div {
  border: 1px solid rgb(73, 137, 205);
  padding: 40px 0;
}

.start {
  justify-items: start;
}

.end {
  justify-items: end;
}

.center {
  justify-items: center;
}

.stretch {
  justify-items: stretch;
}

.justify-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}

h1 {
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  padding-bottom: 50px;
}

~~~


### 10. align-items
A propriedade align-items é usada para alinhar verticalmente os itens (elementos filhos) dentro das células de uma grade (grid). Ela permite definir como os itens se comportam em relação ao eixo vertical da célula da grade

~~~html 
<div>
  <h1>align-items: start</h1>
  <section class="align-items start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-items: end</h1>
  <section class="align-items end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-items: center</h1>
  <section class="align-items center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-items: stretch</h1>
  <section class="align-items stretch">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

~~~



~~~css

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  padding: 0 5% 0 5%;
  width: 100vw;
  font-size: 2rem;
}

body > div {
  max-width: 400px;
}

.start {
  align-items: start;
}

.end {
  align-items: end;
}

.center {
  align-items: center;
}

.stretch {
  align-items: stretch;
}

.align-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
}

.item {
  border: 1px solid #0d1010;
  background-color: #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
}

h1 {
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  padding: 3rem 0 5rem 0;
  color: white;
}

.align-items {
  border: 1px solid rgb(73, 137, 205);
}
~~~

### 11. justify-content

A propriedade justify-content é usada para alinhar horizontalmente as células da grade (grid cells) dentro do contêiner da grade (grid container). Ela controla o alinhamento dos grupos de células da grade em relação ao eixo horizontal do contêiner da grade.

~~~html 
<div>
  <h1>justify-content: start</h1>
  <section class="justify-content start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: end</h1>
  <section class="justify-content end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: center</h1>
  <section class="justify-content center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: space-around</h1>
  <section class="justify-content space-around">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: space-between</h1>
  <section class="justify-content space-between">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: space-evenly</h1>
  <section class="justify-content space-evenly">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>justify-content: stretch</h1>
  <section class="justify-content stretch">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>
~~~



~~~css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  padding: 5% 5% 0 5%;
  width: 100vw;
  font-size: 2rem;
}

body > div {
  border: 1px solid rgb(73, 137, 205);
  padding: 40px 0;
}

.start {
  justify-content: start;
}

.end {
  justify-content: end;
}

.center {
  justify-content: center;
}

.space-around {
  justify-content: space-around;
}

.space-between {
  justify-content: space-between;
}

.space-evenly {
  justify-content: space-evenly;
}

.stretch {
  justify-content: stretch;
}

.justify-content {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}

.item {
  border: 1px solid #0d1010;
  background-color: #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
}

h1 {
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  padding-bottom: 50px;
  color: white;
}
~~~

### 12. align-content

A propriedade align-content é usada para alinhar verticalmente os grupos de células da grade (grid cells) dentro do contêiner da grade (grid container). Ela controla o alinhamento dos grupos de células da grade em relação ao eixo vertical do contêiner da grade.

~~~html 
<div>
  <h1>align-content: start</h1>
  <section class="align-content start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: end</h1>
  <section class="align-content end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: center</h1>
  <section class="align-content center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: space-around</h1>
  <section class="align-content space-around">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: space-between</h1>
  <section class="align-content space-between">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: space-evenly</h1>
  <section class="align-content space-evenly">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

<div>
  <h1>align-content: stretch</h1>
  <section class="align-content stretch">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </section>
</div>

~~~



~~~css
.align-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 50px);
  height: 300px;
}

.start {
  align-content: start;
}

.end {
  align-content: end;
}

.center {
  align-content: center;
}

.space-around {
  align-content: space-around;
}

.space-between {
  align-content: space-between;
}

.space-evenly {
  align-content: space-evenly;
}

.stretch {
  grid-template-columns: auto;
  align-content: stretch;
}

.item {
  border: 1px solid #0d1010;
  background-color: #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
}

h1 {
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  padding: 3rem 0 5rem 0;
  color: white;
}

.align-content {
  border: 1px solid rgb(230, 232, 233);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  padding: 0 5% 0 5%;
  width: 100vw;
  font-size: 2rem;
}

body > div {
  max-width: 400px;
}

~~~
### 13. gap / row-gap / column-gap

Essas propriedades controlam o espaçamento entre as células do grid, permitindo criar espaçamentos uniformes entre as linhas e colunas.

~~~html 
<div class="container">
  <div class="item cabecalho">Cabeçalho</div>
  <div class="item menu-lateral">Menu Lateral</div>
  <div class="item principal">Conteúdo Principal</div>
  <div class="item rodape">Rodapé</div>
</div>

~~~



~~~css

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #01080e;
  color: #dadde0;
  padding: 50px 50px 0 50px;
  font-size: 2rem;
}

.container {
  display: grid;
  /* grid-template-columns: 1fr 3fr;
  grid-template-rows: 200px 500px 200px; */
  grid-template: 200px 500px 200px / 1fr 3fr;
  grid-template-areas:
    "cabecalho cabecalho cabecalho"
    "menu-lateral principal principal"
    "rodape rodape rodape";
  gap: 5rem 20rem;
  /*   row-gap: 5rem;
  column-gap: 1rem; */
}

.cabecalho {
  grid-area: cabecalho;
}

.menu-lateral {
  grid-area: menu-lateral;
}

.principal {
  grid-area: principal;
}

.rodape {
  grid-area: rodape;
}

.item {
  border: 1px solid #00f4bf;
  text-align: center;
  font-size: 1.25em;
  font-weight: normal;
}
~~~