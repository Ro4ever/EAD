var arrayAleatorio = [1, "teste", true, 3.14, null];

function retornaArray(array) {
    return array;
}

console.log(retornaArray(arrayAleatorio)[1]);

function retornaValorIndice(array, indice) {
    return array[indice];
}

var arrayDiversificado = [42, "JavaScript", false, { nome: "Objeto" }, [1, 2, 3]];

console.log(retornaValorIndice(arrayDiversificado, 0));
console.log(retornaValorIndice(arrayDiversificado, 1));
console.log(retornaValorIndice(arrayDiversificado, 2));
console.log(retornaValorIndice(arrayDiversificado, 3));
console.log(retornaValorIndice(arrayDiversificado, 4));

function book(nomeDoLivro) {
    var livros = {
        "Livro A": {
            quantidadePaginas: 250,
            autor: "Autor A",
            editora: "Editora A"
        },
        "Livro B": {
            quantidadePaginas: 300,
            autor: "Autor B",
            editora: "Editora B"
        },
        "Livro C": {
            quantidadePaginas: 150,
            autor: "Autor C",
            editora: "Editora C"
        }
    };
    return nomeDoLivro ? livros[nomeDoLivro] : livros;
}

console.log(book());

console.log(`O livro Livro A tem ${book("Livro A").quantidadePaginas} páginas!`);

console.log(`O autor do livro Livro B é ${book("Livro B").autor}.`);

console.log(`O livro Livro C foi publicado pela editora ${book("Livro C").editora}.`);
