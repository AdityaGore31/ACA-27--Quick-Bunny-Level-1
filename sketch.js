function preload(){
}


function setup(){
  createCanvas(700,650);
  edge = createEdgeSprites();
  player = createSprite(100,600,50,50);
  player.shapeColor = "white";
  target = createSprite(600,100,80,80);
  target.shapeColor = "orange";
  obs1 = createSprite(390,280,200,35);
  obs2 = createSprite(340,380,200,35);
  obs3 = createSprite(100,280,200,35);
  obs4 = createSprite(50,380,200,35);
  obs5 = createSprite(670,280,200,35);
  obs6 = createSprite(630,380,200,35);
  obs1.shapeColor = "red";
  obs2.shapeColor = "red";
  obs3.shapeColor = "red";
  obs4.shapeColor = "red";
  obs5.shapeColor = "red";
  obs6.shapeColor = "red";
}


function draw(){
  background("green");
  player.bounceOff(edge[0]);
  player.bounceOff(edge[1]);
  player.bounceOff(edge[2]);
  player.bounceOff(edge[3]);

  if(keyDown("up")){
    player.y=player.y-5
  }

  if(keyDown("down")){
    player.y=player.y+5
  }

  if(keyDown("left")){
    player.x=player.x-5
  }

  if(keyDown("right")){
    player.x=player.x+5
  }

  if(player.isTouching(obs1)){
    text("YOU LOSE! Retry",400,100)
  }

  if(player.isTouching(obs2)){
    text("YOU LOSE! Retry",400,100)
  }
  
  if(player.isTouching(obs3)){
    text("YOU LOSE! Retry",400,100)
  }

  if(player.isTouching(obs4)){
    text("YOU LOSE! Retry",400,100)
  }

  if(player.isTouching(target)){
    text("YOU WON!",400,100);
  }

  drawSprites();
}