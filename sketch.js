const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,500,15);
    rubber2=new Rubber(605,500,15);
    rubber3=new Rubber(610,510,15);
    rubber4=new Rubber(615,510,15);
    rubber5=new Rubber(620,520,15);
    rubber6=new Rubber(625,520,15);
    rubber7=new Rubber(630,530,15);
    rubber8=new Rubber(635,530,15);
    rubber9=new Rubber(640,540,15);
    rubber10=new Rubber(645,550,15);
    stone=new Stone(600,500);
    iron =new Iron(500,400);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    stone.display();
    iron.display();
 
}