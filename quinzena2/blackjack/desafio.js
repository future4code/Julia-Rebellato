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


    console.log("Bem-vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
} else {
   console.log("O jogo acabou")
	// o que fazer se o usuário clicar "cancelar"
}
   //  const carta1Jogador = comprarCarta()
   //  const carta2Jogador = comprarCarta()
   //  const valorCartaJogador = carta1Jogador.valor + carta2Jogador.valor


   //  const carta1Computador = comprarCarta()
   //  const carta2Computador = comprarCarta()
   //  const valorCartaComputador = carta1Computador.valor + carta2Computador.valor

    // DESAFIOS


   arrayCartasJogador.push(comprarCarta(), comprarCarta())
   arrayCartasComputador.push(comprarCarta(), comprarCarta())


   let verificarAJogador = (arrayCartasJogador[0].texto.includes("A") && (arrayCartasJogador[1].texto.includes("A")))
   let verificarAComputador = (arrayCartasComputador[0].texto.includes("A") && (arrayCartasComputador[1].texto.includes("A")))

   arrayCartasJogador = []
   arrayCartasComputador = []
   arrayCartasJogador.push(comprarCarta(), comprarCarta())
   arrayCartasComputador.push(comprarCarta(), comprarCarta())


let rodadaAtual = (confirm(
`Suas duas cartas são ${carta1Jogador.texto} ${carta2Jogador.texto}. A carta revelada do computador é ${carta1Computador.texto}. 
\nDeseja comprar mais uma carta?`
))

console.log(`Usuário - carta ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${valorCartaJogador}`)
console.log(`Computador - carta ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${valorCartaComputador}`)


    if (valorCartaJogador === 21) {
    console.log("Você ganhou!") 
    } else if (valorCartaJogador <= 21 && valorCartaComputador < valorCartaJogador){
    console.log("Você ganhou!")
    } else if (valorCartaComputador === valorCartaJogador){
    console.log("Empate!")
    } else if (valorCartaComputador > 21) {
    console.log("Você ganhou!")
    } else {
    console.log("Você perdeu!")
    }
 }

arrayTextoCartasUsuario.push(arrayCartasJogador[0].texto, arrayCartasJogador[1].texto)

let somaDuasPrimeiras = arrayCartasJogador[0].valor + arrayCartasJogador[1].valor

let rodadaAtual = (confirm(
`Suas duas cartas são ${arrayTextoCartasUsuario}.
A carta revelada do computador é ${arrayCartasComputador[0].texto}. 
\nDeseja comprar mais uma carta?`
))


// RODADA USUÁRIO
// let somaRodada1 = (arrayCartasJogador[0].valor + arrayCartasJogador[1].valor)

// while (somaRodada1 <= 21 && rodadaAtual === true) {
//    arrayCartasJogador.push(comprarCarta())

//    somaRodada1 = somaRodada1 + arrayCartasJogador.pop().valor
//    arrayTextoCartasUsuario.push(arrayCartasJogador.pop().texto)

//    rodadaAtual = (confirm(
//       `Suas cartas são ${arrayCartasJogador.texto}. A carta revelada do computador é ${arrayCartasComputador[0].texto}. 
//       \nDeseja comprar mais uma carta?`
//       ))
// }


// let somaDeValores = 0

// for (const carta of arrayCartasJogador) {

// }




// console.log(`Usuário - carta ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${valorCartaJogador}`)
// console.log(`Computador - carta ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${valorCartaComputador}`)


   //  if (valorCartaJogador === 21) {
   //  console.log("Você ganhou!") 
   //  } else if (valorCartaJogador <= 21 && valorCartaComputador < valorCartaJogador){
   //  console.log("Você ganhou!")
   //  } else if (valorCartaComputador === valorCartaJogador){
   //  console.log("Empate!")
   //  } else if (valorCartaComputador > 21) {
   //  console.log("Você ganhou!")
   //  } else {
   //  console.log("Você perdeu!")
   //  } 

