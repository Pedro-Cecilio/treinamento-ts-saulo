/* 
    - Tipagem é um processo, utilizado para garantir qual tipo que determinada estrutra será responsável por conter.
    - Para tipar podemos utilizar tipos primitivos do ts, ou objetos personalizados como interfaces, classes, enum.
    - O typrescript, assim como o js, também possui inferência de tipo, porém é uma prática recomendada, tipar sempre que possível.
*/

// Variáveis 
const nome : string = "Saulo"
const idade: number = 22

// Parâmetros e retorno

function soma(a: number, b: number): number {
    return a + b
}



