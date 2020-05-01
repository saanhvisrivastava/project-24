const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
   
    ball=new Ball(200,350);
    tanker=new Tanker(200,385,100,30);
    tanker2=new Tanker(200,365,100,30);
    tanker3=new Tanker(240,320,80,30);
   
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    
    tanker3.display();
   ball.display();
   tanker.display();
   tanker2.display();
  
}