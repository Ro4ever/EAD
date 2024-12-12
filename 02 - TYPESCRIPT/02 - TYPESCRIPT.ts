//ts-node-dev para desenvolvimento agil.
const saudacao = (nome: string): void => {
    console.log(`Olá, ${nome}!`);
};
saudacao("Mundo");

// tipos básicos.
let isAtivo: boolean = true; // Booleano
let idade: number = 25; // Número
let nome: string = "TypeScript"; // String

// Enum e Tuple
enum Dias {
    Segunda,
    Terça,
    Quarta,
}
console.log(Dias.Terça);

let produto: [string, number] = ["Notebook", 2500];
console.log(`Produto: ${produto[0]}, Preço: R$${produto[1]}`);
