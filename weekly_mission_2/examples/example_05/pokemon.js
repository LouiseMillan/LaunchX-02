export default class Pokemon{
    constructor(name, type, age){
        this.name = name;
        this.age = age;
        this.type = type;
        this.attacks = [];
    }

    get getAttacks(){
        return this.attacks;
    }
    set setAttacks(attacks){
        this.attacks = attacks;
    }
}

const myPokemon = new Pokemon("Charmander", "Fuego", 10);
console.log(myPokemon);
