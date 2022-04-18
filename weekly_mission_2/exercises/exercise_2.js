const explorers = [
    {
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
    },
    {
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
    },
    {
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
    }
   ]

console.log("Sobre esta lista, realiza lo siguiente:")

console.log("Ejercicio 2.1: Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")

explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2.2: Imprime el stack de cada explorer, usa FOR EACH")

explorers.forEach(item => console.log(item.stack))

console.log("Ejercicio 2.3: Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")

const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorers_stacks)

console.log("Ejercicio 2.4: Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes)")

const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorers_with_js)

console.log("Ejercicio 2.5: Busca el primer explorer que sea de la CDMX, usa FIND")

const first_explorer_in_CDMX =explorers.find(my_explorer_in_list => my_explorer_in_list.city == "CDMX")
console.log(first_explorer_in_CDMX)

console.log("Ejercicio 2.6: Obtén la suma de todos los exercises_completed, usa REDUCE")

const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0)
console.log(all_exercises)

console.log("Ejercicio 2.7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")

console.log("Ejercicio 2.8: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY")



