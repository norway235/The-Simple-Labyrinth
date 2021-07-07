var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;

var door1, door2;

var invisibleDoor1, invisibleDoor2;

var topEdge, bottomEdge, rightEdge, leftEdge;

var key1, key2, key3, key4, keys;

var bowArrowImage, key0, minotaurImage;

var keysInInventory, bowArrowInInventory;

var wallGroup, keyGroup;

var player;

var gameState;

var minotaur;

gameState = "start";

var bowArrow, bowAndArrow;

var database;


function preload(){
  bowArrowImage = loadImage("unnamed2.png");
  key0 = loadImage("unnamed.png");
  minotaurImage = loadImage("4.png");
}



function setup(){
  createCanvas(600,600);

  database = firebase.database();

  player = createSprite(65, 30, 20, 20);
  player.shapeColor = "darkblue";

  console.log(gameState);

  key1 = createSprite(163, 78, 20, 20);
  key1.addImage(key0);
  key1.scale = 0.05;

  key2 = createSprite(113, 365, 20, 20);
  key2.addImage(key0);
  key2.scale = 0.05;

  key3 = createSprite(270, 185, 20, 20);
  key3.addImage(key0);
  key3.scale = 0.05;

  key4 = createSprite(450, 80, 20, 20);
  key4.addImage(key0);
  key4.scale = 0.05;

  bowArrow = createSprite(157, 350, 20, 20);
  bowArrow.addImage(bowArrowImage);
  bowArrow.scale = 0.07;

  minotaur = createSprite(85, 510, 50, 50);
  minotaur.addImage(minotaurImage);
  minotaur.scale = 0.13;
    
  keysInInventory = database.ref('keys');
  keysInInventory.on("value", function(data){
    keys = data.val();
  });

  bowArrowInInventory = database.ref('bowAndArrow');
  bowArrowInInventory.on("value", function(data){
    bowAndArrow = data.val();
  });

    
  wall1 = createSprite(40, 300, 10, 500);
  wall2 = createSprite(295, 465, 500, 10);
  wall3 = createSprite(315, 55, 450, 10);
  wall4 = createSprite(60, 110, 50, 10);
  wall5 = createSprite(140, 80, 10, 50);
  wall6 = createSprite(90, 140, 10, 70);
  wall7 = createSprite(65, 225, 55, 10);
  wall8 = createSprite(210, 150, 150, 10);
  wall9 = createSprite(185, 100, 100, 10);
  wall10 = createSprite(290, 80, 10, 50);
  wall11 = createSprite(290, 185, 10, 80);
  wall12 = createSprite(310, 185, 40, 10);
  wall13 = createSprite(375, 140, 10, 170);
  wall14 = createSprite(310, 100, 40, 10);
  wall15 = createSprite(195, 205, 120, 35);
  wall16 = createSprite(210, 270, 340, 10);
  wall17 = createSprite(375, 300, 10, 50);
  wall18 = createSprite(65, 325, 55, 10);
  wall19 = createSprite(310, 100, 40, 10);
  wall20 = createSprite(195, 200, 120, 25);
  wall21 = createSprite(400, 320, 50, 10);
  wall22 = createSprite(425, 296.5, 10, 57);
  wall23 = createSprite(90, 370, 10, 100);
  wall24 = createSprite(230, 325, 190, 10);
  wall25 = createSprite(230, 370, 190, 10);
  wall26 = createSprite(230, 415, 190, 10);
  wall27 = createSprite(134, 370, 10, 100);
  wall28 = createSprite(475, 235, 10, 365);
  wall29 = createSprite(320, 392.5, 10, 55);
  wall30 = createSprite(95, 555, 120, 10) 
  
  door1 = createSprite(320, 348, 10, 38);
  door1.shapeColor = 'brown';

  door2 = createSprite(150, 510, 10, 80);
  door2.shapeColor = 'brown';

  invisibleDoor1 = createSprite(330, 348, 10, 38);
  invisibleDoor1.visible = false;
  
  invisibleDoor2 = createSprite(160, 510, 10, 80);
  invisibleDoor2.visible = false;

  topEdge = createSprite(300, 0, 600, 1);
  topEdge.visible = false;
  bottomEdge = createSprite(300, 600, 600, 1);
  bottomEdge.visible = false;
  rightEdge = createSprite(0, 300, 1, 600);
  rightEdge.visible = false;
  leftEdge = createSprite(600, 300, 1, 600);
  leftEdge.visible = false;

  wallGroup = createGroup();

  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
  wallGroup.add(wall16);
  wallGroup.add(wall17);
  wallGroup.add(wall18);
  wallGroup.add(wall19);
  wallGroup.add(wall20);
  wallGroup.add(wall21);
  wallGroup.add(wall22);
  wallGroup.add(wall23);
  wallGroup.add(wall24);
  wallGroup.add(wall25);
  wallGroup.add(wall26);
  wallGroup.add(wall27);
  wallGroup.add(wall28);
  wallGroup.add(wall29);
  wallGroup.add(wall30)

}

function draw(){ 
  background("#e3b127");



  if (keyDown("space") && gameState === "start") {
    gameState = "play";
  }

  if (gameState === "play" || gameState === "battle") {
    if(keyDown("left")){
      player.x = player.x - 2;
      player.rotationSpeed = 20;
    }
    
    if(keyDown("down")){
      player.y = player.y + 2;
      player.rotationSpeed = 20;
    }
    
    if(keyDown("right")){
      player.x = player.x + 2;
      player.rotationSpeed = 20;
    }
    
    if(keyDown("up")){
      player.y = player.y - 2;
      player.rotationSpeed = 20;
    }
  }

  player.bounceOff(topEdge);
  player.bounceOff(bottomEdge);
  player.bounceOff(rightEdge);
  player.bounceOff(leftEdge);

  var updatedKeysVal = keys+1;
  var updatedKeysVal2 = keys-1;
  var updatedKeysVal3 = keys-2;

  
  if(player.isTouching(key1)){
    key1.destroy();
    update(updatedKeysVal);
  }
  if(player.isTouching(key2)){
    key2.destroy();
    update(updatedKeysVal);
  }
  if(player.isTouching(key3)){
    key3.destroy();
    update(updatedKeysVal);
  }
  if(player.isTouching(key4)){
    key4.destroy();
    update(updatedKeysVal);
  }
  if(player.isTouching(bowArrow)){
    bowArrow.destroy();
    updateCount(1);
  }
  
  if(player.isTouching(door1) && keys >= 1){
    door1.destroy();
    invisibleDoor1.destroy();
    update(updatedKeysVal2);
  }
  if(player.isTouching(door2) && keys >= 2){
    door2.destroy();
    invisibleDoor2.destroy();
    update(updatedKeysVal3);
    gameState = "battle";
  }

    if(player.isTouching(wallGroup)) {
      gameState = "end";
      
    }

  if(gameState === "start"){
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    key1.visible = false;
    key2.visible = false;
    key3.visible = false;
    key4.visible = false;
    player.visible = false;
    minotaur.visible = false;
    door1.visible = false;
    door2.visible = false;
    bowArrow.visible = false;
  } else {
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    wall21.visible = true;
    wall22.visible = true;
    wall23.visible = true;
    wall24.visible = true;
    wall25.visible = true;
    wall26.visible = true;
    wall27.visible = true;
    wall28.visible = true;
    wall29.visible = true;
    wall30.visible = true;
    key1.visible = true;
    key2.visible = true;
    key3.visible = true;
    key4.visible = true;
    player.visible = true;
    minotaur.visible = true;
    door1.visible = true;
    door2.visible = true;
    bowArrow.visible = true;
  }

  console.log(keys);

  if(keys < 1){
    player.bounceOff(door1);
  }
  if(keys < 2){
    player.bounceOff(door2);
  }

  stroke("black")
  fill("black")
  textSize(15);
  text("KEYS: "+keys, 340, 20)
  text("WEAPONS: "+bowAndArrow, 430, 20)

  
  if(gameState === "end" && keyDown("space")){
    gameState = "play";
    player.x = 65;
    player.y = 30;
  }


  if(gameState === "battle"){
    if(bowAndArrow < 0){
      gameState = "lost"
    }
    if(bowAndArrow > 0 && keyCode === 65){
      gameState = "won";
      updateCount(0);
    } else {
      setTimeout(() => {
        gameState = "lost";
      }, 2000);
    }
  }

  
  drawSprites();
  
  if(gameState === "end") {
    stroke("red");
    fill("red");
    textSize(30);
    text("You have lost", 212, 260);
    text("Press space to try again", 145, 300);
    update(0);
    updateCount(0);
  }

  

  if(gameState === "start"){
    stroke("darkblue");
    fill("darkblue");
    textSize(40);
    text("THE SIMPLE LABYRINTH", 60, 140);
    textSize(30);
    text("You must navigate the maze and find keys", 15, 230); 
    text("that open doors, behind which are weapons", 9, 260); 
    text("you can use to fight the Minotaur at the", 35, 290) 
    text("end of the maze", 180, 320);
    textSize(15)
    text("USE ARROW KEYS TO MOVE, A TO ATTACK", 125, 380)
    textSize(30)
    text("PRESS SPACE TO START", 100, 440)
  }

  if(gameState === "lost"){
    player.destroy();
    stroke("red");
    fill("red");
    textSize(30);
    text("You have lost the battle against the Minotaur", 4, 260);
  } 
  if(gameState === "won"){
    minotaur.destroy();
    stroke("blue");
    fill("blue");
    textSize(30);
    text("You have won!", 190, 260);
    throw new Error("Stop script");
  }
  if(player.isTouching(invisibleDoor1) && keys < 1){
    stroke("darkblue")
    fill("darkblue")
    textSize(30)
    text("You need at least one key to open this door", 10, 260);
  }
  if(player.isTouching(invisibleDoor2) && keys < 2){
    stroke("darkblue")
    fill("darkblue")
    textSize(30)
    text("You need at least two keys to open this door", 5, 260);
  }
  

}

function update(keyVal){
  database.ref('/').update({
    keys: keyVal
  });
}

function updateCount(bowArrowVal){
  database.ref('/').update({
    bowAndArrow: bowArrowVal
  });
}