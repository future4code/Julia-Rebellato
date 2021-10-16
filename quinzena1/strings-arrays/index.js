// // Exercícios de interpretação de código
// // 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// //     // let array
// //     // console.log('a. ', array) // undefined

// //     // array = null
// //     // console.log('b. ', array) // null

// //     // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //     // console.log('c. ', array.length) // 11

// //     // let i = 0
// //     // console.log('d. ', array[i]) // 3

// //     // array[i+1] = 19
// //     // console.log('e. ', array) //11

// //     // const valor = array[i+6] 
// //     // console.log('f. ', valor) //9


// //     2. Leia o código abaixo com atenção 

//     // const frase = prompt("Digite uma frase")

//     // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// //     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// //  SUBI NUM ÔNIBUS EM MIRRICOS
// //  length 27

// // Exercícios de escrita de código
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nome = prompt("Qual é o seu nome?")
// const email = prompt("Qual é o seu e-mail?")

// console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nome)

// // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
// Em seguida, siga os passos:

// a) Imprima na tela o array completo

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas,
// **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista
// pela inserida pelo usuário. Imprima na tela a nova lista

// let comidasPreferidas = ["sushi", "churrasco", "hamburguer", "macarrao", "chocolate"]

// console.log(comidasPreferidas)

// console.log("Essas são as minhas comidas preferidas:", comidasPreferidas)

// let comidaPreferida = prompt("Escreva 5 das suas comidas preferidas?")

// let listaUsuario = [comidaPreferida]

// let segundaPosicao = listaUsuario[2]

// console.log(comidasPreferidas.splice(1, 1, segundaPosicao)) 

// NÃO CONSEGUI RESOLVER

// 3. Faça um programa, seguindo os passos:

//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//     c) Imprima o array na tela

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//     e) Remova da lista o item de índice que o usuário escolheu.

// //     f) Imprima o array na tela

// let listaDeTarefas = []
// const tarefasUsuarios = prompt("Cite três tarefas diárias")
// let tarefas = [tarefasUsuarios]
// console.log(tarefas)

// // const indice = prompt("Digite o índice de uma tarefas que você já realizou: 0, 1 ou 2")
// // let remover = [tarefas - indice]

// // console.log(remover)

// Não consegui :(