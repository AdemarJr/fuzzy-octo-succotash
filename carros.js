//código do carro

let xCarros = [820, 820, 820, 0, 0, 0];
let yCarros = [68, 116, 205, 390, 255, 343]; 
let velocidade = [2, 7.5, 4, 8.6, 3.5, 6.2];
let larguraCarro = 65;
let alturaCarro = 35;


function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro)
  }

}

function  movimentaCarro(){
  for(let i = 0; i < imgCarros.length; i++){
      xCarros[i] -= velocidade[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    if(passouCarro(xCarros[i])){
          xCarros[i] = 810
    }
  }
}

function passouCarro(xCarro){
  return xCarro < - 50
}