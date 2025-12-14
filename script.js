/* script.js - LA LÓGICA DEL MEME */

// 1. Saludo inicial (Solo una vez)
window.onload = function() {
    console.log("Bienvenido a la Web 4.0");
    // Eliminamos el alert molesto para que no sea tan agresivo
    // Si quieres uno suave:
    // alert("⚠️ CUIDADO: Exceso de estilo detectado ⚠️");
};

// 2. Título de la pestaña "Celoso"
// Cuando el usuario cambia de pestaña, el título cambia
let tituloOriginal = document.title;
document.addEventListener("visibilitychange", function() {
    if (document.hidden){
        document.title = "😭 ¡No te vayas! 😭";
    } else {
        document.title = tituloOriginal;
    }
});

// 3. Rastro del Ratón (Emojis que caen suavemente)
document.addEventListener('mousemove', function(e) {
    // Creamos un elemento cada cierto tiempo para no saturar
    if (Math.random() < 0.1) { // Solo el 10% de las veces que se mueve
        let emoji = document.createElement('span');
        const listaEmojis = ['🔥', '✨', '🗿', '🅱️', '🤡', '💀'];
        emoji.innerText = listaEmojis[Math.floor(Math.random() * listaEmojis.length)];
        
        emoji.style.position = 'absolute';
        emoji.style.left = e.pageX + 'px';
        emoji.style.top = e.pageY + 'px';
        emoji.style.fontSize = '20px';
        emoji.style.pointerEvents = 'none'; // Click a través
        emoji.style.transition = 'top 1s ease-in, opacity 1s ease-out';
        
        document.body.appendChild(emoji);

        // Animación simple con JS
        setTimeout(() => {
            emoji.style.top = (e.pageY + 50) + 'px'; // Cae 50px
            emoji.style.opacity = '0';
        }, 50);

        // Limpieza
        setTimeout(() => {
            emoji.remove();
        }, 1000);
    }
});

// 4. Función sorpresa al hacer click en cualquier sitio
document.body.addEventListener('click', function(e) {
    // Si no es un enlace, reproducir un sonido "bonk" o efecto visual
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        let texto = document.createElement("div");
        texto.innerText = "BONK!";
        texto.style.position = "absolute";
        texto.style.left = e.pageX + "px";
        texto.style.top = e.pageY + "px";
        texto.style.color = "yellow";
        texto.style.fontWeight = "bold";
        texto.style.fontFamily = "Comic Sans MS";
        texto.style.textShadow = "2px 2px black";
        texto.style.pointerEvents = "none";
        document.body.appendChild(texto);
        
        setTimeout(() => texto.remove(), 500);
    }
});

// 5. Función para el botón "No pulsar" (ahora es más suave)
function modoDiscoteca() {
    alert("Te dije que no... ahora aguanta.");
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/26BRyO7kL4Bf1K5EA/giphy.gif')"; // GIF de fondo
    
    // Solo cambia los colores de los bordes, no flashes epilépticos
    let elementos = document.querySelectorAll("div, img, a");
    elementos.forEach(el => {
        el.style.transform = "rotate(180deg)";
        el.style.transition = "transform 1s";
    });
}