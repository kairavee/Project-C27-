const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.100

	Engine.run(engine);

	roof = new Roof(400,100,400,40);
	bob1 = new Bob(250,500,40);
	bob2 = new Bob(330,500,40);
	bob3 = new Bob(410,500,40);
	bob4 = new Bob(490,500,40);
	bob5 = new Bob(570,500,40);

	rope1 = new ChainClass(bob1.body,roof.body,-150,0);
	rope2 = new ChainClass(bob2.body,roof.body,-70,0);
	rope3 = new ChainClass(bob3.body,roof.body,10,0);
	rope4 = new ChainClass(bob4.body,roof.body,90,0);
	rope5 = new ChainClass(bob5.body,roof.body,170,0);
	
}

function draw() {
  rectMode(CENTER);
  background(150);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyDown(UP_ARROW))
	{
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
    }
} 