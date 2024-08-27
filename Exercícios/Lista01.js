//Primeiramente, execute o comando "npm install prompt-sync"

//Exercício 1: Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let number = prompt('Digite um número inteiro: ')

if (number % 2 === 0) {
    console.log('O número é par.')
} else {
    console.log('O número é ímpar.')
}

console.log(`---------------------------------------------------------`)

//Exercício 2: Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let age = prompt('Digite sua idade: ');

if (age < 0) {
    console.log('ERRO: Idade Inválida.')
} else if (age <= 12) {
    console.log('Categoria: Criança')
} else if (age <= 17) {
    console.log('Categoria: Adolescente')
} else if (age <= 64) {
    console.log('Categoria: Adulto')
} else {
    console.log('Categoria: Idoso')
}

console.log(`---------------------------------------------------------`)

//Exercício 3: Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = prompt('Insira a nota (0 a 10): ')

if (nota < 0 || nota > 10) {
    console.log('Nota inválida. Por favor, insira um valor entre 0 e 10.')
} else if (nota >= 7) {
    console.log('Aprovado')
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}

console.log(`---------------------------------------------------------`)

//Exercício 4: Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("Escolha seu herói da trindade:");
console.log("1. Superman");
console.log("2. Batman");
console.log("3. Mulher Maravilha");

let escolha = prompt('Digite o número do herói que você deseja escolher: ');

switch (escolha) {
    case '1':
        console.log("Você escolheu o Superman!");
        break;
    case '2':
        console.log("Você escolheu o Batman!");
        break;
    case '3':
        console.log("Você escolheu a Mulher Maravilha!");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        break;
}

console.log(`---------------------------------------------------------`)

//Exercício 5: Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

let peso = prompt('Digite o seu peso em kg: ');
let altura = prompt('Digite a sua altura em metros: ');

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Categoria: Baixo peso');
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Categoria: Peso normal');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Categoria: Sobrepeso');
} else {
    console.log('Categoria: Obesidade');
}

console.log(`---------------------------------------------------------`)

//Exercício 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

let A = prompt('Digite o valor do lado A do triângulo: ');
let B = prompt('Digite o valor do lado B do triângulo: ');
let C = prompt('Digite o valor do lado C do triângulo: ');

A = Number(A);
B = Number(B);
C = Number(C);

if (A < B + C && B < A + C && C < A + B) {
    console.log('Os lados fornecidos formam um triângulo.')
    if (A === B && B === C) {
        console.log('Tipo de triângulo: Eqüilátero')
    } else if (A === B || A === C || B === C) {
        console.log('Tipo de triângulo: Isósceles')
    } else {
        console.log('Tipo de triângulo: Escaleno')
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo.')
}

console.log(`---------------------------------------------------------`)

//Exercício 7: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let quantidade = prompt('Digite o número de maçãs compradas: ')

quantidade = Number(quantidade);

let precoPorMaca;
if (quantidade < 12) {
    precoPorMaca = 0.30
} else {
    precoPorMaca = 0.25
}

let valorTotal = quantidade * precoPorMaca;

console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`)

console.log(`---------------------------------------------------------`)

//Exercício 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

let valor1 = prompt('Digite o primeiro valor: ')
let valor2 = prompt('Digite o segundo valor: ')

valor1 = Number(valor1)
valor2 = Number(valor2)

if (valor1 === valor2) {
    console.log('Os valores são iguais. Por favor, insira valores diferentes.')
} else {
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`)
    } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`)
    }
}

console.log(`---------------------------------------------------------`)

//Exercício 9: Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log(`---------------------------------------------------------`)

//Exercício 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numero = prompt('Digite um número inteiro: ')

numero = Number(numero)

for (let i = 0; i < 10; i++) {
    console.log(numero)
}

console.log(`---------------------------------------------------------`)

//Exercício 11: Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

let somaTotal = 0

for (let i = 1; i <= 5; i++) {
    let numero = prompt(`Digite o ${i}º número: `)

    numero = Number(numero);

    somaTotal += numero;
}

console.log(`A soma total dos números é: ${somaTotal}`)

console.log(`---------------------------------------------------------`)

//Exercício 12: Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) 
//utilizando um loop for.


let tabuada = prompt('Digite um número para exibir a tabuada: ')

tabuada = Number(tabuada)

console.log(`Tabuada do ${tabuada}:`)
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}


console.log(`---------------------------------------------------------`)

//Exercício 13: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

let sum = 0
let count = 0

while (true) {
    let input = prompt('Digite um número decimal (ou 0 para cancelar): ')

    let num = Number(input)

    if (num === 0) {
        break
    }

    sum += num
    count++
}

if (count > 0) {
    let average = sum / count;
    console.log(`A média ritmética é: ${average}`)
} else {
    console.log('Nenhum número foi inserido.')
}

console.log(`---------------------------------------------------------`)

//Exercício 14: Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


console.log(`loop while`)

let fatora = prompt('Digite um número inteiro não negativo para calcular o fatorial: ');

fatora = Number(fatora);

if (fatora < 0 || !Number.isInteger(fatora)) {
    console.log('Digite um número inteiro não negativo.')
} else {
    let fatorial = 1
    let i = 1
    while (i <= fatora) {
        fatorial *= i
        i++
    }
    console.log(`O fatorial de ${fatora} é ${fatorial}.`)
}

console.log(`loop for`)

let fatora2 = prompt('Digite um número inteiro não negativo para calcular o fatorial: ');

fatora2 = Number(fatora2)

if (fatora2 < 0 || !Number.isInteger(fatora2)) {
    console.log('Por favor, digite um número inteiro não negativo.')
} else {
    let fatorial2 = 1
    for (let i = 1; i <= fatora2; i++) {
        fatorial2 *= i
    }

    console.log(`O fatorial de ${fatora2} é ${fatorial2}.`);
}

console.log(`---------------------------------------------------------`)

//Exercício 15: Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let quantidadeTermos = prompt('Digite a quantidade de termos da sequência de Fibonacci que deseja gerar: ')

quantidadeTermos = Number(quantidadeTermos)

if (quantidadeTermos <= 0) {
    console.log('Por favor, digite um número positivo.')
} else {
    let termo1 = 0
    let termo2 = 1

    console.log(`Primeiros ${quantidadeTermos} números da sequência de Fibonacci:`);
    
    if (quantidadeTermos >= 1) console.log(termo1)
    
    if (quantidadeTermos >= 2) console.log(termo2)

    for (let i = 3; i <= quantidadeTermos; i++) {
        let proximoTermo = termo1 + termo2
        console.log(proximoTermo)

        termo1 = termo2
        termo2 = proximoTermo
    }
}
