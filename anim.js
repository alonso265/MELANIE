// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {text: "SUPER ESTRELLA", time: .5-3},
  { text: "super estrella", time: 10},
  { text: "me ve entrando en la disco y se me queda mirando", time: 10-18 },
  { text: "Creo que me ha conocido, sera uno mas de tantos", time: 20 },
  { text: "Mierda, quiza eres mi proximo error (mi proximo error)", time: 23-28 },
  { text: "Estoy con mis amigas de reojo mirando", time: 30-33 },
  { text: "Te que da bien esa camisa de versace", time: 33-36 },
  { text: "Hoy vas a hacer mi proximo error (mi proximo error)", time: 38-42 },
  { text: "Y no se donde diablos se habra metido ", time: 44-47 },
  { text: "No esta en los baños ni en los pasillos", time: 47-50 },
  { text: "Fuck, esta en la barra y viene directo a mi", time: 51-55 },
  { text: "El me dice que quiere divertirse", time: 56-60 },
  { text: "Yo le digo que los rumores vuelan", time: 61-64 },
  { text: "El me dice que no le importa estar", time: 65-68 },
  { text: "Con una super estrella", time: 69-72 },
  { text: "Yo le digo ¿De donde tu ha salido? ", time: 73-76 },
  { text: "El me dice que quiere estar conmigo", time: 77-80 },
  { text: "Yo le digo que no es facil eanorarse ", time: 81-84 },
  { text: "De una super estrella", time: 85-89 },
  { text: "(SUPER ESTRELLA)", time: 100-104 },
  { text: "Aqui esta todo el mundo mirando", time: 105-108 },
  { text: "Vamos solos al baño", time: 109-112 },
  { text: "Y retomamos lo que estamos empesando", time: 113-116 },
  { text: "Solo quiero conocerte un poco mas", time: 117-120 },
  { text: "Supongo que no lo he pensado bien", time: 121-124 },
  { text: "Pero mañana seremos noticia en la TV", time: 125-128},
  { text: "Que seas tu a quien le cuente mis mentiras", time: 129-132 },
  { text: "Tatuarme tu apellido, querernos para toda la vida.", time: 133-136 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);