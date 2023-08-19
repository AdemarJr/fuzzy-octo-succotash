
//Ator funcoes

let yAtor = 470;
let xAtor = 210;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(atorImg, xAtor, yAtor, 27, 27);
}

function movimentarAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
          yAtor += 3;
    }
  }
}

function verificaColisao(){
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diâmetro)
  for(let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], alturaCarro, larguraCarro, xAtor, yAtor, 20)
    if(colisao){
      voltarAtor();
      somColisao.play();
      if(pontos > 0){
        pontos -= 1;
      }
    }
  }
}

function podeSeMover(){
  return yAtor < 470;
}

function voltarAtor(){
  yAtor = 470
}

function meusPontos(){
  fill(color(225, 270, 0));
  textAlign(CENTER);
  textSize(30);
  text(pontos, width / 5, 10, 80);
}

function marcaPontos(){
  if(yAtor < 15){
    pontos += 1;
    somPonto.play();
     voltarAtor();
  }
}