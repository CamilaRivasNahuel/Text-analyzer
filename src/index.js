import analyzer from "./analyzer.js";
//el elemento html textarea
const cajaPalabra = document.querySelector("textarea");
function instruccionesEjecucionIngresaTexto() {
  //aca tenemoss el texto que el usuario ingreso
  const textoUsuario = cajaPalabra.value; // Atributo del elemento que devuelve el texto ingresado x el usuario
  //el elemento html que tiene el id contador
  const contadorElemento = document.querySelectorAll('li')[0];
  //atributo textcontent es el texto de la etiqueta
  contadorElemento.textContent =
      "Caracteres: " + analyzer.getCharacterCount(textoUsuario);
  //el elemento html que tiene el id contador-sin-espacios
  const contadorSinEspacio = document.querySelectorAll('li')[1];
  //el atributo del elemento que me permite cambiar el contenido de la etiqueta
  contadorSinEspacio.textContent =
    "contador sin espacios: " +
    analyzer.getCharacterCountExcludingSpaces(textoUsuario);

  const contadorPalabras = document.querySelectorAll('li')[2];
  contadorPalabras.textContent =
    "Palabras: " + analyzer.getWordCount(textoUsuario);

  const contadorNumeros = document.querySelectorAll('li')[3];
  contadorNumeros.textContent =
    "Numeros: " + analyzer.getNumberCount(textoUsuario);

  const contadorSuma = document.querySelectorAll('li')[4];
  contadorSuma.textContent =
    "Suma números: " + analyzer.getNumberSum(textoUsuario);

  const promedio = document.querySelectorAll('li')[5];
  promedio.textContent =
    "Promedio: " + analyzer.getAverageWordLength(textoUsuario);
} //
cajaPalabra.addEventListener("input", instruccionesEjecucionIngresaTexto);

function clickBotonLimpiar(){
  cajaPalabra.value= ""
  const contadorElemento = document.querySelectorAll('li')[0];
  contadorElemento.textContent = "Caracteres: "
  const contadorSinEspacio = document.querySelectorAll('li')[1];
  contadorSinEspacio.textContent = "contador sin espacios: " 
  const contadorPalabras = document.querySelectorAll('li')[2];
  contadorPalabras.textContent = "Palabras: "
  const contadorNumeros = document.querySelectorAll('li')[3];
  contadorNumeros.textContent = "Numeros: "
  const contadorSuma = document.querySelectorAll('li')[4];
  contadorSuma.textContent ="Suma Números: "
  const promedio = document.querySelectorAll('li')[5];
  promedio.textContent = "Promedio Longitud: "
}
const elementoHtmlButton = document.getElementById("reset-button")
elementoHtmlButton.addEventListener("click",clickBotonLimpiar)
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
