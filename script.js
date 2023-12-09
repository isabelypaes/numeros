document.getElementById("inserirNumero").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        verificaNumero();
    }
});

document.getElementById("inserirNumero").addEventListener("input", function(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    event.target.value = inputValue;
});

function verificaNumero() {
    const inserirNumero = document.getElementById("inserirNumero");
    const numero = parseInt(inserirNumero.value);
    if (isNaN(numero) || numero < 1 || numero > 1000) {
        alert("Por favor, insira um número entre 1 e 1000.");
        inserirNumero.value = "";
        return;
    }
    const resultado1 = parOuImpar(numero);
    const resultado2 = numPrimoOuNao(numero);
    const resultado3 = sequenciaFibonacci(numero);
    const resultado4 = multiplosDe4ComPin(numero);

    const resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerHTML = `
        <strong>Par ou Ímpar: </strong>${resultado1}<br>
        <strong>Primo ou Não Primo: </strong>${resultado2}<br>
        <strong>Fibonacci: </strong>${resultado3}<br>
        <strong>Múltiplos de 4 com "pin": </strong>${resultado4}<br>
    `;
}

function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";    
}

function numPrimoOuNao(numero) {
    if (numero < 2) return "Não Primo";
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "Não Primo";
        }
    }
    return "Primo";
}

function sequenciaFibonacci(numero) {
    let a = 0, b = 1;
    
    while (a <=numero) {
        if (a === numero) {
            return "Está na sequência de Fibonacci"
        }
        const temp = a;
        a = b;
        b += temp;
    }
    return "Não está na sequência de Fibonacci";
}

function multiplosDe4ComPin(numero) {
    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        resultado += (i % 4 === 0 ? i + "pin, " : i + ", ");
    }
    return resultado.slice(0, -2); 
}