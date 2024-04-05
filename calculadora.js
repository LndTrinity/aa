const prompt = require("prompt-sync")();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    soma = v1 + v2

    return(soma)
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) { }

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) { }

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) { }

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) { }

//console.log(sum(v1, v2));
while (true) {
    console.log("=======Calculadora========")
    console.log("Digite a operação desejada")
    console.log("1. Soma")
    console.log("2. Subtração")
    console.log("3. Divisão")
    console.log("4. Multiplicação")
    console.log("5. Sair")
    const operacao = Number(prompt("Digite a operação desejada: "))
   

    if (operacao == 1) {
        const v1 = Number(prompt("Digite o primeiro Número: "))
        const v2 = Number(prompt("Digite o segundo Número: "))
        sum(v1, v2)
        console.log()
        console.log("Resultado: " + v1 + " + " + v2 + " = " + soma)
        console.log()
    } else if (operacao == 2) {
        const v1 = Number(prompt("Digite o primeiro Número: "))
        const v2 = Number(prompt("Digite o segundo Número: "))
        sub(v1, v2)
        console.log()
        console.log("Resultado: " + v1 + " - " + v2 + " = " + subtracao)
        console.log()
    } else if (operacao == 3) {
        const v1 = Number(prompt("Digite o primeiro Número: "))
        const v2 = Number(prompt("Digite o segundo Número: "))
        div(v1, v2)
        console.log()
        console.log("Resultado: " + v1 + " / " + v2 + " = " + divisao)
        console.log()
    } else if (operacao == 4) {
        const v1 = Number(prompt("Digite o primeiro Número: "))
        const v2 = Number(prompt("Digite o segundo Número: "))
        mult(v1, v2)
        console.log()
        console.log("Resultado: " + v1 + " * " + v2 + " = " + multiplicacao)
        console.log()
    } else if (operacao == 5) {
        console.log()
        console.log("Good Bye")
        console.log()
        break
    } 
    else {
        console.log()
        console.log("Insira uma opção válida!")
        console.log()
    }
}


