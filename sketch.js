var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background,backgroundImage;

var obstacle;

var basket,basketImage;
var apple,appleImage,banana,bananaImage,grapes,grapesImage,mango,mangoImage,orange,orangeImage;
var stone,stoneImage;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

//localStorage["HighestScore"] = 0;

function preload(){
  backgroundImage = loadImage("forest.png");
  
  basketImage =   loadImage("Basket.png");

  appleImage   = loadImage("apple.png")
  bananaImage = loadImage("banana.png")
  grapesImage = loadImage("grapes.png");
  mangoImage = loadImage("mango.png");
  orangeImage = loadImage("orange.png");

  stoneImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(1200,1200);
  
 
 obstaclesGroup = new Group();
 cloudsGroup = new Group();
  
  basket = createSprite(50,1000,20,20);
  basket.addImage("basket1",basketImage);
  basket.scale = 0.3;
    
 // apple = createSprite(200,180,20,20);
  //apple.addImage("apple",appleImage);
  //apple.scale = 0.1;
 
  //banana = createSprite(110,180,20,20)
  //banana.addImage("banana",bananaImage);
  //  banana.scale = 0.1;
 
  //grapes = createSprite(290,180,20,20);
  //grapes.addImage("grapes",grapesImage);
  //grapes.scale = 0.2;

  //stone = createSprite(380,180,20,20);
  //stone.addImage("stone",stoneImage);
  //stone.scale = 0.1;

}
function draw() {
  //trex.debug = true;
  background(backgroundImage);
  

  fill ("black");
  textSize(30);
  text("Score: "+ score, 500,120);
  
  

  basket.x = World.mouseX;

  

 

 // if (gameState===PLAY){
    //score = score + Math.round(getFrameRate()/60);
    
  
    
  
    //if (background.x < 0){
      //background.x = background.width/2;
    //}
  //}
    //trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    
    
    //set velcity of each game object to 0
    //ground.velocityX = 0;
    //trex.velocityY = 0;
    //obstaclesGroup.setVelocityXEach(0);
    //cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    //trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    //obstaclesGroup.setLifetimeEach(-1);
    //cloudsGroup.setLifetimeEach(-1);
    //
    //if(mousePressedOver(restart)) {
    //  reset();
    //}

    if(obstaclesGroup.isTouching(basket)){
      score = score+20;
   }



    
    drawSprites();
  }
  

  function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var stone = createSprite(600,120,40,10);
    stone.x = Math.round(random(20,1100));
    stone.addImage(stoneImage);
    stone.scale = 0.1;
    stone.velocityY = 3;
    
    if(cloudsGroup.isTouching(basket)){
        score = score-20;
    }

     //assign lifetime to the variable
    stone.lifetime = 300;
    
    cloudsGroup.add(stone);


    //}
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,20,20);
    obstacle.x = Math.round(random(20,1100));
    //obstacle.debug = true;
    obstacle.velocityY = (6 + 0*100);

    
    

    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(appleImage);
              break;
      case 2: obstacle.addImage(bananaImage);
              break;
      case 3: obstacle.addImage(mangoImage);
              break;
      case 4: obstacle.addImage(grapesImage);
              break;
      case 5: obstacle.addImage(orangeImage);
              break;
      default: break;
    }
    
    obstacle.lifetime = 140;

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    
    

    
    

    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}