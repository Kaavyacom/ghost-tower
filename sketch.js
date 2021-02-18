var tower,towerimg
var door,doorimg,doorsGroup;
var climber,climberimg,climbersGroup;
var ghost,ghostimg
function preload(){
towerimg=loadImage("tower.png");
doorimg=loadImage("door.png");
climberimg=loadImage("climber.png")
ghostimg=loadImage("ghost-standing.png")
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300)
tower.addImage(towerimg);
tower.velocityY=2
doorsGroup=new Group();
climbersGroup= new Group();
ghost=createSprite(200,200,50,50);
ghost.addImage(ghostimg)
ghost.scale=0.3
}
function draw(){
background(0);
if(tower.y>500){
tower.y=300;
}
spawnDoors();
drawSprites();
}
function spawnDoors(){
if(frameCount%240===0){
var door=createSprite(200,-50);
door.addImage(doorimg);
door.x = Math.round(random(150,400));
door.velocityY=1
  
var climber=createSprite(200,10);
climber.addImage(climberimg)
climber.x=door.x;
climber.velocityY=1
doorsGroup.add(door);
climbersGroup.add(climber);
}
}