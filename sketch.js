
function setup() {
  createCanvas(800, 500);
  somTrilha.loop();
}

function draw() {
  background(estradaImg);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentarAtor();
  voltaCarro();
  passouCarro();
  verificaColisao();
  meusPontos();
  marcaPontos();
}