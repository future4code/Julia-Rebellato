// Exercícios de interpretação de código

// 1. a) O que vai ser impresso no console?
// 0, apelido: "Mandi", nome: "Amanda Rangel", array 3
// 1, apelido: "Laura", nome: "Laís Petra", array 3
// 2, apelido: "Chijo", nome: "Letícia Chijo", array 3

// 2. a) O que vai ser impresso no console?
// Amanda Rangel, Laís Petra, Letícia Chijo

// 3. a) O que vai ser impresso no console?
// 0, nome: Amanda Rangel, apelido: Mandi.
// 1, nome: Laís Petra, apelido: Laura

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as
// operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomeCachorrinhos = pets.map((item, index, array) => {
   return item.nome
}
)

console.log(arrayNomeCachorrinhos)

// b) Crie um novo array apenas com os cachorros salsicha

const salsicha = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
}
)

console.log(salsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes 
// que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


function extrairNome(pets){
   return pets.nome
}

const poodle = pets.filter((item, index, array) => {
   return item.raca === "Poodle"
})

const frasePoodle = poodle.map(extrairNome)

console.log(`"Você ganhou um cupom de desconto de 10% para tosar o/a ${frasePoodle}!"`)


// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeDosProdutos = produtos.map((item, index, array) => {
//    return item.nome
// }
// )

// console.log(nomeDosProdutos)

// // B) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const desconto = produtos.map(produtos => {
// return {
//    nome: produtos.nome,
//    preco: produtos.preco - (produtos.preco * 0.05)
// }

// })

// console.log(desconto)

// // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const bebidas = produtos.filter((item, index, array) => {
//    return item.categoria === "Bebidas"
// }
// )

// console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


// const ype = produtos.map((item, index, array) => {
//    return item.nome
// }
// )

// const temYpe = produtos.nome.includes('Ypê')

// if (includes === true)
// console.log(ype)

//não entendi pq o includes não está funcionando





