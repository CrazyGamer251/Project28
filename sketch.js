
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,Stone,Tree,Mango1,Mango2,Mango3,Mango4,Mango5,chain;

function preload()
{
	boy= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,500,800,20);
	Stone= new stone(120,350);
	chain = new SlingShot(Stone.body,{x:120, y:350});
	Tree= new tree(650,310,70,70);
	Mango1= new mango(500,300,10);
	Mango2= new mango(600,200,10);
	Mango3=new mango(700,300,10);
	Mango4= new mango(750,200,10);
	Mango5= new mango(650,250,10);

	Engine.run(engine);
  
}


function draw() {
  background(100);

 
 detectcollision(Stone,Mango1);
 detectcollision(Stone,Mango2);
 detectcollision(Stone,Mango3);
 detectcollision(Stone,Mango4);
 detectcollision(Stone,Mango5);
   
  	chain.display();
  	ground.display();
	Tree.display();
  	Stone.display();
  	Mango1.display();
	Mango2.display();
	Mango3.display();
	Mango4.display();
	Mango5.display();

	
  
  drawSprites();

  imageMode(CENTER);
  image(boy,200,430,250,300);

 
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
chain.fly();
}

function detectcollision(lstone,lmango){
	var distance = dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)
	if(distance <= 50){
	Body.setStatic(lmango.body,false);
	}
	}

function keyPressed(){
	if (keyCode === 32){
	Matter.Body.setPosition(Stone.body,{x:120,y:350});
	chain.attach(Stone.body);
	}
	} 