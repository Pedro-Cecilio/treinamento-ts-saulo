/* 
    - Interfaces são estruturas que determinam um contrato a ser seguido. Estruturas que desejarem seguir esse contrato, devem conter tudo que foi definido nele.
    - Objetos simples podem ser tipados com uma interface, sendo obrigados a definir todas propriedades e métodos definidos na mesma.
    - Classes podem implementar interfaces, sendo obrigadas a definir todas propriedades e métodos definidos na mesma.
*/

interface IPessoa {
    nome: string
    idade: number
    viva: boolean
}

const pessoa: IPessoa = {
    nome: "Pedro",
    idade: 23,
    viva: true
}

class Pessoa implements IPessoa{
    nome: string
    idade: number
    viva: boolean
    
    constructor(nome: string, idade: number, viva: boolean) {
        this.nome = nome
        this.idade = idade
        this.viva = viva
    }
}