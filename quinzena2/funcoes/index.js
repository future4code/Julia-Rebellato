// // // // // EXERCÍCIOS DE INTERPRETAÇÃO

// // // // // 1. Leia o código abaixo

// // // // //     function minhaFuncao(variavel) {
// // // // //     	return variavel * 5
// // // // //     }

// // // // //      minhaFuncao(2)
// // // // //      minhaFuncao(10)

// // // // // //     a) O que vai ser impresso no console? // 10 e 50

// // // // // //     b) O que aconteceria se retirasse os dois `console.log` e simplesmente
// // // // // //     invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? Nada.

// // // // // 2. Leia o código abaixo

// // // //     // let textoDoUsuario = prompt("Insira um texto");

// // // //     // const outraFuncao = function(texto) {
// // // //     // 	return texto.toLowerCase().includes("cenoura")
// // // //     // }

// // // //     // const resposta = outraFuncao(textoDoUsuario)
// // // //     // console.log(resposta)

// // // // //     a. Explique o que essa função faz e qual é sua utilidade: essa função transforma a resposta do usuário toda em letra
// // // // // minúscula e confere se na resposta existe a palavra cenoura.

// // // // //     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// // // // //          i.   `Eu gosto de cenoura` // true
// // // // //          ii.  `CENOURA é bom pra vista` // true
// // // // //          iii. `Cenouras crescem na terra` // true


// // // // // EXERCÍCIOS DE ESCRITA DE CÓDIGO

// // // // 1. Escreva as funções explicadas abaixo:

// // // //     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações
// // // // sobre você, como: 

// // // //     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// // // //     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função
// // // // não possui entradas, apenas imprime essa mensagem.


// // // function minhaFuncao() {
// // // const nome = 'Julia'
// // // const idade = 27
// // // const cidade = 'Santa Rosa'
// // // const profissao = 'estudante'

// // // console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// // // }

// // // minhaFuncao()

// // // //     b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// // // // o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar
// // // // uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// // // //     Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].



// // // function exercicioB() {
// // //     const nomeUsuario = prompt("Qual é o seu nome?")
// // //     const idadeUsuario =  Number(prompt("Qual é a sua idade?"))
// // //     const cidadeUsuario = prompt("Onde você mora?")
// // //     const profissaoUsuario = prompt("Qual é a sua profissão?")

// // //     console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`)
// // // }

// // // exercicioB()

// // 2. Escreva as funções explicadas abaixo:

// //     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
// // faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


// // function minhaFuncao(primeiroNumero, segundoNumero) {
// //     const soma = primeiroNumero + segundoNumero
// //     return soma
// // }

// // minhaFuncao(5, 10)

// //     b) Faça uma função que recebe 2 números e retorne um booleano que informa se
// // o primeiro número é **maior ou igual** ao segundo.

// // function minhaFuncao(numero1, numero2) {
// //     const comparativo = numero1 >= numero2
// //     return comparativo
// // }

// // minhaFuncao(5, 10)


// //     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// // function minhaFuncao(numero) {
// //     const parOuImpar = (numero % 2 === 0)
// //     return parOuImpar
// // }

// // const resultado = minhaFuncao(9)
// // console.log(resultado)

// //     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima
// //o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// // function minhaFuncao(frase) {

// //     const fraseMinuscula = frase.toLowerCase()
// //     const tamanhoFrase = fraseMinuscula.length
    
// //     return [tamanhoFrase, fraseMinuscula]
// // }

// // console.log(minhaFuncao(`Olá Mundo`))

// // 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida,
// // peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
// // Por fim, mostre no console o resultado das operações:

// //     Números inseridos: 30 e 3
// //     Soma: 33
// //     Diferença: 27
// //     Multiplicação: 90
// //     Divisão: 10


// function soma(){
//     const inputNumero1 = Number(prompt("Insira um número"))
//     const inputNumero2 = Number(prompt("Insira outro número"))
//     const resultadoSoma = inputNumero1 + inputNumero2
// console.log(resultadoSoma)

// }

// soma()


// function diferenca(){
//     const Numero1Subtracao = Number(prompt("Insira um número"))
//     const Numero2Subtracao = Number(prompt("Insira outro número"))
//     const resultadoDiferenca = Numero1Subtracao % Numero2Subtracao

//     console.log(resultadoDiferenca)
// }

// diferenca()

// function multiplicacao(){
//     const Numero1Multiplicacao = Number(prompt("Insira um número"))
//     const Numero2Multiplicacao = Number(prompt("Insira outro número"))
//     const resultadoMultiplicacao = Numero1Multiplicacao * Numero2Multiplicacao

//     console.log(resultadoMultiplicacao)
// }

// multiplicacao()

// function divisao(){
//     const Numero1Divisao = Number(prompt("Insira um número"))
//     const Numero2Divisao = Number(prompt("Insira outro número"))
//     const resultadoDivisao = Numero1Divisao / Numero2Divisao

//     console.log(resultadoDivisao)
// }

// divisao()