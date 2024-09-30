var qualquerObjeto = {};

var pessoa = {
    nome: "Roberto",
    sobrenome: "Ellmer",
    sexo: "Masculino",
    idade: 31,
    altura: 1.84,
    peso: 88,
    andando: false,
    caminhouQuantosMetros: 0
};

pessoa.aniversario = function() {
    this.idade += 1;
};

pessoa.andar = function(metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
};

pessoa.parar = function() {
    this.andando = false;
};

pessoa.nomeComp = function() {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
};

pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${this.idade} anos!`;
};

pessoa.mostrarPeso = function() {
    return `Eu peso ${this.peso}Kg.`;
};

pessoa.mostrarAltura = function() {
    return `Minha altura é ${this.altura}m.`;
};

pessoa.apresentacao = function() {
    let artigo = this.sexo === "Feminino" ? "a" : "o";
    let idadeAnos = this.idade === 1 ? "ano" : "anos";
    let metros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";
    return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idadeAnos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`;
};

console.log(pessoa.nomeComp());
console.log(pessoa.mostrarIdade());
console.log(pessoa.mostrarPeso());
console.log(pessoa.mostrarAltura());
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.andar(10);
pessoa.andar(5);
pessoa.andar(3);
console.log(pessoa.andando);
pessoa.parar();
console.log(pessoa.andando);
console.log(pessoa.caminhouQuantosMetros);
console.log(pessoa.apresentacao());
