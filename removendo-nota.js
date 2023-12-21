const notas = [7,9,6,8,10];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

notas.push(10);

console.log(`O Luri e eu somos Nota ${notas[4]}`)