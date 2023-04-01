//Leia 2 valores inteiros e armazene-os nas variáveis A e B.
// Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. 
//Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir 
//o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

//Entrada
//A entrada contém 2 valores inteiros.

//Saída
//Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha.
// Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

//Link: https://www.beecrowd.com.br/judge/pt/problems/view/1001

let A = 54
let B = 21
let X = A + B
console.log("X = " +X)


//A turma do colégio vai fazer uma excursão na serra e todos os alunos e monitores vão tomar um bondinho para subir
// até o pico de uma montanha. A cabine do bondinho pode levar 50 pessoas no máximo, contando alunos e monitores, 
//durante uma viagem até o pico.
//Neste problema, dado como entrada o número de alunos
//A e o número de monitores 
//M, você deve escrever um programa que diga se é possível ou não levar todos os alunos e monitores em apenas uma viagem!

//A primeira linha da entrada contém um inteiro 
//A, representando a quantidade de alunos. A segunda linha da entrada contém um inteiro 
//M, representando o número de monitores.

//Saída
//Seu programa deve imprimir uma linha contendo o caractere 
//S se é possível levar todos os alunos e monitores em apenas uma viagem, ou o caractere 
//N caso não seja possível.
//Link: https://neps.academy/br/exercise/13

let alunos = 28
let monitores = 19
total = alunos + monitores

if(total <=50) {
    console.log('S');
} else {
    console.log('N')
}


//Faça um programa para ler um inteiro 
//x. Imprima a mensagem "positivo" se o valor for positivo. Imprima a mensagem "negativo" caso o valor seja negativo. 
//Imprima a mensagem "nulo" se o valor for zero.

//Entrada
//A entrada consiste de uma linha contendo um inteiro.

//Saída
//A saída consiste de uma linha contendo uma mensagem.

let x = 4

if(x >=1 ) {
    console.log('Positivo');
} else if(x <= -1) {
    console.log('Negativo');
} else if(x === 0) {
    console.log('Nulo')
}