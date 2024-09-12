let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};
console.log(carro.modelo);

carro.cor = 'vermelho';
carro.ano = 2022;
console.log(carro);

let calculadora = {
    soma: function(a, b) {
        return a + b;
    }
};
console.log(calculadora.soma(5, 3));

for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}

let livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien'
};
let outroLivro = livro;
outroLivro.titulo = 'O Senhor dos Anéis';
console.log(livro.titulo); // 'O Senhor dos Anéis'

console.log(Object.keys(carro));
console.log(Object.values(carro));
