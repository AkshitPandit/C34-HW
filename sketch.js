const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var canvasmouse;
var mConstraint;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var roof;

function preload(){
  
}

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options={
    mouse: canvasmouse
}

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  var pendulumDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	pendulum1 = new Pendulum(posX - pendulumDiameter*2, posY, pendulumDiameter);
	pendulum2 = new Pendulum(posX - pendulumDiameter,posY, pendulumDiameter);
	pendulum3 = new Pendulum(posX,posY,pendulumDiameter);
	pendulum4 = new Pendulum(posX +  pendulumDiameter, posY, pendulumDiameter);
	pendulum5 = new Pendulum(posX + pendulumDiameter * 2, posY, pendulumDiameter);
	
	roof = new Roof(width/2, height/4, 250, 15);

	sling1 = new Sling(pendulum1.body,roof.body,-pendulumDiameter*2,0,"#FFFFFF");
	sling2 = new Sling(pendulum2.body,roof.body,-pendulumDiameter*1,0,"#FFFFFF");
	sling3 = new Sling(pendulum3.body,roof.body,0,0,"#FFFFFF"); 
 	sling4 = new Sling(pendulum4.body,roof.body,pendulumDiameter*1,0,"#FFFFFF"); 
	sling5 = new Sling(pendulum5.body,roof.body,pendulumDiameter*2,0,"#FFFFFF");

  Engine.run(engine);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  roof.display();
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY})
}
