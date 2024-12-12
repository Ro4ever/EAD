// Generics
function primeiroElemento<T>(array: T[]): T {
    return array[0];
}
console.log(primeiroElemento([10, 20, 30]));

// Classe com Generics
class Pilha<T> {
    private elementos: T[] = [];
    push(item: T): void {
        this.elementos.push(item);
    }
    pop(): T | undefined {
        return this.elementos.pop();
    }
}
