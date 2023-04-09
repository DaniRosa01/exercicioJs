// Dessa forma, para resolver esse problema você deve apenas imprimir a mensagem "Ola CodCad!" na tela do computador.

console.log('Ola CodeCad!')

//Bino e Cino gostam muito de brincar de par ou ímpar. Bino sempre escolhe par e Cino sempre escolhe ímpar.
//Faça um programa para automatizar o resultado o jogo de par ou ímpar. Seu programa deve ler a quantidade de 
//dedos que cada um utilizou e imprimir o nome do ganhador.

//Entrada
//A entrada consiste de duas linhas. A primeira linha contém a quantidade de dedos que Bino utilizou. 
//A segunda linha contém a quantidade de dedos que Cino utilizou.

//Saída
//A saída consiste de uma linha. Caso Bino vença o jogo, imprima "Bino". Caso Cino vença o jogo, imprima "Cino".

let A = 4
let B = 3

if( (A + B) % 2 == 0){
	console.log("Bino")
}else{
	console.log("Cino")
}

//No Colégio Neps Academy (CNA) um aluno é aprovado por média se ele obtiver uma média final maior ou igual a 7,
// caso o aluno tenha uma média menor que 7 mas maior ou igual a 4 ele está de recuperação, caso ele tenha uma
// média menor que 4 o aluno está reprovado.
//A média é calculada com a nota das duas provas aplicadas no semestre e corresponde simplesmente a média aritimética das duas notas.
//Baseado nas duas notas do aluno, indique o resultado final do aluno: "Aprovado", "Reprovado" ou "Recuperacao".

//Entrada
//A entrada consiste de apenas uma linha com as notas A e 
//B, que correspondem as duas notas que o aluno conquistou esse semestre.

//Saída
//A saída do seu programa deve ser apenas uma linha. Caso o aluno tenha sido aprovado informe "Aprovado", 
//caso o aluno tenha sido reprovado informe "Reprovado" e caso ele esteja de recuperação informe "Recuperacao".

let nota1 = 10
let nota2 = 10
let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log('Aprovado')
}else if (media < 7 && media >= 4) {
    console.log('Recuperação')
}else if (media < 4){
    console.log('Reprovado')
}

//Faça um programa que leia dois números inteiros digitados pelo teclado e imprima a soma deles.

//Entrada
//A entrada consiste de dois números inteiros X e 
//Y, um em cada linha.

//Saída
// saída do seu programa deve ser um inteiro 
//S, representando a soma de X e Y.

let X = 19
let Y = 13
let S = X + Y

console.log(S)