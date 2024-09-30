function adicao(a, b) {
    return a + b;
}

var resultado = adicao(3, 7) + 5;

console.log(resultado); 

var atualizar;

function attValor(valor) {
    atualizar = valor;
    return `O valor da variável agora é ${atualizar}.`;
}

console.log(attValor(10)); 

function multiTres(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return a * b * c + 2;
}

console.log(multiTres(2, 3)); 

console.log(multiTres(2, 3, 4)); 

function argumentosVariados(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    } else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}


console.log(argumentosVariados());       
console.log(argumentosVariados(5));      
console.log(argumentosVariados(5, 3));   
console.log(argumentosVariados(5, 3, 4)); 
