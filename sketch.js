var wall,bullet,thickness,speed,weight;

function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet =createSprite(80,200,100,10);
  bullet.velocityX=speed;
  wall=createSprite(700,200,thickness,height/2);
 
}

function draw() {
  background(0); 
  if(wall.x-bullet.x<=(bullet.width+wall.width)/2){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   //var damage=0.5
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
  }

  drawSprites();
}