// Función para abrir el modal y mostrar la imagen
function abrirModal(imagen) {
  var modal = document.getElementById("modal");
  var modalImagen = document.getElementById("modal-imagen");

  // Configurar la imagen del modal
  modalImagen.src = imagen.src;
  modalImagen.alt = imagen.alt;

  // Mostrar el modal
  modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("modal");

  // Ocultar el modal
  modal.style.display = "none";
}
