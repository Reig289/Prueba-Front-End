// Constante del Numero de Estrellas
const numStars = 100;

// Agregar los Divs en las posiciones que devuelve la funcion
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "stars";
  var rxry = getPosition();
  star.style.top = rxry[0] + 'px';
  star.style.left = rxry[1] + 'px';
  document.body.append(star);
}

// Funcions para generar posiciones aletorias en base a la ventana
function getPosition() {  
  let y = window.innerWidth;
  let x = window.innerHeight;
  let rx = Math.floor(Math.random()*x);
  let ry = Math.floor(Math.random()*y);
  return [rx,ry];
}

