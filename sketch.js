///VARIABLES///
let rocket;
let explosion;
let coinIcon;
let lifeIcon1;
let lifeIcon2;
let lifeIcon3;
///VALUES///
let gameState = "serve";
let score = 0;
let gun = "lvl1";
let lifes = 3;
let coins = 0;
let asteroidLife = 3;
let TimeWorld = 0;
///SOUNDS///
let explosionSound, coinSound, powerUpSound, laserSound, delaySound, destroySound, lifeUpSound, endSound, gameOverSound;
///IMAGES///
let coinIconImg, lifeIconImg, star1Img, star2Img, rocketImg, coinsImg, powerImg, delayImg, lifeUpImg, asteroidImg, asteroidDestroyedImg;
///GROUPS///
let asteroidsGroup, lasersX1Group, starsGroup, coinsGroup, powerGroup, delayGroup, lifeUpGroup;
///BOTTONS///
let title, titleImg; 
let playBotton, playBottonImg;
let optionsBotton, optionsBottonImg;
let overBotton,overBottonImg;
let backBotton, backBottonImg;
let automaticBotton, automaticBottonImg;
let manualBotton, manualBottonImg;
let restartBotton, restartBottonImg;
let quitBotton, quitBottonImg;

function preload(){

  ///IMAGES///
  coinIconImg = loadImage("Coin0.png");
  lifeIconImg = loadImage("Heart2D0.png");
  star1Img = loadImage("star01_2D0.png");
  star2Img = loadImage("star02_2D0.png");
  rocketImg = loadImage("rocket2D0.png");
  coinsImg = loadImage("Coin0.png")
  powerImg = loadImage("poder+.png");
  delayImg = loadImage("delay0.png");
  lifeUpImg = loadImage("Life2D0.png");
  asteroidImg = loadImage("asteroide2D.png");
  explosion = loadImage("explosionnn.jpg");
  asteroidDestroyedImg = loadImage("AsteroidDestroyed.png");
  titleImg = loadImage("RBA0.png");
  playBottonImg = loadImage("PlayBotton0.png");
  optionsBottonImg = loadImage("OptionsBotton0.png");
  overBottonImg = loadImage("OverBotton0.png");
  automaticBottonImg = loadImage("AutomaticBotton0.png");
  manualBottonImg = loadImage("ManualBotton0.png");
  backBottonImg = loadImage("BackBotton0.png");
  restartBottonImg = loadImage("RestartBotton0.png");
  quitBottonImg = loadImage("QuitBotton0.png");
  ///SOUNDS///
  explosionSound = loadSound("Explosion.mp3");
  coinSound = loadSound("Coin.mp3");
  powerUpSound = loadSound("Item.mp3");
  laserSound = loadSound("Laser.mp3");
  delaySound = loadSound("Delay.mp3");
  destroySound = loadSound("Destroy.mp3");
  lifeUpSound = loadSound("LifeUp.mp3");
  endSound = loadSound("End.mp3");
  gameOverSound = loadSound("GameOver.mp3","ExplosionFinale");
}

function setup(){

  ///CANVAS///
  createCanvas(500, 300);
  ///SPRITES///
  edges = createEdgeSprites();
  rocket = createSprite(-40, 150, 20, 20);
  rocket.addImage(rocketImg);
  rocket.scale = 0.15;
  //rocket.debug = true;
  coinIcon = createSprite(453,16,50,50);
  coinIcon.addImage(coinIconImg);
  coinIcon.scale = 0.018;
  coinIcon.visible = false;
  lifeIcon1 = createSprite(25,16,50,50);
  lifeIcon1.addImage(lifeIconImg);
  lifeIcon1.scale = 0.13;
  lifeIcon1.visible = false;
  lifeIcon2 = createSprite(50,16,50,50);
  lifeIcon2.addImage(lifeIconImg);
  lifeIcon2.scale = 0.13;
  lifeIcon2.visible = false;
  lifeIcon3 = createSprite(75,16,50,50);
  lifeIcon3.addImage(lifeIconImg);
  lifeIcon3.scale = 0.13;
  lifeIcon3.visible = false;
  title = createSprite(250, 30, 25, 15);
  title.scale = 0.25;
  title.addImage(titleImg);
  playBotton = createSprite(250, 215, 25, 15);
  playBotton.scale = 0.053;
  playBotton.addImage(playBottonImg);
  optionsBotton = createSprite(250, 255, 25, 15);
  optionsBotton.scale = 0.088;
  optionsBotton.addImage(optionsBottonImg);
  overBotton = createSprite(250, 150, 25, 15);
  overBotton.scale = 0.37;
  overBotton.addImage(overBottonImg);
  automaticBotton = createSprite(250, 185, 25, 15);
  automaticBotton.scale = 0.79;
  automaticBotton.addImage(automaticBottonImg);
  manualBotton = createSprite(250, 115, 25, 15);
  manualBotton.scale = 0.61;
  manualBotton.addImage(manualBottonImg);
  backBotton = createSprite(50, 275, 25, 15);
  backBotton.scale = 0.37;
  backBotton.addImage(backBottonImg);
  restartBotton = createSprite(250, 225, 25, 15);
  restartBotton.scale = 0.095;
  restartBotton.addImage(restartBottonImg);
  restartBotton.visible = false;
  quitBotton = createSprite(450, 275, 25, 15);
  quitBotton.scale = 0.33;
  quitBotton.addImage(quitBottonImg);
  quitBotton.visible = false;
  ///GROUPS///
  asteroidsGroup = new Group();
  starsGroup = new Group();
  coinsGroup = new Group();
  powerGroup = new Group();
  delayGroup = new Group();
  lifeUpGroup = new Group();
  lasersX1Group = new Group();
  lasersX2Group = new Group();
  lasersX4Group = new Group();
  lasersX8Group = new Group();
}

function draw() {
  
  background(0);
  fill("white");
  textSize(10);
  text("VersãoTestes... =D", 213, 290);

  if(gameState == "serve"){
    textSize(15);
    fill("white");
    text("v0.8",465, 295);
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    title.visible = true;
    playBotton.visible = true;
    optionsBotton.visible = true;
    overBotton.visible = false;
    automaticBotton.visible = false;
    manualBotton.visible = false;
    backBotton.visible = false;

    if(mousePressedOver(playBotton)){
      gameState = "loginStage1";
      TimeWorld = 0;
      frameCount = 0;
      title.visible = false;
      playBotton.visible = false;
      optionsBotton.visible = false;
    }
    if(mousePressedOver(optionsBotton)){
      gameState = "options";
      title.visible = false;
      playBotton.visible = false;
      optionsBotton.visible = false;
      overBotton.visible = true;
    }
  }
  if(gameState == "options"){
     textSize(15);
     fill("white");
     text("v0.8",465, 295);
     TimeWorld = 0;
     spawnSTARS1();
     spawnSTARS2();
     backBotton.visible = true;
     if(mousePressedOver(overBotton)){
      gameState = "over";
      overBotton.visible = false;
    }
    if(mousePressedOver(backBotton)){
      gameState = "serve";
    }
  }
  if(gameState == "over"){
    textSize(15);
    fill("white");
    text("v0.8",465, 295);
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    automaticBotton.visible = true;
    manualBotton.visible = true;
    if(mousePressedOver(automaticBotton)){
      gameState = "serve";
      //laserAutomatic();
    }
    if(mousePressedOver(manualBotton)){
      gameState = "serve";
      //laserManual();
    }
    if(mousePressedOver(backBotton)){
      gameState = "options";
    }
  }
  if(gameState == "loginStage1"){
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    rocket.velocityX = + 3;
    if(rocket.x > 100){
      rocket.velocityX = 0;
      textSize(16.5);
      fill("white");
      text("Joseph Joestar :", 7, 265);
      textSize(17);
      fill("white");
      text('"OH NO! Uma chuva de meteoros está vindo em nossa direção!"', 7, 285);
    }
    textSize(30)
    fill("red");
    text("STAGE 1", 190, 150);
    if(frameCount == 185){
      gameState = "Stage1";
    }
  }
  if(gameState == "Stage1"){
    base();
    spawnASTEROIDS();
    fill("red");
    text("SCORE: ", 200, 25);
    fill("white");
    text(" " +score, 275, 25);
    coinIcon.visible = true;
    rocket.bounceOff(edges);
    if(rocket.isTouching(asteroidsGroup)){
      explosionSound.play();
      endSound.play();
      rocket.addImage(explosion);
      restartBotton.depth = rocket.depth;
      restartBotton.depth += 1;
      quitBotton.depth = rocket.depth;
      quitBotton.depth += 1;
      lifes = lifes - 1;
      gameState = "end";
      if(lifes === 0){
        gameState = "gameOver";
        gameOverSound.play();
      }
    }
    lasersX1Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX2Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX4Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX8Group.bounceOff(asteroidsGroup,destroyasteroid);
    if(frameCount > 1000){
      gameState = "Stage1Clear";
    }
  }
  if(gameState == "Stage1Clear"){
    spawnSTARS1();
    spawnSTARS2();
    coinIcon.visible = false;
    lifesIconsRemove();
    starsGroup.setVelocityXEach(-10);
    asteroidsGroup.setVelocityXEach(-10);
    textSize(20);
    fill("cyan");
    text("Parabéns, você passou pelo Stage 1!", 100, 150);
    rocket.velocityX = + 4;
    //if(rocket.y >= 150){
    //  rocket.velocityY = -3;
    //}
    //if(rocket.y <= 150){
    //  rocket.velocityY = +3;
    //}
    //if(rocket.y === 150){
    //  rocket.velocityY = 0;
    //  rocket.y = 150;
    //}
    if(rocket.x > 620){
      gameState = "EmBreve"
    }
  }
  if(gameState == "EmBreve"){
    textSize(20);
    fill("cyan");
    text("Obrigado por jogar!", 100, 150);
    coinIcon.visible = false;
    lifesIconsRemove();
  }
  if(gameState == "end"){
    frameCount = 0;
    TimeWorld = 0;
    coinIcon.visible = false;
    lifesIconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    rocket.scale = 0.075;
    textSize(30)
    fill("red");
    text("YOU BLEW UP!", 145, 150);
    textSize(15)
    fill("red");
    text("Score: " +score, 225, 200);
    restartBotton.visible = true;
    quitBotton.visible = true;
    if(mousePressedOver(restartBotton)){
      reset();
      quitBotton.visible = false;
    }
    if(mousePressedOver(quitBotton)){
      quit();
      restartBotton.visible = false;
    }
  }
  if(gameState == "gameOver"){
    frameCount = 0;
    TimeWorld = 0;
    coinIcon.visible = false;
    lifesIconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    rocket.scale = 0.075;
    textSize(30)
    fill("red");
    text("GAMER OVER", 140, 150);
    quitBotton.visible = true;
    if(mousePressedOver(quitBotton)){
      quit();
    }
  }

  if(frameCount % 10 === 0 ){
    TimeWorld = TimeWorld + 2.5;
  }
  //textSize(15);
  //text(""+frameCount, 400, 290);
  drawSprites();
  //console.log(gameState);
}

function spawnSTARS1(){
  if(frameCount % 8 === 0){
    let star1 = createSprite(500, 150, 10, 10);
    star1.addImage(star1Img);
    star1.lifetime = 150;
    star1.velocityX = -(4 + TimeWorld * 2/100);
    star1.y = Math.round(random(1, 299));
    star1.x = Math.round(random(1, 499));
    rocket.depth = star1.depth;
    rocket.depth += 1;
    title.depth = star1.depth;
    title.depth += 1;
    playBotton.depth = star1.depth;
    playBotton.depth += 1;
    optionsBotton.depth = star1.depth;
    optionsBotton.depth += 1;
    overBotton.depth = star1.depth;
    overBotton.depth += 1;
    automaticBotton.depth = star1.depth;
    automaticBotton.depth += 1;
    manualBotton.depth = star1.depth;
    manualBotton.depth += 1;
    backBotton.depth = star1.depth;
    backBotton.depth += 1;
    restartBotton.depth = star1.depth;
    restartBotton.depth += 1;
    quitBotton.depth = star1.depth;
    quitBotton.depth += 1;
    starsGroup.add(star1);
  }
}

function spawnSTARS2(){
  if(frameCount % 8 === 0){
    let star2 = createSprite(500, 150, 10, 10);
    star2.addImage(star2Img);
    star2.scale = 5;
    star2.lifetime = 150;
    star2.velocityX = -(4 + TimeWorld * 2/100);
    star2.y = Math.round(random(1, 299));
    star2.x = Math.round(random(1, 499));
    rocket.depth = star2.depth;
    rocket.depth += 1;
    title.depth = star2.depth;
    title.depth += 1;
    playBotton.depth = star2.depth;
    playBotton.depth += 1;
    optionsBotton.depth = star2.depth;
    optionsBotton.depth += 1;
    overBotton.depth = star2.depth;
    overBotton.depth += 1;
    automaticBotton.depth = star2.depth;
    automaticBotton.depth += 1;
    manualBotton.depth = star2.depth;
    manualBotton.depth += 1;
    backBotton.depth = star2.depth;
    backBotton.depth += 1;
    restartBotton.depth = star2.depth;
    restartBotton.depth += 1;
    quitBotton.depth = star2.depth;
    quitBotton.depth += 1;
    starsGroup.add(star2);
  }
}

function spawnASTEROIDS(){
  if(frameCount % 14 === 0){
    let asteroid = createSprite(500, 150, 10, 10);
    asteroid.addImage(asteroidImg);
    asteroid.scale = (random(0.03, 0.1));
    asteroid.lifetime = 600/asteroid.velocityX;
    asteroid.rotation = Math.round(random(1, 360));
    asteroid.velocityX = Math.round(random(-1, -10)) && -(4 + TimeWorld * 2/100);
    asteroid.y = Math.round(random(1,299));
    asteroid.x = 600;
    rocket.depth = asteroid.depth;
    rocket.depth += 1;
    restartBotton.depth = asteroid.depth;
    restartBotton.depth += 1;
    quitBotton.depth = asteroid.depth;
    quitBotton.depth += 1;
    //asteroid.debug = true;
    asteroid.setCollider("circle", 0, 0, 230);
    asteroidsGroup.add(asteroid);
  }
}

function spawnCOINS(){
  if(frameCount % 75 === 0){
    let coins = createSprite(500, 150, 10, 10);
    coins.addImage(coinsImg);
    coins.scale = 0.01;
    coins.lifetime = 200;
    coins.velocityX = - 3;
    coins.y = Math.round(random(10, 289));
    coins.x = 600;
    rocket.depth = coins.depth;
    rocket.depth += 1;
    coinsGroup.add(coins);
  }
}

function spawnPOWERS(){
  if(frameCount % 350 === 0){
    let powerUp = createSprite(500, 150, 10, 10);
    powerUp.addImage(powerImg);
    powerUp.scale = 0.08;
    powerUp.lifetime = 200;
    powerUp.velocityX = - 3;
    powerUp.y = Math.round(random(10, 289));
    powerUp.x = 600;
    rocket.depth = powerUp.depth;
    rocket.depth += 1;
    //powerUp.debug = true;
    powerGroup.add(powerUp);
  }
}

function spawnDELAYS(){
  if(frameCount % 750 === 0){
    let delay = createSprite(500, 150, 10, 10);
    delay.addImage(delayImg);
    delay.scale = 0.08;
    delay.lifetime = 200;
    delay.velocityX = - 3;
    delay.y = Math.round(random(10, 289));
    delay.x = 600;
    rocket.depth = delay.depth;
    rocket.depth += 1;
    //delay.debug = true;
    delayGroup.add(delay);
  }
}

function spawnLIFESUP(){
  if(frameCount % 850 === 0){
    let lifeUp = createSprite(500, 150, 10, 10);
    lifeUp.addImage(lifeUpImg);
    lifeUp.scale = 0.08;
    lifeUp.lifetime = 200;
    lifeUp.velocityX = - 3;
    lifeUp.y = Math.round(random(10, 289));
    lifeUp.x = 600;
    rocket.depth = lifeUp.depth;
    rocket.depth += 1;
    //lifeUp.debug = true;
    lifeUpGroup.add(lifeUp);
  }
}

function laser1x(){
  let bala1 = createSprite(200, 200, 18, 3.5);
  bala1.shapeColor = "yellow";
  bala1.lifetime = 60;
  bala1.velocityX = + 10;
  bala1.x = rocket.x + 40;
  bala1.y = rocket.y;
  bala1.depth = rocket.depth;
  bala1.depth += 1;
  lasersX1Group.add(bala1);
}

function laser2x(){
  let bala2 = createSprite(200, 200, 18, 3.5);
  bala2.shapeColor = "yellow";
  bala2.lifetime = 500/10;
  bala2.velocityX = + 10;
  bala2.x = rocket.x + 19;
  bala2.y = rocket.y + 11;
  bala2.depth = rocket.depth;
  bala2.depth += 1;
  lasersX2Group.add(bala2);
  let bala3 = createSprite(200, 200, 18, 3.5);
  bala3.shapeColor = "yellow";
  bala3.lifetime = 60;
  bala3.velocityX = + 10;
  bala3.x = rocket.x + 19;
  bala3.y = rocket.y - 11;
  bala3.depth = rocket.depth;
  bala3.depth += 1;
  lasersX2Group.add(bala3);
}

function laser4x(){
  let bala4 = createSprite(200, 200, 18, 3.5);
  bala4.shapeColor = "yellow";
  bala4.lifetime = 60;
  bala4.velocityX = + 10;
  bala4.x = rocket.x + 19;
  bala4.y = rocket.y + 11;
  bala4.depth = rocket.depth;
  bala4.depth += 1;
  lasersX4Group.add(bala4);
  let bala5 = createSprite(200, 200, 18, 3.5);
  bala5.shapeColor = "yellow";
  bala5.lifetime = 60;
  bala5.velocityX = + 10;
  bala5.x = rocket.x + 19;
  bala5.y = rocket.y - 11;
  bala5.depth = rocket.depth;
  bala5.depth += 1;
  lasersX4Group.add(bala5);
  let bala6 = createSprite(200, 200, 18, 3.5);
  bala6.shapeColor = "yellow";
  bala6.lifetime = 60;
  bala6.velocityX = + 10;
  bala6.x = rocket.x + 19;
  bala6.y = rocket.y + 16;
  bala6.depth = rocket.depth;
  bala6.depth += 1;
  lasersX4Group.add(bala6);
  let bala7 = createSprite(200, 200, 18, 3.5);
  bala7.shapeColor = "yellow";
  bala7.lifetime = 60;
  bala7.velocityX = + 10;
  bala7.x = rocket.x + 19;
  bala7.y = rocket.y - 16;
  bala7.depth = rocket.depth;
  bala7.depth += 1;
  lasersX4Group.add(bala7);
}

function laser8x(){
  let bala8 = createSprite(200, 200, 18, 3.5);
  bala8.shapeColor = "cyan";
  bala8.lifetime = 60;
  bala8.velocityX = + 10;
  bala8.x = rocket.x + 19;
  bala8.y = rocket.y + 11;
  bala8.depth = rocket.depth;
  bala8.depth += 1;
  lasersX8Group.add(bala8);
  let bala9 = createSprite(200, 200, 18, 3.5);
  bala9.shapeColor = "cyan";
  bala9.lifetime = 60;
  bala9.velocityX = + 10;
  bala9.x = rocket.x + 19;
  bala9.y = rocket.y - 11;
  bala9.depth = rocket.depth;
  bala9.depth += 1;
  lasersX8Group.add(bala9);
  let bala10 = createSprite(200, 200, 18, 3.5);
  bala10.shapeColor = "cyan";
  bala10.lifetime = 60;
  bala10.velocityX = + 10;
  bala10.x = rocket.x + 19;
  bala10.y = rocket.y + 16;
  bala10.depth = rocket.depth;
  bala10.depth += 1;
  lasersX8Group.add(bala10);
  let bala11 = createSprite(200, 200, 18, 3.5);
  bala11.shapeColor = "cyan";
  bala11.lifetime = 60;
  bala11.velocityX = + 10;
  bala11.x = rocket.x + 19;
  bala11.y = rocket.y - 16;
  bala11.depth = rocket.depth;
  bala11.depth += 1;
  lasersX8Group.add(bala11);
}

function destroyasteroid(laser,asteroid){
  laser.destroy();
  asteroidLife = asteroidLife - 1;
  if(asteroidLife < 0){ 
    destroySound.play();
    asteroid.remove();
    asteroidLife = 3;
    score = score + 5;
    TimeWorld = TimeWorld + 0.5;
    //asteroid.addImage(asteroidDestroyedImg);
  } 
}

function destroyCoin(coin){
  coin.remove();
  coinSound.play();
  coins = coins + 1;
}

function destroyDelay(delay){
  delay.remove();
  delaySound.play();
  TimeWorld = 0;
}

function destroyLifeUp(lifesUp){
  lifesUp.remove();
  lifeUpSound.play();
  lifes = lifes + 1;
}

function destroyPowerUp(powersUp){
  powersUp.remove();
  powerUpSound.play();
}

function reset(){
  frameCount = 0;
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  rocket.addImage(rocketImg);
  rocket.scale = 0.15;
  rocket.x = 50;
  rocket.y = 150;
  restartBotton.visible = false;
  gameState = "Stage1";
  gun = "lvl1";
}

function base(){
  spawnSTARS1();
  spawnSTARS2();
  spawnCOINS();
  spawnPOWERS();
  spawnDELAYS();
  spawnLIFESUP();
  gunsXP();
  laserAutomatic();
  if(keyDown("W")){
    rocket.y = rocket.y - 5;
  }
  if(keyDown("S")){
    rocket.y = rocket.y + 5;
  }
  if(keyDown("A")){
    rocket.x = rocket.x - 5;
  }
  if(keyDown("D")){
    rocket.x = rocket.x + 5;
  }
  if(keyDown("UP")){
    rocket.y = rocket.y - 5;
  }
  if(keyDown("DOWN")){
    rocket.y = rocket.y + 5;
  }
  if(keyDown("LEFT")){
    rocket.x = rocket.x - 5;
  }
  if(keyDown("RIGHT")){
    rocket.x = rocket.x + 5;
  }
  textSize(20);
  fill("white");
  text("x" +coins, 465, 25);
  lifesIcons();
  coinsGroup.bounceOff(rocket,destroyCoin);
  delayGroup.bounceOff(rocket,destroyDelay);
  lifeUpGroup.bounceOff(rocket,destroyLifeUp);
}

function gunsXP(){
  if(rocket.isTouching(powerGroup) && gun == "lvl1"){
    powerGroup.bounceOff(rocket,destroyPowerUp);
    gun = "lvl2";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl2"){
    powerGroup.bounceOff(rocket,destroyPowerUp);
    gun = "lvl3";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl3"){
    powerGroup.bounceOff(rocket,destroyPowerUp);
    gun = "lvl4";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl4"){
    powerGroup.bounceOff(rocket,destroyPowerUp);
  }
}

function laserAutomatic(){
  gunsXP();
  if(frameCount % 7 === 0){
    if(gun == "lvl1"){
      laser1x();
    }
    if(gun == "lvl2"){
      laser2x();
    }
    if(gun == "lvl3"){
      laser4x();
    }
    if(gun == "lvl4"){
      laser8x();
    }
  }
}

function laserManual(){
  gunsXP();
  if(keyDown("SPACE") && gun == "lvl1"){
    laser1x();
  }
  if(keyDown("SPACE") && gun == "lvl2"){
    laser2x();
  }
  if(keyDown("SPACE") && gun == "lvl3"){
    laser4x();
  }
  if(keyDown("SPACE") && gun == "lvl4"){
    laser8x();
  }
}

function lifesIcons(){
  if(lifes == 1){
    lifeIcon1.visible = true;
    lifeIcon2.visible = false;
  }
  if(lifes == 2){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = false;
  }
  if(lifes >= 3){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = true;
  }
}

function lifesIconsRemove(){
  lifeIcon1.visible = false;
  lifeIcon2.visible = false;
  lifeIcon3.visible = false;
}


function quit(){
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  rocket.addImage(rocketImg);
  rocket.scale = 0.15;
  rocket.x = -40;
  rocket.y = 150;
  quitBotton.visible = false;
  gameState = "serve";
  lifes = 3;
  score = 0;
  TimeWorld = 0;
  frameCount = 0;
}
//Jogo em atualização =D...