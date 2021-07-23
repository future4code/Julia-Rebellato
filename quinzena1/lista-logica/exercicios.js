// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura do retângulo')
  const largura = prompt('Digite a largura do retângulo')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Qual é o ano atual?')
  const anoDeNascimento = prompt('Qual é o seu ano de nascimento?')

  console.log(Number(anoAtual) - Number(anoDeNascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Qual é o seu peso em kg?'))
  const altura = Number(prompt('Qual é a sua altura em metros?'))

  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Qual é o seu nome?')
  const idade = prompt('Qual é a sua idade?')
  const email = prompt('Qual é o seu e-mail?')

  console.log("Meu nome é " +nome+ ", tenho " +idade+ " anos, e o meu email é " +email+ ".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

const cor1 = prompt("Escreva a sua cor preferida")
const cor2 = prompt("Escreva outra cor")
const cor3 = prompt("Escreva mais uma cor")

const coresPreferidas = [cor1, cor2, cor3]

console.log(coresPreferidas)
 
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

const frase = prompt("Escreva uma frase")

console.log(frase.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = Number(prompt('Qual é o custo do espetáculo?'))
 const ingresso = Number(prompt('Qual é o valor do ingresso?'))

 console.log(custo / ingresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

const frase1 = prompt("Escreva uma frase")
const frase2 = prompt("Escreva outra frase")

const tamanhoFrase1 = frase1.length
const tamanhoFrase2 = frase2.length

console.log(tamanhoFrase1 === tamanhoFrase2)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

const frase1 = prompt("Escreva uma frase")
const frase2 = prompt("Escreva outra frase")

const frase1Minuscula = frase1.toLowerCase()
const frase2Minuscula = frase2.toLowerCase()

console.log(frase1Minuscula === frase2Minuscula)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoDeNascimento = Number(prompt('Qual é o seu ano de nascimento?'))
  const anoIdentidade = Number(prompt('Qual é o ano de emissão da sua identidade?'))

  const idade = anoAtual - anoDeNascimento
  const renovarIdentidade = anoAtual - anoIdentidade

  console.log(idade <= 20 && renovarIdentidade >= 5 || idade > 20 && idade <= 50 && renovarIdentidade >= 10 ||
    idade > 50 && renovarIdentidade >= 15)

}


// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

// Vou te dar algumas dicas: Para saber se um ano é múltiplo de 400,
// verifique que o resto da sua divisão por 400 é zero. Semelhante para 4 e 100.
// Retorne assim que decidir que um ano é bissexto, porque,
// se você não decidir que ele é bissexto, isso significa que ele não é.


const ano = Number(prompt("Escreva um ano"))

const anoBissexto = ano % 4 === 0
const anoBissexto2 = ano % 100 !== 0
const anoBissexto3 = ano % 400 === 0

console.log(anoBissexto && anoBissexto2 || anoBissexto3)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const idade = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Você possui ensino médio completo?')
  const horarioDisponivel = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  console.log(idade === "sim" && ensinoMedio === "sim" && horarioDisponivel === "sim")
}