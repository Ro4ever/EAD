const frutas = new Set();
frutas.add('maçã');
frutas.add('banana');
frutas.add('laranja');
frutas.add('maçã'); // Tentando adicionar uma fruta que já está no Set

console.log(frutas); // Saída: Set(3) { 'maçã', 'banana', 'laranja' }

console.log(frutas.has('banana')); // Saída: true
console.log(frutas.has('uva'));    // Saída: false

frutas.delete('laranja');
console.log(frutas); // Saída: Set(2) { 'maçã', 'banana' }

frutas.clear();
console.log(frutas); // Saída: Set(0) {}

const numeros = new Set([1, 2, 3, 4, 5]);
console.log(numeros.size); // Saída: 5

for (const numero of numeros) {
    console.log(numero); // Saída: 1 2 3 4 5 (cada número em uma nova linha)
}

const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const setSemDuplicatas = new Set(arrayComDuplicatas);
const arraySemDuplicatas = [...setSemDuplicatas];

console.log(arraySemDuplicatas); // Saída: [1, 2, 3, 4, 5]
