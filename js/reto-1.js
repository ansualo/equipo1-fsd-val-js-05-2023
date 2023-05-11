let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const longitud = (lista)=>{
    return lista.length;
};

console.log(longitud(letras));


function obtenerNumeroRandom(max) {
  return Math.floor( Math.random() * max );
}

let longitudDeLetras = longitud(letras);
let randomIndex = obtenerNumeroRandom(longitudDeLetras);
console.log(letras[randomIndex]);

