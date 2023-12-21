const notas = [7.5, 8.2, 6.9, 9.1, 5.4];

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota
})

let mediaDasNotas = somaDasNotas / notas.length

console.log(`A média das notas é ${mediaDasNotas}`)