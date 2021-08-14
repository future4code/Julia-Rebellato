// Montando o jogo 🎰
console.log("Bem-vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
} else {
   console.log("O jogo acabou")
	// o que fazer se o usuário clicar "cancelar"
}


// Começando uma rodada

// const carta = comprarCarta()

const carta1Jogador = comprarCarta()
const carta2Jogador = comprarCarta()
const valorCartaJogador = carta1Jogador.valor + carta2Jogador.valor

const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta()
const valorCartaComputador = carta1Computador.valor + carta2Computador.valor

console.log(`Usuário - carta ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${valorCartaJogador}`)
console.log(`Computador - carta ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${valorCartaComputador}`)

if (valorCartaJogador === 21)
console.log("Você ganhou!")
else if (valorCartaJogador <= 21 && valorCartaComputador < valorCartaJogador)
console.log("Você ganhou!")
else if (valorCartaComputador === valorCartaJogador)
console.log("Empate!")
else
console.log("Você perdeu!")





// const carta = comprarCarta(); 
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)




/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */