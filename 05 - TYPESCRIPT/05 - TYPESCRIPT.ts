// Interface e Type Alias
interface Contato {
    email: string;
    telefone: string;
}
const imprimirContato = (contato: Contato): void => {
    console.log(`Email: ${contato.email}, Telefone: ${contato.telefone}`);
};
imprimirContato({ email: "exemplo@email.com", telefone: "12345-6789" });

// Type Alias para operações matemáticas
type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (a, b) => a + b;
console.log(soma(5, 10));
