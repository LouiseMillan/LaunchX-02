console.log("\t\t*********************************");
console.log("\t\t*      O P E R A D O R E S      *");
console.log("\t\t*********************************");

// 1. Ejemplo For Each [Imprimir datos]
const autos = [
    "Pagani Zonda HP Barchetta",
    "Rolls-Royce Sweptail",
    "Bugatti La Voiture Noire",,
    "Bugatti Centodieci",
    "Bugatti Divo",
    "Pagani Huayra Imola"
];

console.log('\n\t1. forEach - para imprimir elementos en un arreglo.');
autos.forEach(auto => console.log(auto));

// 2. Ejemplo For Each [Sumar elementos]
let sum = 0;
const numbers = [6,9,7,8,6.5,10];

console.log('\n\t2. forEach - para sumar elementos en un arreglo.');
numbers.forEach(num => sum += num);
console.log('Suma: ' + sum + ' Promedio: ' + (sum/numbers.length));

// 3. Ejemplo For Each [Elementos a función]
function logArrayElements(element, index, array){
    console.log("auto[" + index + "] = " + element + " ==> " + array[index]);
}

console.log('\n\t3. forEach - usando función externa.');
autos.forEach(logArrayElements);

// 4. Ejemplo Map [procesar un arreglo calculando su cuadrado]
const nums = [1,3,5,7,9];
const numsSquare = nums.map(num => {return num * num;});

console.log('\n\t4. map - procesando un arreglo calculando su cuadrado.');
console.log('x:');
console.log(nums);
console.log('x^2:');
console.log(numsSquare);

// 5. Ejemplo Map [Convertir un arreglo de cadenas a numeros]
const strNums = ['2','4','6','8','10'];
const newNums = strNums.map(num => {return parseInt(num, 10);});

console.log('\n\t5. map - procesando un arreglo para convertirlo en números.');
console.log(strNums);
console.log(newNums);

// 6. Ejemplo Map [Codificando String a ASCII]
const map = Array.prototype.map;
const message = "Hola Mundo.";
const code = map.call(message, (char) => {return char.charCodeAt(0);});

console.log('\n\t6. map - procesando una Cadena a ASCII.');
console.log('String: ' + message);
console.log('ASCII:');
console.log(code);

// 7. Ejemplo de Filter [Filtrado por cadena en una lista de frutas.]
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const fruitWith = query => {
    return fruits.filter(item => {
        return item.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
    });
};

console.log('\n\t7. filter - Filtrado por cadena en una lista de frutas.');
console.log(fruits);
console.log('Filtrando: "ap"');
console.log(fruitWith('ap'));
console.log('Filtrando: "an"');
console.log(fruitWith('an'));

// 8. Ejemplo de Filter [Filtrando entradas invalidas en un JSON]
const json = [
    { id: 20 },
    { id: -1 },
    { id: 0 },
    { id: 5 },
    { id: 16.9 },
    {},
    { id: null },
    { id: NaN },
    { id: undefined },
    { id: 'chachacha' }
];
let invalidCounter = 0;
const validJSON = json.filter(item => {
    if('id' in item && typeof(item.id) === 'number' && !isNaN(item.id)){
        return true;
    }else{
        invalidCounter++;
        return false;
    }
});

console.log('\n\t8. filter - Filtrando entradas invalidas en un JSON.');
console.log('JSON de entrada:');
console.log(json);
console.log('JSON filtrado:');
console.log(validJSON);
console.log('Entradas invalidas: ' + invalidCounter);

// 9. Ejemplo de Reduce
const numbs = [3,6,9,12,15];
const resultReduce = numbs.reduce((accumulator, item) => accumulator + item, 0);

console.log('\n\t9. Reduce.');
console.log('Arreglo original:');
console.log(numbs);
console.log('Reduce:');
console.log(resultReduce);

// 10. Ejemplo de Every
// Determina si todos los elementos en el array satisfacen una condición.
const numse = [3,6,9,12,15];
let multi = numse.every(item => item % 3 == 0);

console.log('\n\t10. Every - Multiplos de 3.');
console.log('Arreglo original:');
console.log(numse);
console.log('¿Todos son multiplos de 3?: ' + (multi ? 'SI' : 'NO'));

// 11. Ejemplo de Find [5 < x < 10]
// Encuentra el valor del primer elemento que cumple la condición.
const numsf = [5,12,8,130,45];
const foundnum = numsf.find(item => item > 5 && item < 10);

console.log('\n\t11. Find - 5 < x < 10.');
console.log('Arreglo original:');
console.log(numsf);
console.log('Elemento encontrado:');
console.log(foundnum);

// 12. Ejemplo de Find [Busqueda en arreglo de objetos]
const inventory = [
    {name: 'manzanas', amount: 3},
    {name: 'platanos', amount: 0},
    {name: 'cerezas', amount: 5}
];
const withoutI = inventory.find(item => item.amount == 0);

console.log('\n\t12. Find - Encontrar la falta de algun producto.');
console.log('Productos:');
console.log(inventory);
console.log('Elemento faltante:');
console.log(withoutI);

// 13. Ejemplo de FindIndex
const names = ['Juan', 'Sara', 'Armando', 'Hermenegildo', 'Rosalia'];
const bigname = names.findIndex(item => item.length > 10);

console.log('\n\t13. FindIndex - Encontrar un nombre de mas de 10 carácteres.');
console.log('Nombres:');
console.log(names);
console.log(`El nombre de más de 10 carácteres se encuentra en la posicion ${bigname} y es: ${names[bigname]}`);

// 14. Ejemplo de Some
// Este método validará todos los elementos de la lista,
// y si alguno cumple con la validación indicada, regresará true,
// de lo contrario será false.
console.log('\n\t14. Some - Encontrar si hay:');
console.log('Productos:');
console.log(inventory);
console.log('¿Hay guayabas? ' + (inventory.some(item => item.name == 'guayabas' && item.amount > 0) ? 'SI ;)' : 'NO (TT)'));
console.log('¿Hay platanos? ' + (inventory.some(item => item.name == 'platanos' && item.amount > 0) ? 'SI ;)' : 'NO (TT)'));
console.log('¿Hay manzanas? ' + (inventory.some(item => item.name == 'manzanas' && item.amount > 0) ? 'SI ;)' : 'NO (TT)'));

// 15. Ejemplo de Sort [Orden default]
const products = ['Honey', 'Coffee', 'Sugar', 'Milk', 'Apple', 'Cake', 'Tea'];

console.log('\n\t15. Sort - Ordenado por defecto.');
console.log('Productos:');
console.log(products);
console.log('Productos ordenados:');
console.log(products.sort());

// 16. Ejemplo de Sort [Ordenando lista]
const pcs = [
    {name: 'Compaq 386', year: 1986},
    {name: 'iMac', year: 1998},
    {name: "Apple's Lisa computer", year: 1985},
    {name: "Apple's Mac II", year: 1987},
    {name: 'IBM Personal Computer', year: 1982}
];

console.log('\n\t15. Sort - Ordenando objetos.');
console.log('Arreglo de objetos:');
console.log(pcs);
console.log('Por fecha:');
console.log(pcs.sort((a, b) => {
    if(a.year < b.year) return -1;
    if(a.year > b.year) return 1;
    return 0;
}));
