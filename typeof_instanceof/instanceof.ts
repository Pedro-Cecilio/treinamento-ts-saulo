/* 
    - O operador instanceof é utilizado para verificar se um objeto é uma instancia de uma classe específica.
*/

class Animal {
    nome: string
    constructor(nome: string) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} está falando`;
    }
}

const animal = new Animal("Usopp");

console.log(animal instanceof Animal)