/* crie função que recebe o array alunos e um número que irá representar a média final; 
percorre o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores 
ou iguais à media final 
utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno 
*/

const alunso = [
    {
        nome: 'João',
        nota: 5, 
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9, 
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6, 
        turma: '!B'
    },
    {
        nome: 'Miguel',
        nota: 4, 
        turma: '!B'
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) { 
        const {nota, nome} = arr[i];
        if (arr[i] .nota >= media){
            aprovados.push(arr[i] .nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
