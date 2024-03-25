const analyzer = {
  getWordCount: (text) => {
    //"hola mundo tres algo"
    if(text ===""){
      return "0"
    }
    const arregloPalabras = text.split(" ");
    return arregloPalabras.length;
    //[hola, mundo,tres,algo]

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (textoUsuario) => {
    return textoUsuario.length;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (parametroTextoUsuario) => {
    //let parametroTextoUsuario= "jajaja jajaja"
    //un parametro es una variable de la funcion,
    //una ves que la funcion termine de ejecutarce desaparece
    //parametroTextoUsuario="hola benja"
    // textoUsuario.replaceAll(" ", "")

    const caja = parametroTextoUsuario.replaceAll(" ", "").replaceAll(".","").replaceAll(",","");
    return caja.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const arregloPalabras = text.split(" ");
    const cantPalabras = arregloPalabras.length;
    let contador = 0;
    for (let index = 0; index < arregloPalabras.length; index++) {
      // 0 1 2 3 4 5 6 **
      const palabra = arregloPalabras[index];
      contador = contador + palabra.length;
    }

    return Number(parseFloat(contador / cantPalabras,).toFixed(2));
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    // "texto 23 45 6 7 5"
    if(text ===""){
      return "0"
    }
    const arregloPalabras = text.slice(0, -1).split(" ");
    // slice elimina el ultimo caracter (la idea, eliminar el .)
    // [texto,23,45, 6,7, 5]
    //  en donde va a empezar ;
    let contador = 0;
    for (let index = 0; index < arregloPalabras.length; index++) {
      // 0 1 2 3 4 5 6 **
      const palabra = arregloPalabras[index];
      if (isNaN(palabra) === false) {
        contador = contador + 1;
      }
    }
    return contador;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    
    const arregloPalabras = text.slice(0, -1).split(" ");
    // [texto,23,45, 6,7, 5]
    //  en donde va a empezar ;
    let contador = 0;
    for (let index = 0; index < arregloPalabras.length; index++) {
      // 0 1 2 3 4 5 6 **
      const palabra = arregloPalabras[index];
      if (isNaN(palabra) === false) {
        contador = contador + Number(palabra);
      }
    }
    return contador;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
