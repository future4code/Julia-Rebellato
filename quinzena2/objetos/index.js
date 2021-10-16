// Exercícios de interpretação de código
// 1. a) O que vai ser impresso no console?
// "Matheus Nachtergaele"
// Virginia Cavendish
// canal: "Canal Brasil", horario: "19h"

// 2. a) O que vai ser impresso no console?
    // nome: "Juca", 
	// idade: 3, 
	// raca: "SRD"
    // nome: "Juba"
    // idade: 3, 
	// raca: "SRD"
    // nome: "Jubo"
    // idade: 3, 
	// raca: "SRD"
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Copia as informações do primeiro objeto.

// 3. a) O que vai ser impresso no console? false, undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? False foi impresso porque dentro do objeto
// a chave está indicando esse valor e a altura está undefined, pois não há uma
// variável indicando o valor dela.

// Exercícios de escrita de código
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
// (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que
// recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}
// ou ${pessoa.apelidos[2]}.`)


// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
// // mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
// const novaPessoa = {
//     ...pessoa,
//     apelidosNovos: ["Mandis", "Linda", "Deusa"]
// }

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidosNovos[0]}, ${novaPessoa.apelidosNovos[1]}
// ou ${novaPessoa.apelidosNovos[2]}.`)

// 2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const pessoa1 = {
//     nome: "Felipe",
//     idade: 29,
//     profissao: "estudante"
// }

// const pessoa2 = {
//     nome: "Julia",
//     idade: 27,
//     profissao: "estudante"
// }

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// function minhaFuncao(retorno) {
// const resultado = []
// const valorNome = typeof(retorno.nome)
// const caracteresNome = retorno.nome.length
// const valorIdade = typeof(retorno.idade)
// const valorProfissao = typeof(retorno.profissao)
// const caracteresProfissao = retorno.profissao.length

// const resultado1 = resultado.push(valorNome, caracteresNome, valorIdade, valorProfissao, caracteresProfissao)
// console.log(resultado)
// }

// minhaFuncao(pessoa1)
// minhaFuncao(pessoa2)


// 3. a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

// const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter
// as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)


// const fruta1 = {
//     nome: "banana",
//     disponibilidade: true,
// }


// const fruta2 = {
//     nome: "mamão",
//     disponibilidade: true,
// }


// const fruta3 = {
//     nome: "maçã",
//     disponibilidade: true,
// }

// // c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do
// // array de carrinho. Invoque essa função passando os três objetos criados. 

// // c) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

// function minhaFuncao(fruta) {
//     const arrayCarrinho = carrinho.push(fruta1, fruta2, fruta3)
//     console.log(carrinho)
// }

// minhaFuncao(carrinho)