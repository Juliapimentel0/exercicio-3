let cor;
let posicaoHorizontal;

function setup() {
  createCanvas(500, 500);
  background("white");
  cor= "blue";
  posicaoHorizontal=45;
}
function draw () {
 fill (cor)
  stroke ("blue")
  rect (posicaoHorizontal,67,200, 200);
  if(mouseX < posicaoHorizontal){
posicaoHorizontal--;}

if(mouseX > posicaoHorizontal){
posicaoHorizontal++;}
 
  if (mouseIsPressed){
   cor = color (random(0,255),random(0,255),random(0,255));
  }
  
  
  

}