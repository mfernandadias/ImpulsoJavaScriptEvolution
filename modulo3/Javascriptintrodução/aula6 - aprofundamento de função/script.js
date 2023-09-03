
//declaração 
/*function funcao() {
    console.log('Tudo certo jovem');
}

funcao(); */

function calculadora() {
    const operacao = promt('Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração (-)\n - 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação ');
}

if(!operacao || operacao >= 7) {
    alert('Erro - operacao inválida!');
    calculadora();
} else {

let n1 = prompt('Insira o primeiro valor');
let n2 = promtp('Insira o segundo valor');
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(` ${n1} + ${n2} = ${resultado}`)
}
function subtracao() {
    resultado = n1 - n2;
    alert(` ${n1} - ${n2} = ${resultado}`)
}
function multiplicacao() {
    resultado = n1 * n2;
    alert(` ${n1} * ${n2} = ${resultado}`)
}
function divisaoReal() {
    resultado = n1 / n2;
    alert(` ${n1} / ${n2} = ${resultado}`)
}
function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado} `)
}
function potencicao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
}

function noaOpercao() {
    let opcao = promt('Deseja fazer outra operação?\n 1 - sim\n 2 - Não');

    if(opcao = 1) {
        calculadora();
    } else ii (opcao = 2) {
        alert('até mais! ')
    } else {
        alert('Digite uma opcao valída')
    }
}

if( operação = 1) {
    soma ();
} else if (operacao = 2) {
    subtracao();
} else if(operação = 3) {
    multiplicacao();
} else if( operacao = 4) {
    divisaoReal();
}else if (operacao = 5) {
    divisaoInteira();
} else if(operacao = 6 ) {
   potenciacao(); 
}
calculadora();
}