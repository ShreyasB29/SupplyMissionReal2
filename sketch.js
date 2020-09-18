const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, crumpled;
var bar,lbar,rbar,dustbin;

function preload(){

   dustbin=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,500);
	ground = new Ground(400,690,800,20);
	bar = createSprite(700,580,170,200);
	bar.addImage(dustbin);
	bar.scale=0.7;
	lbar=new Bars(625,580,20,200);
	rbar=new Bars(775,580,20,200);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightGrey"); 
  lbar.display();
  rbar.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-220});

	}

}

