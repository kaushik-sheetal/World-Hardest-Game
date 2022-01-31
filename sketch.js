var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12
var p1
var dong1, dong2, dong3, dong4
var bunny_img

function preload() {
 bunny_img = loadImage("bunny1.png")
}

function setup() {
  createCanvas(400, 400);
   wall1 = createSprite(190,120,250,3);
   wall2 = createSprite(190,260,250,3);
   wall3 = createSprite(67,145,3,50);
   wall4 = createSprite(67,235,3,50);
   wall5 = createSprite(313,145,3,50);
   wall6 = createSprite(313,235,3,50);
   wall7 = createSprite(41,170,50,3);
   wall8 = createSprite(41,210,50,3);
   wall9 = createSprite(337,210,50,3);
   wall10 = createSprite(337,170,50,3);
   wall11 = createSprite(18,190,3,40);
   wall12 = createSprite(361,190,3,40);

   p1 = createSprite(40,190,13,13)
   p1.addImage(bunny_img)
   p1.scale = 0.2
   
   dong1 = createSprite(100,130,10,10);
  dong1.shapeColor = "red";
   dong2 = createSprite(215,130,10,10);
  dong2.shapeColor = "red";
   dong3 = createSprite(165,250,10,10);
  dong3.shapeColor = "red";
   dong4 = createSprite(270,250,10,10);
  dong4.shapeColor = "red";

  dong1.velocityY = 8;
  dong2.velocityY = 8;
  dong3.velocityY = -8;
  dong4.velocityY = -8;

  
  
  
}

function draw() {
  background(0);
 
  

 if(keyDown("left")){
    p1.velocityX = -4
  }
  if(keyDown("right")){
    p1.velocityX = 4
  }

  
  p1.collide(wall11)
  p1.collide(wall12)

  dong1.bounceOff(wall1)
  dong1.bounceOff(wall2)

 
  dong2.bounceOff(wall1)
  dong2.bounceOff(wall2)

  
  dong3.bounceOff(wall1)
  dong3.bounceOff(wall2)

  
  dong4.bounceOff(wall1)
  dong4.bounceOff(wall2)


 
  if(
     p1.isTouching(dong1)||  
     p1.isTouching(dong2)||
     p1.isTouching(dong3)||
     p1.isTouching(dong4))
  {
     p1.x = 40;
     p1.y = 190;
  }

  drawSprites();
}

