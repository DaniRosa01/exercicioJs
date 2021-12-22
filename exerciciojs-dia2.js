//Faça um programa para um inteiro LL e imprima a área de uma quadrado de lado LL.

let L = 2;
console.log(L*L);

//Você deve escrever um programa que, dadas as posições das portinhas PP e RR, neste flíper da figura, diga por qual dos três caminhos, A, B ou C, a bolinha vai cair!

let P = 1;
let R = 0;
if(P==1 && R==1) {
    console.log('A');
} else if(P==1 && R==0) {
    console.log('B');
} else {
    console.log('C')
}
