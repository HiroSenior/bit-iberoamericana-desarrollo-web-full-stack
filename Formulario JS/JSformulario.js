let personas = [];

function capturarDatos() {
  let cedula = document.getElementById("cedula").value;
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let direccion = document.getElementById("direccion").value;
  let descripcion = document.getElementById("descripcion").value;

  if (
    cedula === "" ||
    nombre === "" ||
    apellidos === "" ||
    direccion === "" ||
    descripcion === ""
  ) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let persona = {
    cedula: cedula,
    nombre: nombre,
    apellidos: apellidos,
    direccion: direccion,
    descripcion: descripcion,
  };

  personas.push(persona);

  document.getElementById("formularioDatos").reset();

  console.log(personas);

 actualizarTabla(); 
  
}

function actualizarTabla() {
  let tabla = document.getElementById("tablaPersonas");

  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    let fila = tabla.insertRow(-1);

    let celdaCedula = fila.insertCell(0);
    let celdaNombre = fila.insertCell(1);
    let celdaApellidos = fila.insertCell(2);
    let celdaDireccion = fila.insertCell(3);
    let celdaDescripcion = fila.insertCell(4);

    celdaCedula.innerHTML = persona.cedula;
    celdaNombre.innerHTML = persona.nombre;
    celdaApellidos.innerHTML = persona.apellidos;
    celdaDireccion.innerHTML = persona.direccion;
    celdaDescripcion.innerHTML = persona.descripcion;
  }
}

function busquedaCedula() {
    let cedulaBuscar = document.getElementById("busqueda").value;

    let index = personas.findIndex(function(persona) {
        return persona.cedula === cedulaBuscar;
    });

    if (index !== -1) {
        let personaEncontrada = personas[index];
        alert("Persona encontrada:\nNombre: " + personaEncontrada.nombre + "\nApellidos: " + personaEncontrada.apellidos);
    } else {
        alert("No se encontró ninguna persona con la cédula ingresada.");
    }
}
