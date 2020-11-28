var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,100,50,20);
  movingRect = createSprite(100,50,50,20);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1 = createSprite (300,10,50,20);
  rect2 = createSprite (300,390,50,20);

  rect1.velocityY = 5;
  rect1.shapeColor = 'blue';
  rect2.velocityY = -5;
  rect2.shapeColor = 'red';
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }

    bounceOff(rect1,rect2);
  
  drawSprites();
}