
var ship;
var sea;
var shipImg;
var seaImg
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
  
  }

function setup(){
  sea = createSprite (200,200,200,200);
  sea.addImage("bground",seaImg);
  sea.scale=1;

  ship = createSprite (150,300,200,200);
  ship.addAnimation ("movingShip",shipImg);
  ship.scale=0.25;
}
  

function draw() {
 
  background(220);
  drawSprites();
  

}
