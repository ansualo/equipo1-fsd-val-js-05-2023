let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const longitud = (lista)=>{
    return lista.length;
};

console.log(longitud(letras));


const obtenerNumeroRandom = (max)=>{
   return Math.floor(Math.random() * max);
};

console.log(letras[obtenerNumeroRandom(longitud(letras))])