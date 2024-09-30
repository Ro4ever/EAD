var isTruthy = function(param) {
    return !!param;
};

console.log(isTruthy(false));
console.log(isTruthy(0));
console.log(isTruthy(''));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));

console.log(isTruthy(true));
console.log(isTruthy(1));
console.log(isTruthy('string'));
console.log(isTruthy([]));
console.log(isTruthy({}));
console.log(isTruthy(function() {}));
console.log(isTruthy('0'));
console.log(isTruthy('false'));
console.log(isTruthy(3.14));
console.log(isTruthy(-1));

var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    placa: "ABC-1234",
    ano: 2020,
    cor: "preto",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

carro.mudarCor = function(novaCor) {
    this.cor = novaCor;
};

carro.obterCor = function() {
    return this.cor;
};

carro.obterModelo = function() {
    return this.modelo;
};

carro.obterMarca = function() {
    return this.marca;
};

carro.obterMarcaModelo = function() {
    return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
};

carro.adicionarPessoas = function(numPessoas) {
    let totalPessoas = this.quantidadePessoas + numPessoas;
    if (totalPessoas > this.assentos) {
        let cabem = this.assentos - this.quantidadePessoas;
        if (cabem === 0) {
            return "O carro já está lotado!";
        }
        return `Só cabem mais ${cabem} ${cabem === 1 ? 'pessoa' : 'pessoas'}!`;
    }
    this.quantidadePessoas = totalPessoas;
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
};

console.log(carro.obterCor());
carro.mudarCor("vermelho");
console.log(carro.obterCor());
carro.mudarCor("verde musgo");
console.log(carro.obterCor());
console.log(carro.obterMarcaModelo());
console.log(carro.adicionarPessoas(2));
console.log(carro.adicionarPessoas(4));
console.log(carro.adicionarPessoas(1));
carro.quantidadePessoas -= 4;
console.log(carro.adicionarPessoas(10));
console.log(carro.quantidadePessoas);
