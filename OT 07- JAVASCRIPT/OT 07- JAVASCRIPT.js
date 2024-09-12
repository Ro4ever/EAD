let livros = new Map();
livros.set('Dom Quixote', 'Miguel de Cervantes');
livros.set('1984', 'George Orwell');
livros.set('O Alquimista', 'Paulo Coelho');

console.log(livros.get('1984')); // George Orwell

for (let [titulo, autor] of livros) {
    console.log(titulo + " - " + autor);
}

console.log(livros.size); // 3
livros.delete('Dom Quixote');
console.log(livros.has('Dom Quixote')); // false

let colecao = new Map();
colecao.set('chaveString', 'valor1');
colecao.set(123, 'valor2');
colecao.set({id: 1}, 'valor3');
