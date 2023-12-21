const alunos = ["Nick", "Sophia", "Lucas", "Isabella"];
const medias = [9.5, 7.8, 8.9, 6.7];
const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota (aluno) {
    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno)
        const mediaDoAluno = listaDeAlunosEMedias[1][indice]
        console.log(`A média de ${aluno} é ${mediaDoAluno}`)
    }
    else {
        console.log("Aluno não cadastrado!")
    }
}

exibeNomeENota("Nick");