// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console? O valor inmpresso será 10, porque o valor é 0 + i,
// e o valor de i aumenta 1 a cada loop. Assim, quando o valor de i for 1, o valor do let valor será 1 e quando o valor do i for
// 2, o valor da let valor será 3. Como a condição é i > 5, quando i chegar a 5 após 5 loops, o valor da let valor será 10, pois
// somará a let valor = 6 + 4.

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// 2. a) O que vai ser impresso no console? [19, 21, 23, 25, 27, 30]

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
// Se sim, o que poderia ser usado para fazer isso? Apenas o for of não será suficiente, mas com o indexof podemos acessar
// cada index individualmente.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 
// *
// **
// ***
// ****

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Exercícios de escrita de código
// 1. 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    // - 💡 Dica

    //     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

    // c) Por fim, imprima o array com os nomes dos bichinhos no console


// function bichinhosUsuario(){
// let petUsuarios = Number(prompt("Quantos bichinhos de estimação você tem?"))
// pets = []
// if(petUsuarios === 0) {
//     console.log("Que pena! Você pode adotar um pet!")   
// } else {
//     for (let nomeDosPets = 0; nomeDosPets < petUsuarios; nomeDosPets++) {
//         const nomeDosPetUsuario = prompt("Digite o nome deles um por um")
//         pets.push(nomeDosPetUsuario)
//         console.log(pets)
//     }
// }
// }

// bichinhosUsuario()


// 2. Considere que você tenha acesso a um array (chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMaximo = 110
// let valorMinimo = 40

// console.log(arrayOriginal)

// result = [0]
// for(let i = 0; i < arrayOriginal.length; i++) 

//Infelizmente não consegui fazer o exercício 2.



