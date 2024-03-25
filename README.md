# Contador de Palabras 
### Aspectos Generales 

##### Esta aplicación Web fue diseñada con el propósito principal de poder contar diferentes combinaciones de caracteres, palabras, números, suma de caracteres y promedio de longitud. 


### El Proyecto 
##### Las usuarias podar analizar el texto que escriban en el recuadro del centro de la pantalla, el cual se limpiara completamente, en el momento en que presionen el botón "Limpiar métricas". Este boton reiniciará no solo el imput, sino que también los contadores. Para lograr todo lo anterior se utilizó HTML. JavaScript y CSS. 

### Funcionalidades 
##### La aplicación web permite que la usuaria escriba en el cuadro de texto.
##### La aplicación calcula en tiempo real los caracteres que la usuaria esta esta escribiendo en el cuadro de texto, para finalmente mostrarlo en cada una de las siguientes métricas:

- Recuento de palabras 
- Recuento de Caracteres 
- Recuento de caracteres excluyendo espacios y signos de puntuación
- Recuento de números
- Suma total de números
- Longitud media de las palabras

### Uso de HTML

-  La aplicación tiene un encabezado conformado por un header que es padre de un h1 con el titulo "**Analizador de texto**"
- La aplicación usa un textarea con un el atributo name en el valor user-input para permitir a la usuaria ingresar un texto.
- La aplicación usa un ul con 6 hijos li, uno para mostrar cada métrica.
- La aplicación tiene un pie de página conformado por un footer  que es padre de un p que tiene como texto "Desarrollado por Camila Rivas Nahuel" 
- La aplicación usa un button con el atributo id en el valor reset-button para permitir a la usuaria, mediante un clic, limpiar el contenido de la caja de texto.

### Uso de CSS

#### Uso de selectores de CSS

-  La aplicación usa selectores CSS de tipo para darle estilo al header y al footer.
- La aplicación usa selectores CSS de class para darle estilo a los li descrito anteriormente.
- La aplicación usa selectores de atributo para darle estilo al textarea usando el atributo name.
- La aplicación usa selectores CSS de ID para darle estilo al button con el atributo id en el valor reset-button.
- La aplicación 

### Web APIs

#### Uso de selectores del DOM

-  La aplicación usa el selector del DOM querySelector.

-  La aplicación usa el selector del DOM getElementById.

###### La aplicación registra un Event Listener para escuchar el evento input del textarea para actualizar las métricas cuando se escriba en el cuadro de texto.

###### La aplicación registra un Event Listener para escuchar el evento click del button que limpia el contenido de la caja de texto.

### Uso de JavaScript

###### La aplicación convierte valores tipo string a tipo number.

###### La aplicación usa métodos para manipular strings como split, replace.

###### La aplicación declara variables con let y const

###### La aplicación usa if, else para evaluar condiciones.

###### La aplicación usa for para crear un bucle.

### Funciones (params, args, return)

###### Contiene un método getWordCount para calcular el recuento de palabras de un texto.

###### Contiene un método getCharacterCount para calcular el recuento de caracteres de un texto.

###### Contiene un método getCharacterCountExcludingSpaces para calcular el recuento de caracteres excluyendo espacios y signos de puntuación de un texto.

###### Contiene un método getNumbersCount para contar cúantos números hay en un texto.

###### Contiene un método getNumbersSum para la suma longitud media de los números en un texto.

###### Contiene un método getAverageWordLength para calcular la longitud media de las palabras en un texto.
