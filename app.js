// Obtiene los botones del DOM
const botonSimple = document.getElementById('vibrarBoton');
const botonPatron = document.getElementById('vibrarPatron');

// Comprueba si el navegador soporta la API de vibración
if ("vibrate" in navigator) {
  // Escucha el evento 'click' en el primer botón
  botonSimple.addEventListener('click', () => {
    // Vibrate por 200 milisegundos
    navigator.vibrate(200); 
    console.log("Vibrando por 200ms");
  });

  // Escucha el evento 'click' en el segundo botón
  botonPatron.addEventListener('click', () => {
    // Vibrate con un patrón:
    // 50ms vibra, 100ms pausa, 50ms vibra, 100ms pausa, 200ms vibra
    navigator.vibrate([50, 100, 50, 100, 200]);
    console.log("Vibrando con un patrón: [50, 100, 50, 100, 200]");
  });

} else {
  // Muestra un mensaje si la API no está soportada
  console.log("La API de vibración no es compatible con este navegador.");
}