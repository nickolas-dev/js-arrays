const notas = [7.5, 8.2, 6.9, 9.1, 5.4]; // criando o array de notas

function calcularMedia(notas){

    let somaDasNotas = 0; // declarando o valor inicial da soma das notas

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    } // incrimentando a soma das notas baseada nos valores do array, utilizando o for

    let mediaDasNotas = somaDasNotas / notas.length // calculo da média das notas

    return mediaDasNotas // toda function precisa ter um return ao final, pois retorna um valor
}

const media = calcularMedia(notas); // armazenando a média em uma variável

console.log(`A média das notas é ${media}`) // imprimindo a média de notas no terminal