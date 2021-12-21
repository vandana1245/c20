var movingRect, fixedRect;
var gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor= "green";
  movingRect.debug = true;

  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(300,100,50,50);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(500,100,50,50);
  gameObj3.shapeColor = "green";

  gameObj4 = createSprite(700,100,50,50);
  gameObj4.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObj3)) {
    movingRect.shapeColor = "red";
    gameObj3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObj3.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(obj1, obj2) {
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {
    return true;
  }
  else {
    return false;
  }
}