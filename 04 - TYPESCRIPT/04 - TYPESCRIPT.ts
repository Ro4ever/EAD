// Funções com opcionais
const saudacao = (nome: string, titulo?: string): string =>
    titulo ? `Olá, ${titulo} ${nome}` : `Olá, ${nome}`;
console.log(saudacao("João"));
console.log(saudacao("João", "Sr."));

// Overloads
function ajustar(valor: number): number;
function ajustar(valor: string): string;
function ajustar(valor: any): any {
    return typeof valor === "number" ? valor * 2 : valor.toUpperCase();
}
console.log(ajustar(10));
console.log(ajustar("typescript"));
