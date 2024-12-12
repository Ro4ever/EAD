// Calculadora Simples
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;
console.log(soma(5, 10));

// Função de Saudação
const saudacao = nome => `Olá, ${nome}!`;
console.log(saudacao("Mundo"));

// Contador com Arrow Function
let contador = 0;
const intervalo = setInterval(() => {
    console.log(++contador);
    if (contador === 5) clearInterval(intervalo); // Para após 5
}, 1000);

// Filtrar Números Pares
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

// Conversor de Temperatura
const celsiusParaFahrenheit = c => (c * 9) / 5 + 32;
console.log(celsiusParaFahrenheit(0));
