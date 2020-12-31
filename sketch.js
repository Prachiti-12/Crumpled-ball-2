
var box1,boxImage;
var  ball,ballImage;


function preload(){

ballImage=loadImage("paper.png");
boxImage=loadImage("dustbin.png");

}
function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	box1=createSprite(1000,540,150,10);
	box1.shapeColor=('white');
	box1.addImage(boxImage);


	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color('yellow')
	
}


var ball_options ={
	isStatic:false, 
	restitution: 1.3,
	friction:0.5,
	density:1.2
}

ball = Bodies.circle(200,100,20, ball_options);
World.add(world,ball);
ball.shapeColor=('pink');
ball.addImage(ballImage);


console.log(ground);


function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);

}

function keyPressed (){
if (keyCode===UP_ARROW){

	MediaStreamTrackEvent.Body.applyForce(ballOject.body.position,{x:85,y:-85});
}

}




