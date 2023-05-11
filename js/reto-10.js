// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
// dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
// nombre completo (nombre y apellidos) de la persona a modo de string.

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


const obtenerNombreCompleto = (datosPersona)=>{
    let nombre = datosPersona.nombre;
    let apellido = datosPersona.apellido;
    return nombre + ' ' + apellido;
};


console.log(obtenerNombreCompleto(persona));