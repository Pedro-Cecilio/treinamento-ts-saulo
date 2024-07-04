/* 
    - Os intersection types combinam vários tipos em um único tipo. Pode ser útil quando deseja que uma variável tenha todas propriedades de múltiplos tipos.
*/

interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: "Alice",
    age: 30,
    employeeId: 123
};