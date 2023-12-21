const notas = [9, 7.5, 6, 8.5]; // array de notas

function calcularMedia(notas){

let somaDasNotas = 0; // declarando valor inicial da soma de notas

for (let nota of notas) {
    somaDasNotas += nota
} // estrutura de repetição for para somar todas as notas do array

    let mediaDasNotas = somaDasNotas / notas.length // cálculo da média das notas 

    return mediaDasNotas
} 

const media = calcularMedia(notas); // armazenando a média em uma variável

console.log(`O valor da média das notas é ${media}`); // imprimindo o valor da média no terminal