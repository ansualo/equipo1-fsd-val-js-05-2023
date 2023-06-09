// Crea un array que contenga al menos tres objetos con las mismas propiedades (al
// menos tres) y distintos valores. Crea una función que saque por consola el valor de una de
// las propiedades para todos los objetos.

let personas = [
  {
    nombre: "Andrea",
    apellido: "Suarez",
    edad: "31",
    pais: "España",
  },
  {
    nombre: "Edu",
    apellido: "Kiriakos",
    edad: "26",
    pais: "Venezuela",
  },
  {
    nombre: "Judit",
    apellido: "Grau",
    edad: "33",
    pais: "España",
  },
];

// Esta la la forma chimba
// const imprimirNombre= (array)=>{
//     for(let i = 0; i < personas.length; i++) {
//         console.log(array[i].nombre)
//     }
// };

// Esta también está guay
// personas.forEach((persona) => {
//     console.log(persona.nombre);
// })

personas.forEach(({ nombre }) => {
    console.log(nombre);
})