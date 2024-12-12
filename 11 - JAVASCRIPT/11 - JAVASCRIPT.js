// Spread Arrays
const lista1 = ["maçã", "banana"];
const lista2 = ["laranja", "uva"];
const listaCompleta = [...lista1, ...lista2];
console.log(listaCompleta);

// Spread Objetos
const usuario = { nome: "João", idade: 30 };
const usuarioAtualizado = { ...usuario, status: "ativo" };
console.log(usuarioAtualizado);
