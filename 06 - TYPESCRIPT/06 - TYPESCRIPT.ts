// Orientação a Objetos
class Carro {
    constructor(
        public marca: string,
        public modelo: string,
        public ano: number
    ) {}
    descricao(): void {
        console.log(`${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}

class CarroEletrico extends Carro {
    constructor(
        marca: string,
        modelo: string,
        ano: number,
        public bateria: number
    ) {
        super(marca, modelo, ano);
    }
}

const meuCarro = new CarroEletrico("Tesla", "Model S", 2022, 100);
meuCarro.descricao();
