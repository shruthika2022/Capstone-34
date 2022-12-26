
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fuzz, happyfuzz, dizzyfuzz;
var apple, apple2, apple3, apple4, apple5, apple6
var rock, rock2;
var score

function preload(){

  fuzz = loadImage("happy.png");
  happyfuzz = loadImage("eatinghappy.png");
  dizzyfuzz = loadImage("dizzy.png");
  apple = loadImage("apple.png");
  apple2 = loadImage("apple.png");
  apple3 = loadImage("apple.png");
  apple4 = loadImage("apple.png");
  apple5 = loadImage("apple.png");
  apple6 = loadImage("apple.png");
  rock = loadImage("rock.png");
  rock2 = loadImage("rock.png");
}

function setup() {
  createCanvas(900,1000);

  engine = Engine.create();
  world = engine.world;

  rock = createImg("rock.png")
  rock.position(450,500)

  rock2 = createImg("rock.png")
  rock2.position(100,100)

  fuzz = Bodies.circle(450,980)
  apple = Bodies.circle(100,250,70,70)
  apple2 = Bodies.circle(200,500,70,70)
  apple3 = Bodies.circle(555,275,70,70)
  apple4 = Bodies.circle(325,112,70,70)
  apple5 = Bodies.circle(300,290,70,70)
  apple6 = Bodies.circle(500,600,70,70)
 
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites();

  fuzz.velocityX(3);
  text("Score:"+score,100,900);
  textSize(10);

  image(fruit,fruit.positionX,fruit.positionY);
  image(apple,apple.positionX,apple.positionY);
  image(apple2,apple2.positionX,apple2.positionY);
  image(apple3,apple3.positionX,apple3.positionY);
  image(apple4,apple4.positionX,apple4.positionY);
  image(apple5,apple5.positionX,apple5.positionY);
  image(apple6,apple6.positionX,apple6.positionY);



  if(fuzz.mouseClicked()){
    jump();
  }
  
  if(fuzz.isTouching(apple)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple);
    score = score+1
  }

  if(fuzz.isTouching(apple2)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple2);
    score = score+1
  }

  if(fuzz.isTouching(apple3)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple3);
    score = score+1
  }

  if(fuzz.isTouching(apple4)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple4);
    score = score+1
  }

  if(fuzz.isTouching(apple5)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple5);
    score = score+1
  }

  if(fuzz.isTouching(apple6)){
    fuzz.changeImage(happy)
    World.remove(engine.world,apple5);
    score = score+1
  }

  if(fuzz.isTouching(rock || rock2)){
    fuzz.changeImage(dizzy)
    gameOver();
  }

  if(score==6){
  apple.visible = false;
  apple2.visible = false;
  apple3.visible = false;
  apple4.visible = false;
  apple5.visible = false;
  apple6.visible = false;

  rock.visible = false;
  rock2.visible = false;

  text("YOU WON!")
  textSize(20);
  }
}

function jump(){
  
  fuzz.setVelocity(0)
  Matter.Body.applyForce(fuzz,{x:0, y:0},{x:0, y:2});
}

function gameOver(){
  apple.visible = false;
  apple2.visible = false;
  apple3.visible = false;
  apple4.visible = false;
  apple5.visible = false;
  apple6.visible = false;

  rock.visible = false;
  rock2.visible = false;

  text("GAME OVER")
  textSize(20);
}
