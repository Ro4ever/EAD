for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let i = 0; i <= 100; i++) {
    if (i === 50) {
        break;
    }
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}

let nomes = ["Ana", "João", "Maria", "Pedro"];
for (let nome of nomes) {
    console.log(nome);
}
