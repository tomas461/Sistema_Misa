document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página

    // Obtener valores
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    // Mostrar en consola
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);

    // Ejemplo: mostrar en pantalla
    alert("Datos enviados:\n" + nombre + " " + apellido);

    // Redirigir a otra página
    window.location.href = "subpagina.html";
});