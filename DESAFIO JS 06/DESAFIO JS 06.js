var championship = "Campeonato Paulista";
console.log(championship);

var teams = ["Palmeiras", "Corinthians", "São Paulo", "Santos", "Bragantino"];
console.log('Times que estão participando do campeonato:', teams);

function showTeamPosition(posicao) {
    if (posicao < 1 || posicao > 5) {
        return "Não temos a informação do time que está nessa posição.";
    }
    return `O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.`;
}

console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));

var numero = 20;
while (numero <= 30) {
    console.log(numero);
    numero++;
}

function convertToHex(cor) {
    let hexa;
    switch (cor) {
        case "red":
            hexa = "#FF0000";
            break;
        case "green":
            hexa = "#00FF00";
            break;
        case "blue":
            hexa = "#0000FF";
            break;
        case "yellow":
            hexa = "#FFFF00";
            break;
        case "black":
            hexa = "#000000";
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`;
    }
    return `O hexadecimal para a cor ${cor} é ${hexa}.`;
}

console.log(convertToHex("red"));
console.log(convertToHex("green"));
console.log(convertToHex("blue"));
console.log(convertToHex("yellow"));
console.log(convertToHex("black"));
console.log(convertToHex("purple"));
console.log(convertToHex("white"));
console.log(convertToHex("orange"));
