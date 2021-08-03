// Exercícios de interpretação de código
// 1. a) Explique o que o código faz. Qual o teste que ele realiza? 
//  O teste verifica se o número que o usuário inseriu é par ou ímpar.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//  Para todos os pares.
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//  Para todos os ímpares

// 2. a) Para que serve o código acima?
// Para verificar o preço da fruta inserida pelo usuário.
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta maçã é R$2.25
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta pêra é R$5.

// 3. a) O que a primeira linha está fazendo?
//  Dando a condição para aparecer a mensagem.
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// 10 = Esse número passou no teste
// -10 = variável 'mensagem'não está definida.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, a variável 'mensagem' vai aparecer como não definida, pois o escopo global não tem acesso ás informações inseridas
// nos escopos pai e filho.


// Exercícios de escrita de código
// 1. 
// const idadeUsuario = Number(prompt("Qual é a sua idade?"))

// if (idadeUsuario >= 18) {
//     console.log("Você já pode dirigir!")
// }


// 2.
// const turnoDeEstudoUsuario = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")

// if (turnoDeEstudoUsuario === 'M')
// console.log("Bom dia!")
// else if (turnoDeEstudoUsuario === 'V')
// console.log("Boa tarde!")
// else if (turnoDeEstudoUsuario === 'N')
// console.log("Boa noite!")


// 3.
// const turnoDeEstudoUsuario = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")
// switch (turnoDeEstudoUsuario){
//     case 'M':
//         console.log("Bom dia!")
// break
//     case 'V':
//         console.log("Boa tarde!")
// break
//     case 'N':
//         console.log("Boa noite!")
// break
// }


//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a
// um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um
// código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço
// do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima
// no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const generoDoFilme = prompt("Qual é o gênero do filme que iremos assistir?") 
// const valorDoIngresso = Number(prompt("Qual é o valor do ingresso?"))

// if (generoDoFilme === 'fantasia' && valorDoIngresso < 15)
// console.log('Bom filme!')
// else 
// console.log('Escolha outro filme')


// DESAFIO
// 1. 
// const generoDoFilme = prompt("Qual é o gênero do filme que iremos assistir?") 
// const valorDoIngresso = Number(prompt("Qual é o valor do ingresso?"))
// const lanchinho = prompt("Qual lanchinho você vai comprar?")

// if (generoDoFilme === 'fantasia' && valorDoIngresso < 15)
// console.log('Bom filme!')
// else 
// console.log('Escolha outro filme')

// console.log(`Aproveite o seu ${lanchinho}!`)




