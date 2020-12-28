var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 700,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(200,50, 40,60);
  box2 = createSprite(400,50, 40,60);

  result = addition(5,6);
  console.log(result);
  box1.velocityX=3;
  box2.velocityX=-3;
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 // box1.x = mouseX;
 // box1.y = mouseY;
if(isTouching(box1, box2)){
  box1.shapeColor = "red";
  box2.shapeColor = "red";
}else{
  box1.shapeColor = "green";
  box2.shapeColor = "green";
}
 
bounceOff(box1,box2)

  drawSprites();
}


