const explorers = [{
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
        "js",
        "c#"
    ],
    missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: true,
            exercisesFinished: true
        }
    }
},{
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
        "js"
    ],
    missions: {
        onboarding: {
            isFinished: false,
            exercisesFinished: false
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
},{
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
        "elixir"
    ],
    missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
}];

/*
1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
 */
explorers.forEach((exp)=>{
    console.log("\n" + exp.name);

    /*
    2. Imprime el stack de cada explorer, usa FOR EACH
    */
    console.log("\tStack:");
    exp.stack.forEach((stack)=>{
        console.log("\t\t" + stack);
    });

});

/*
3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
 */
console.log("\nTodos los Stack:");
const allStack = explorers.map((exp)=>{
    return exp.stack.map((stack)=>{return stack});
});
console.log("\t" + allStack);

/*
4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para 
    validar un elemento en un lista se usa el método includes)
 */
console.log("\nExplorers que tienen en su stack JS:");
const expWithJS = explorers.filter((exp)=>{
    /*
    if(exp.stack.indexOf("js")>=0){
        return true;
    }
    return false;
    */
    return exp.stack.includes("js");
});
console.log(expWithJS);

/*
5. Busca el primer explorer que sea de la CDMX, usa FIND
 */
const expCDMX = explorers.find(exp => exp.city == "CDMX");
console.log("\nExplorer en CDMX:");
console.log(expCDMX);

/*
6. Obtén la suma de todos los exercises_completed, usa REDUCE
 */
const sumExercisesCompleted = explorers.reduce((previousValue, exp) => previousValue + exp.exercises_completed, 0);
console.log("\nSuma de todos los ejercicios completados: \t" + sumExercisesCompleted);

/*
7. Obtén la validación si al menos uno de los explorers tiene la propiedad 
    exercisesFinished en frontend como true, usa SOME
 */
const someomeWithExercisesFinishedInFrontend = explorers.some(exp => exp.missions.frontend.exercisesFinished);
console.log("\nAlguien ha terminado todos los ejercicios en Frontend: \t" + (sumExercisesCompleted ? "SI, Alguien." : "NO, Nadie."));

/*
8. Obtén la validación si todos los explorers tienen la propiedad isFinished 
    del onboarding como true. Usa EVERY.
*/
const allFinishedOnboarding = explorers.every(exp => exp.missions.onboarding.isFinished);
console.log("\nTodos han terminado el Onboarding: \t" + (allFinishedOnboarding ? "SI, Todos." : "NO, Faltan."));
