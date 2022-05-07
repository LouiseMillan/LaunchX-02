import Pokemon from "./pokemon";
/*
test('1) Create a new object pokemon', () => {
    expect(4+1).toBe(10); // Corrige esta prueba
});
*/
test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu');
    expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});
