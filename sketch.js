var arrowImg;
var backgroundImg;
var blueBimg;
var bowImg;
var greenBimg;
var pinkBimg;
var redBimg;
var bow,arrow,background;
var redballoon,pinkballoon,greenballoon,blueballoon;
var score;
var redG,blueG,greenG,pinkG;
var arrowG;

function preload(){
  arrowImg=loadImage("arrow0.png");
  backgroundImg=loadImage("background0.png");
  blueBimg=loadImage("blue_balloon0.png");
  bowImg=loadImage("bow0.png");
  greenBimg=loadImage("green_balloon0.png");
  pinkBimg=loadImage("pink_balloon0.png");
  redBimg=loadImage("red_balloon0.png");
}

function setup(){
  createCanvas(600,500);

  background=createSprite(0,0,600,600);
  background.addImage(backgroundImg);
  background.scale=2.5;

  bow=createSprite(480,220,20,50);
  bow.addImage(bowImg);
  bow.scale=1;

  score=0;
  redG=new Group();
  blueG=new Group();
  greenG=new Group();
  pinkG=new Group();
  arrowG=new Group();
 
}

function draw(){
  background.velocityX=-3;

  if(background.x<0){
    background.x=background.width/2;
  }
  
  bow.y=World.mouseY;
  if(keyDown("space")){
    createArrow();
  }
  var d=Math.round(random(1,4));
  if(frameCount%100===0){

  switch(d){
    case 1:redBalloon();
    break;
    case 2:blueBalloon();
    break;
    case 3:greenBalloon();
    break;
    case 4:pinkBalloon();
    break;
    default:break;
  }
}
  if(arrowG.isTouching(redG)){
    redG.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }

  if(arrowG.isTouching(blueG)){
    blueG.destroyEach();
    arrowG.destroyEach();
    score=score+2;
  }

  if(arrowG.isTouching(greenG)){
    greenG.destroyEach();
    arrowG.destroyEach();
    score=score+3;
  }

  if(arrowG.isTouching(pinkG)){
    pinkG.destroyEach();
    arrowG.destroyEach();
    score=score+4;
  }

  drawSprites();
  textSize(20);
  fill("black")
  text("SCORE: "+score,480,40);
  
}

function createArrow(){
  arrow=createSprite(100,100,60,10);
  arrow.addImage(arrowImg);
  arrow.scale=0.3;
  arrow.x=445;
  arrow.y=bow.y;
  arrow.velocityX=-4;
  arrow.lifetime=100;
  arrowG.add(arrow);
}

function redBalloon(){
  var red=createSprite(0,0,10,10);
  red.y=Math.round(random(30,380));
  red.addImage(redBimg);
  red.scale=0.1;
  red.velocityX=3;
  red.lifetime=150;
  redG.add(red);
}

function blueBalloon(){
  var blue=createSprite(0,0,10,10);
  blue.y=Math.round(random(30,380));
  blue.addImage(blueBimg);
  blue.scale=0.1;
  blue.velocityX=3;
  blue.lifetime=150;
  blueG.add(blue);
}

function greenBalloon(){
  var green=createSprite(0,0,10,10);
  green.y=Math.round(random(30,380));
  green.addImage(greenBimg);
  green.scale=0.1;
  green.velocityX=3;
  green.lifetime=150;
  greenG.add(green);
}

function pinkBalloon(){
  var pink=createSprite(0,0,10,10);
  pink.y=Math.round(random(30,380));
  pink.addImage(pinkBimg);
  pink.scale=1;
  pink.velocityX=3;
  pink.lifetime=150;
  pinkG.add(pink);
}

