let animais = [];
animais.push("cachorro");
animais.push("gato");
animais.push("pássaro");
console.log(animais); 

animais.shift();
console.log(animais); 

animais.unshift("elefante");
animais.unshift("leão");
console.log(animais); 

animais[1] = "girafa";
console.log(animais); 

let frutas = [];
frutas.push("maçã");
frutas.push("banana");
frutas.push("laranja");
console.log(frutas.length); 

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

