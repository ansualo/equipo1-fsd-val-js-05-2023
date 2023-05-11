// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a
// tres de esas propiedades.

let persona = {
    nombre:"",
    apellido:"",
    edad: "",
    pais:""
};

persona.nombre = prompt("Escribe tu nombre");
persona.apellido = prompt("Escribe tu apellido");
persona.edad = prompt("Escribe tu edad");
persona.pais = prompt("Escribe tu pais");

console.log(persona)


const obtenerNombreCompleto = ({ nombre, apellido, edad })=>{
    return nombre + ' ' + apellido + ' ' + edad;
};


console.log(obtenerNombreCompleto(persona));