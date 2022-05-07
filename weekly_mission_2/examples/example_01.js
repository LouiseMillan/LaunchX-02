console.log("\t\t***************************");
console.log("\t\t*      O B J E T O S      *");
console.log("\t\t***************************");

// 1. Objeto vacio
const objEmpty = {};
console.log('\n\t1. Objeto vacio');
console.log(objEmpty);

// 2. Objeto con propiedades
const objProp = {
    name: "Luis",
    lastName: "Millán"
};
console.log('\n\t2. Objeto con propiedades');
console.log(objProp);

// 3. Objeto con propiedades diferentes
const objPropPlus = {
    name: "Luis",
    fingers: 10,
    pi: 3.1416,
    outfit: [
        "T-shirt",
        "Jeans",
        "Shoes"
    ],
    address: {
        street: "Avenida Nuevo León 567",
        city: "CDMX",
        zip_code: "06100"
    }
};
console.log('\n\t3. Objeto con propiedades diferentes');
console.log(objPropPlus)

// 4. Objeto con métodos
const objMethods = {
    name: "Egan",
    sayHello: function() {
        console.log(`${this.name} dice: "¡Hola tu!"`);
    }
};
console.log('\n\t4. Objeto con métodos');
console.log(objMethods)
objMethods.sayHello();

// 5. Objeto con métodos que reciben parámetros
const objMethodsArg = {
    name: "Owen",
    sayHelloTo: function(name) {
        console.log(`${this.name} dice: "¡Hola ${name}!"`);
    }
};
console.log('\n\t5. Objeto con métodos que reciben parámetros');
console.log(objMethodsArg)
objMethodsArg.sayHelloTo('Canicas');
