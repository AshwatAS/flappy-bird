const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
var engine,world,canvas,rand,rand2,rand3;
var pillars=[];
/*function preload(){
  birdIMG=loadImage("fbird.png");
}*/

//setup
function setup() {
//canvas
  canvas=createCanvas(600,400);

//engine
  engine=Engine.create();

//world
  world=engine.world;

//random variables
  ground=new Ground(300,400,6000,10);
  rand=Math.round(random(630,1080));
  rand2=Math.round(random(300,400));
  rand3=Math.round(random(30,300));
  pillar=new Pillar(300,340,20,80);
  for(i=0;i<=30;i++){
    pillars[i]=new Pillar(rand,rand2,20,rand3);
  }

//bird
  bird=new Bird(50,200,30,30);
  keyPressed(); 
}

//draw
function draw() {

//background
  background(0);
  Engine.update(engine); 

//displaying the bird
  bird.display();
  bird.check();

//displaying pillars under
  for (i=0;i<=30;i++){
    pillars[i].velocity();
    pillars[i].display();
  }
  pillar.velocity();
  pillar.display();
  ground.display();
  drawSprites();
}

//keypressed function to control the bird
function keyPressed(){
  if(keyCode==32){
    bird.update();
  }
}