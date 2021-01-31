function setup() {
  createCanvas(800,400);
  drishti=createSprite(200,200,50,80); 
  abhimanyu=createSprite(400,200,80,50);
  drishti.shapeColor="green";
  abhimanyu.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  abhimanyu.x=mouseX;
  abhimanyu.y=mouseY; 
  if (isTouching(abhimanyu,drishti)){
  drishti.shapeColor="red";
  abhimanyu.shapeColor="red";
  }
  else {
  drishti.shapeColor="green";
  abhimanyu.shapeColor="green";
  }
}