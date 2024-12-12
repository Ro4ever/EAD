// Desestruturação de Arrays
const numeros = [1, 2, 3];
const [a, b, c] = numeros; // Desestruturando o array
console.log(a, b, c);

// Desestruturação de Objetos
const pessoa = { nome: "João", idade: 30 };
const { nome, idade } = pessoa; // Extraindo propriedades do objeto
console.log(nome, idade);

// Valores padrão na desestruturação
const [x = 10, y = 20] = [5]; // x pega 5, y usa o valor padrão
console.log(x, y);

// Trocando valores com desestruturação
let foo = "bar";
let bar = "foo";
[foo, bar] = [bar, foo]; // Trocando os valores
console.log(foo, bar);
