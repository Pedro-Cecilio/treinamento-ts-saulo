/* 
    -  Type Aliases permitem criar nomes personalizados para tipos, incluindo tipos complexos. Isso pode tornar o código mais legível e facilitar a manutenção.
*/

type User = {
    id: number;
    name: string;
    email: string;
    age?: number; // Campo opcional
};