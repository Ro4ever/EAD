// Union e Intersection
function info(param: string | number, details: { nome: string } & { idade: number }) {
    console.log(`Param: ${param}, Nome: ${details.nome}, Idade: ${details.idade}`);
}

// Conditional Types
type TipoCondicional<T> = T extends boolean ? "Sim" : "Não";
type Exemplo = TipoCondicional<true>; // "Sim"

// Utilitários
type ConfiguracaoParcial = Partial<{ tema: string; linguagem: string }>;
const config: ConfiguracaoParcial = { tema: "escuro" };
