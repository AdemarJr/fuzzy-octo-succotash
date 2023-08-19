let estradaImg
let atorImg
let carro01
let carro02
let carro03
let carro04
let carro05
let carro06
let somTrilha
let somColisao
let somPonto



function preload(){
  estradaImg = loadImage('img/estrada.png')
  atorImg = loadImage('img/ator-1.png')
  carro01 = loadImage('img/carro-1.png')
  carro02 = loadImage('img/carro-2.png')
  carro03 = loadImage('img/carro-3.png')
  carro04 = loadImage('img/carro-4.png')
  carro05 = loadImage('img/carro-5.png')
  carro06 = loadImage('img/carro-6.png')
  somTrilha = loadSound('sons/trilha.mp3')
  somColisao = loadSound('sons/colidiu.mp3')
  somPonto = loadSound('sons/pontos.wav')

  imgCarros = [carro01, carro02, carro03, carro04, carro05, carro06];
}