
var movingRect, fixedRect;



function setup() {
  createCanvas(1600,800);

  fixedRect = createSprite(400,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

   if(movingRect.x - fixedRect.x < movingRect.width/2  + fixedRect.width/2
    &&fixedRect.x - movingRect.x < movingRect.width/2  + fixedRect.width/2 ){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
     
   }
   else{
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "green";
   }

  drawSprites();
}