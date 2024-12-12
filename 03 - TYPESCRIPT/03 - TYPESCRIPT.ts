// Arrays
let cidades: string[] = ["São Paulo", "Rio", "Curitiba"];
console.log(`Terceira cidade: ${cidades[2]}`);

// Adicionando e removendo elementos
let numeros: number[] = [10, 20, 30, 40, 50];
numeros.splice(2, 0, 35); // Adicionando 35 entre 30 e 40
numeros.splice(1, 1); // Removendo 20
console.log(numeros);

// map e filter
let triplicados = numeros.map(n => n * 3);
console.log(triplicados);

let impares = numeros.filter(n => n % 2 !== 0);
console.log(impares);
