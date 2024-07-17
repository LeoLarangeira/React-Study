# Neste arquivo eu vou colocar algumas observacoes sobre as coisas que vejo aqui no job 

O uso do operador de negacao logica (`!`) em `resp.trail!` e um recurso conhecido como __non-null assertion operator__ ou __operador de assercao de nulidade__ em TypeScript.Este operador permite que voce afirme explicitamente ao compilador que uma expressao (variavel, propriedade, etc) nao e `null` ou `undefined`, mesmo que o compilador nao possa inferir nisso de maneira automatica. Isso e util em cenarios em que voce tem certeza que a expressao e valida e nao deseja que o compilador continue a alertar sobre possiveis valores `null` ou `undefined`.


# 08/07/2024

# Uma interface que vi no codigo de um programador mais experiente: 

```javascript
export interface IInterfaceExample {

    varName: boolean; 
    methodName: (isIntance: anotherInterface) => Promise<someDTO : void>;
}
```

Bem, nao tem nada de muito novo nessa interface, certo? mas como eu estou comecando a chamada desse metodo me despertou uma certa curiosidade. Para isso, pedi ajuda para o nosso amigo chatgpt
### methodName: (isIntance: anotherInterface) => Promise<someDTO : void>; 
- methodName : e o nome do metodo que voce esta referindo na interface 
- (isIntance : anotherInterface) => Promise<someDTO : void>  : Tipo do metodo 
Destrinchando mais o codigo ficamos com essa separacao: 
  -> isIntance : anotherInterface = o metodo recebe um parametro isIntance que e do tipo anotherInterface (geralmente ele e importado de outro arquivo)
  -> Promise<someDTO : void> = o metodo deve retornar entao uma Promise do tipo someDTO ou void (nenhum valor)
salve, fazendo mais uma anotacao no dia!

bem, eu fiz um import aqui e criei uma interface, porem isso resultou em muitos erros, muitos erros mesmo!
segue a lista de erros: 

```shell
No overload matches this call.
  Overload 1 of 4, '(baseComponent: ForwardRefExoticComponent<IAuditTableProps & RefAttributes<{}>>): MemoExoticComponent<ForwardRefExoticComponent<IAuditTableProps & RefAttributes<...>>>', gave the following error.
    Argument of type '({ auditStore }: IAuditTableProps) => void' is not assignable to parameter of type 'ForwardRefExoticComponent<IAuditTableProps & RefAttributes<{}>>'.
      Property '$$typeof' is missing in type '({ auditStore }: IAuditTableProps) => void' but required in type 'ForwardRefExoticComponent<IAuditTableProps & RefAttributes<{}>>'.
  Overload 2 of 4, '(baseComponent: FunctionComponent<IAuditTableProps>, options?: IObserverOptions | undefined): FunctionComponent<IAuditTableProps>', gave the following error.
    Argument of type '({ auditStore }: IAuditTableProps) => void' is not assignable to parameter of type 'FunctionComponent<IAuditTableProps>'.
      Type 'void' is not assignable to type 'ReactNode'.
  Overload 3 of 4, '(baseComponent: FunctionComponent<any> | ForwardRefRenderFunction<any, {}>, options?: IObserverOptions | undefined): (FunctionComponent<...> | ForwardRefRenderFunction<...>) & { ...; }', gave the following error.
    Argument of type '({ auditStore }: IAuditTableProps) => void' is not assignable to parameter of type 'FunctionComponent<any> | ForwardRefRenderFunction<any, {}>'.
      Type '({ auditStore }: IAuditTableProps) => void' is not assignable to type 'FunctionComponent<any>'.
        Type 'void' is not assignable to type 'ReactNode'.ts(2769)
index.d.ts(636, 18): '$$typeof' is declared here.
```

O que acontece aqui e o seguinte. temos um erro de uma funcao de um componente react que esta sendo chamada de forma incorreta, mais especificadamente uma funcao de HighOrder Component (HOC) como `observer` do Mobx ou `use` do React. 

Entao vamos analisar isso ai! 

1. ForwardRefExoticComponent e RefAttributes:

    Estou passando uma funcao de componente que retorna `void` mas o tipo esperado e `ForwardRefExoticComponent` ou `FunctionComponent`

2. FunctionComponent 

    Sua funcao de componente deve retornar um `ReactNode` (normalmente JSX ou `null`), mas esta retornando o famoso `null`

3. Erro sobre `$$typeof`:

    `$$typeof` é uma propriedade interna usada por React para identificar componentes válidos. Se estiver faltando, isso indica que o valor passado não é reconhecido como um componente React válido

 ~~fiz tudo isso para lembra que era so para jogar o return~~