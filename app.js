// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//solucion del desafio......

// Array con todos los nombres ingresados
let datosJugadores = [];
// Lista de nombres disponibles para elegir sin repetir
let nombresDisponibles = [];

function asignarTexto() {
  // Captura la entrada de texto Input
  let validarTexto = document.getElementById("amigo");
  // con la funcion thim elimina los espacios
  let texto = validarTexto.value.trim();

  // Expresión regular para evitar ingreso no permitidos en el juego: Solo letras, tildes y espacios
  let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  // Validar que el campo no esté vacío
  if (texto === "") {
    alert(" ERROR: Por favor, ingrese un nombre válido. ");
    //return;
    return null;
  }

  // Validar que solo contenga letras
  if (!soloLetras.test(texto)) {
    alert(
      " ERROR: Solo se permiten letras. No ingrese números ni caracteres especiales. "
    );
    return null;
  }

  // Verificar que el nombre no esté repetido en la lista original
  if (datosJugadores.includes(texto)) {
    alert(" Este nombre ya está en la lista. ");
    return null;
  }

  // Agregar el nombre al array
  datosJugadores.push(texto);
  // También lo agregamos a la lista de nombres disponibles
  nombresDisponibles.push(texto);
  // Limpiar entrada de texto (input)
  validarTexto.value = "";

  console.log(" Se agregó el nombre: ", texto);
  mostrarLista();
}

function agregarAmigo() {
  let texto = asignarTexto();
}

function mostrarLista() {
  // capturar la lista de los nombres
  let lista = document.getElementById("listaAmigos");
  // Limpiar lista antes de actualizar
  lista.innerHTML = "";

  // Recorrer el array y agrega nombres a la lista
  datosJugadores.forEach((nombre, index) => {
    let item = document.createElement("li"); // Crear una lista  <li>
    item.textContent = `${index + 1}: ${nombre}`; // nos envia como parametros un Número + Nombre
    lista.appendChild(item); // Agregarlo a la lista
  });
}

// Función para elegir un nombre al azar sin repetir
function sortearAmigo() {
  if (nombresDisponibles.length === 0) {
    alert(" Todos los nombres han sido seleccionados. Reiniciando lista... ");
    // llamamos a la funcion para reiniciar la lista
    //reiniciarPagina();
    //nombresDisponibles = [...datosJugadores]; // Restauramos los nombres disponibles

    reiniciarValores();
    return;
  }
  //genero el numero aleatorio
  let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
  // Extrae y elimina el nombre
  let nombreElegido = nombresDisponibles.splice(indiceAleatorio, 1)[0];

  // Mostrar el nombre seleccionado en pantalla
  document.getElementById(
    "resultado"
  ).textContent = ` El amigo secreto asignado para ti es: ${nombreElegido} `;
}

/*
// Función para reiniciar la página completamente
function reiniciarPagina() {
  setTimeout(() => {
    location.reload(); // Recarga la página
  }, 2000); // Espera 2 segundos antes de recargar
}
*/

function reiniciarValores() {
  // Vaciar lista de jugadores
  datosJugadores = [];
  // Vaciar nombres disponibles
  nombresDisponibles = [];

  // Limpiar la lista en pantalla
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").textContent = "";

  console.log(" Todos los valores han sido reiniciados.");
}
