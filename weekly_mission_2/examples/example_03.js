console.log("\t\t*********************************************");
console.log("\t\t*      C L A S E S   Y   O B J E T O S      *");
console.log("\t\t*********************************************");

// 1. Crear clase vacía
class EmptyClass{
}

console.log('\n\t1. Clase vacia.');
console.log(EmptyClass);

// 2. Instanciar objetos de una clase
const myEmptyClass = new EmptyClass();
console.log('\n\t2. Instancia de Clase vacia.');
console.log(myEmptyClass);

// 3. Instanciar Objeto con atributos
class Student{
    constructor(id, name, lastname){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
}
const myStudent = new Student(6549, 'Ergar', 'López');

console.log('\n\t3. Instancia de objeto con atributos.');
console.log(myStudent);

// 4. Métodos en los objetos
class Person{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    getInfo(){
        return `Person: ${this.name} ${this.lastname} con ${this.age} años de edad.`;
    }
}
const myPerson = new Person('Owen', 'Martinez', 25);

console.log('\n\t4. Métodos en objetos.');
console.log(myPerson.getInfo());

// 5. Atributos con valores por default
class Foro{
    constructor(owner, title){
        this.owner = owner;
        this.title = title;
        this.active = true;
        this.creationDate = new Date();
    }
    getInfo(){
        return `Entrada al foro "${this.title}" propiedad de ${this.owner} creado el ${this.creationDate}, actualmente ${this.active ? 'activo' : 'inactivo'}`;
    }
}
const myForo = new Foro('Charle', 'Presentación al grupo');

console.log('\n\t5. Atributos con valores por default.');
console.log(myForo.getInfo());

// 6. Getters [Accediendo a atributos del objeto]
class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }
}
const myUser = new User(1654649, 'Luis');

console.log('\n\t6. Accediendo a atributos del objeto [getters].');
console.log(`El usuario ${myUser.getId} con nombre ${myUser.getName} saluda.`);

// 7. Setters
class Triangle{
    constructor(base, height){
        this.base = base;
        this.height = height;
    }
    set base(base){
        this._base = base;
    }
    get base(){
        return this._base;
    }
    set height(height){
        this._height = height;
    }
    get height(){
        return this._height;
    }
    getArea(){
        return this._base * this._height;
    }
}
const myTriangle = new Triangle(5,10);

console.log('\n\t7. Setter - Clase Triangulo.');
console.log(`El triangulo tiene de base: ${myTriangle.base}, altura: ${myTriangle.height} y un area: ${myTriangle.getArea()}.`);

myTriangle.base *= 2;
myTriangle.height *= 2;
console.log("Ahora se duplican las dimensiones.");
console.log(`El triangulo tiene de base: ${myTriangle.base}, altura: ${myTriangle.height} y un area: ${myTriangle.getArea()}.`);

// 8. Métodos static
// Son metodos que estan disponibles aun sin instanciar la clase.
class Tools{
    static messagesOn = true;
    static printMessage(message){
        if(Tools.messagesOn){
            console.log(message);
        }
    }
}

console.log('\n\t8. Métodos static');
Tools.printMessage("Este mensaje se escribe desde un método estático.");
Tools.messagesOn = false;
Tools.printMessage("Este mensaje NO debería verse ;)");

// 9. Herencia
class PersonB{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
    get lastname(){
        return this._lastname;
    }
    set age(age){
        return this._age = age;
    }
    get age(){
        return this._age;
    }

    getInfo(){
        return `Person.- ${this.name} ${this.lastname} con ${this.age} años de edad.`;        
    }
}
class StudentB extends PersonB{
}

const myStudentB = new StudentB("Juan", "Perez Jolote", 22);

console.log('\n\t9. Herencia');
console.log("El estudiante tiene la siguiente indormación.");
console.log(myStudentB.getInfo());


// 10. Overriding methods

class PersonC{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
    get lastname(){
        return this._lastname;
    }
    set age(age){
        return this._age = age;
    }
    get age(){
        return this._age;
    }

    getInfo(){
        return `Person.- ${this.name} ${this.lastname} con ${this.age} años de edad.`;        
    }
}
class StudentC extends PersonC{
    constructor(id, name, lastname, age, curse){
        super(name, lastname, age);
        this.id = id;
        this.curse = curse;
    }
    set id(id){
        this._id = id;
    }
    get id(){
        return this._id;
    }
    set curse(curse){
        this._curse = curse;
    }
    get curse(){
        return this._curse;
    }

    getInfo(){
        return super.getInfo() + `\nStudent.- Matricula: ${this.id}, Curso: ${this.curse}.`;        
    }
}

const myStudentC = new StudentC(95176, "Juan", "Perez Jolote", 22, "Como entrenar a tu dragon");

console.log('\n\t10. Overriding methods');
console.log("El estudiante tiene la siguiente indormación.");
console.log(myStudentC.getInfo());
