const isTruthy = (value) => !!value;

console.log(isTruthy(false)); 
console.log(isTruthy(0));    
console.log(isTruthy(""));    
console.log(isTruthy(null));  
console.log(isTruthy(undefined)); 
console.log(isTruthy(NaN));   

console.log(isTruthy(true));       
console.log(isTruthy(1));         
console.log(isTruthy("string"));   
console.log(isTruthy([]));         
console.log(isTruthy({}));         
console.log(isTruthy(() => {}));   
console.log(isTruthy(Infinity));   
console.log(isTruthy(-1));         
console.log(isTruthy(3.14));      
console.log(isTruthy("false"));    

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    placa: 'ABC-1234',
    ano: 2020,
    cor: 'Prata',
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
    return `Esse carro é um ${this.marca} ${this.modelo}`;
};

carro.adicionarPessoas = function(numPessoas) {
    const lugaresDisponiveis = this.assentos - this.quantidadePessoas;

    if (this.quantidadePessoas === this.assentos) {
        return "O carro já está lotado!";
    }

    if (numPessoas > lugaresDisponiveis) {
        return `Só cabem mais ${lugaresDisponiveis} ${lugaresDisponiveis === 1 ? 'pessoa' : 'pessoas'}!`;
    }

    this.quantidadePessoas += numPessoas;
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
};

console.log(carro.obterCor()); 

carro.mudarCor('Vermelho');

console.log(carro.obterCor()); 

carro.mudarCor('Verde Musgo');

console.log(carro.obterCor()); 

console.log(carro.obterMarcaModelo()); 

console.log(carro.adicionarPessoas(2)); 

console.log(carro.adicionarPessoas(4)); 
console.log(carro.adicionarPessoas(3)); 

carro.quantidadePessoas -= 4;
console.log(`Agora temos ${carro.quantidadePessoas} pessoas no carro!`); 
console.log(carro.adicionarPessoas(10)); 

console.log(carro.quantidadePessoas); 
