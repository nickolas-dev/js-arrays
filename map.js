const notas = [10, 9.5, 8, 7, 6]; // array de notas

let notasAtualizadas = notas.map((nota) => { return nota + 1 >= 10 ? 10 : nota + 1 }) // método map com arrow function que retorna o valor da nota atualizado

console.log(notasAtualizadas); // imprimindo o código no terminal