const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground; 
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    
    box1 = new Box(1000, 350, 50, 50);
    box2 = new Box(1000, 320, 50, 50);
    box3 = new Box(880, 350, 50, 50);
    box4 = new Box(880, 320, 50, 50);
    box5 = new Box(940, 240, 50, 50);

    log1 = new Log(940, 330, 180, PI/2);
    log2 = new Log(940, 280, 180, PI/2);
    log3 = new Log(990, 200, 125, -(PI/7));
    log4 = new Log(890, 200, 125, PI/7);

    pig1 = new Pig(940, 320);
    pig2 = new Pig(940, 350);


    bird = new Bird(400, 150);

}

function draw(){
    background(0);
    
    Engine.update(engine);

    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();

    bird.display();
}