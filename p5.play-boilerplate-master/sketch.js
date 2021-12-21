var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor= "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}