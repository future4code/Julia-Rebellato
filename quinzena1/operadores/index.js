// Exercícios de interpretação de código
// 1. a) false
// b) false
// c) true
// d) boolean

// 2 e 3. nesse caso, será impresso no console o número como STRING, então caso o primeiro número seja 2 e
// o segundo seja 3, no console será impresso da seguinte forma: 23. 
// Para conseguir o resultado da soma, é preciso transformar as strings em numbers, uma vez que o prompt
// sempre imprime string. o código a pessoa poderá escrever da seguinte forma:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Exercícios de escrita de código
// 1. a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela
// resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

const idadeUsuario = prompt("Qual a sua idade?")
const idadeBFF = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que do seu melhor amigo?", idadeUsuario > idadeBFF)
console.log(idadeUsuario - idadeBFF)


// 2. Faça um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number(prompt("Insira aqui um número par"))
console.log(numeroPar % 2) //por ser número par, a sobra é sempre 0. Se for inserido um número ímpar, a sobra será diferente de 0.

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas

const idadeEmAnos = Number(prompt("Qual a sua idade?"))
console.log(idadeEmAnos * 12)
console.log(idadeEmAnos * 365)
console.log(idadeEmAnos * 8766)

// 4. Faça um programa que pergunte ao
// usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

// O primeiro numero é maior que segundo? true ou false
// O primeiro numero é igual ao segundo? true ou false
// O primeiro numero é divisível pelo segundo? true ou false
// O segundo numero é divisível pelo primeiro? true ou false

// obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.


const primeiroNumero = Number(prompt("Insira um número"))
const segundoNumero = Number(prompt("Insira outro número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)

const primeiraDivisao = primeiroNumero % segundoNumero

console.log("O primeiro numero é divisível pelo segundo?", primeiraDivisao === 0)

const segundaDivisao = segundoNumero % primeiroNumero

console.log("O segundo numero é divisível pelo primeiro?", segundaDivisao === 0)