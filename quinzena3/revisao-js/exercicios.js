// EXERCÍCIO 01
function inverteArray(array) {
  let numeros = []

  for(let i = array.length - 1; i >= 0; i--){
    numeros.push(array[i])
  }

return numeros
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter(n => n % 2 === 0)

  let numerosParesAoQuadrado = numerosPares.map(n => n **2)

  return numerosParesAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let arrayPares = []

for(let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0)
  arrayPares.push(array[i])
}
 return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for( let i = 0; i < array.length; i++){
    if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {

  return array.length
}


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 return [false, false, true, true, true]

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPar = []

  for(let i = 0; arrayPar.length < n; i++) {
    if(i % 2 === 0) {
    arrayPar.push(i)
    }
  }
  return arrayPar
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b & b !== c && a !== c) {
    return 'Escaleno'
  } else if (a === b && b === c && a === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  let maiorNumero
  let menorNumero 
  let maiorDivisivelPorMenor

  if(num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

return {
  maiorNumero: maiorNumero,
  maiorDivisivelPorMenor: maiorDivisivelPorMenor,
  diferenca: diferenca
}

  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  numeroMenor = Infinity
  numeroMaior = -Infinity
  let segundoNumeroMenor = Infinity
  let segundoNumeroMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < numeroMenor) {
      numeroMenor = i
    }
  if (i > numeroMaior) {
    numeroMaior = i
  }
  }

  for (let i of array) {
    if (i < segundoNumeroMenor && i !== numeroMenor) {
      segundoNumeroMenor = i
    }
    if (i > segundoNumeroMaior && i !== numeroMaior) {
      segundoNumeroMaior = i
    }
  }

    novoArray.push(segundoNumeroMaior)
    novoArray.push(segundoNumeroMenor)
   
    return novoArray

}

// EXERCÍCIO 11
function ordenaArray(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};


// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  let atoresFrase = ""
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
      atoresFrase += filme.atores[i]
    } else {
      atoresFrase += filme.atores[i] + ", "
    }
  }

 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresFrase}.`
 
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
return novaPessoa

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
