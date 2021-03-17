var fixedRect,movingRect,rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  rect1 = createSprite(100,200,50,50);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(500,200,50,50);
  rect2.shapeColor = "green";
  rect2.debug = true;


  movingRect = createSprite(400,200,80,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(collisionMaster(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}

