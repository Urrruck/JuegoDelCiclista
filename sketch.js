var mar, mar_fondo;
var gameState = PLAY;
var PLAY = 1;
var END = 0;
var score = 0;
var buzo1;
var salvaaltiburon;

function preload(){
  mar_fondo = loadImage("fondomar.png");
  shark_img = loadImage("shark.png");
  burb_img = loadImage("circle.png");
  tiburon2_img = loadImage("tiburon2.png");


  peces1_img = loadImage("peces1.png");
  peces2_img = loadImage("peces2.png");
  peces3_img = loadImage("peces3.png");

  buzo1_img = loadImage("buzo1.png");
  buzo2_img = loadImage("buzo2.png");
  buzo3_img = loadImage("buzo3.png");

  barco_img = loadImage("barco.png");
}


function setup() {
  createCanvas(1200,700);
  
  mar = createSprite(500, 450, 1000, 750);
  mar.addImage("fondomar", mar_fondo);
  mar.scale = 2.9;
  mar.velocityX = 2;

  tiburonDead = createSprite(500, 450, 1000, 750);
  tiburonDead.addImage("tiburon2", tiburon2_img);
  tiburonDead.scale = 2.9;
  tiburonDead.velocityX = 2;

  tiburon = createSprite(550, 350,20,50);
  tiburon.addImage("shark", shark_img);
  tiburon.scale = 0.2;
  tiburon.velocityX = -2;
  tiburon.setCollider("rectangle",0,0,50,50)

  burbujas = createSprite(400, 200,20,50);
  burbujas.addImage("burb", burb_img);
  burbujas.scale = 0.2;
  burbujas.velocityX = -2;
 
  barco = createSprite(500,48,30,40);
  barco.addImage("barco", barco_img);
  barco.scale = 1;
  barco.velocityX = 0;

  grupoBuzo = new Group();
  
}

function draw() {
  background(0);
  drawSprite();
  textSize(20);
  fill(225);
  text("Puntaje: " + salvaaltiburon, 500, 200);

  if(gameState===PLAY){
    //PUNTAJE
    salvaaltiburon = salvaaltiburon + Math.round(getFrameRate()/50);
    mar.velocityX = -(6 + 2*salvaaltiburon/150);
  }
 tiburon.y = World.mouseY;

  if(mar.x > 600){
    mar.x = 100;
  }
  
  
  
  var select_peces = Math.round(random(1,3));

  if(World.frameCount % 150 === 0){
    if(select_peces == 1){
   grupoPeces1();
    } else if (select_peces == 2) {
   grupoPeces2();
    } else {
   grupoPeces3();
   }
    }
var select_buzo = Math.round(random(1,2));
       if(World.frameCount % 200 === 0){
         if(select_buzo == 1){
           grupoBuzo1();
            } else if (select_buzo == 2) {
           grupoBuzo3();
            }
           }
           if(grupoBuzo.isTouching(tiburon)){
            gameState = END;
            tiburonDead.addImage("tiburon2",tiburon2_img);
           }
           else if (gameState === END){
              gameOver.visible = true;
              
              textSize(20);
              fill(255);
              text("Sabìas què Cada año se pescan en el mundo alrededor de 200 millones de tiburones, frente a cinco muertes humanas de media por ataques suyos a nuestra especie. Problema de los chinos, diréis algunos. Pero no es verdad. La culpa es de TODOS", 500,200);
      
              mar.velocityX = 0;
              tiburon.velocityX = 0;
              buzoGroup.velocityX = 0;
              grupoPeces1.velocityX = 0;
              grupoPeces2.velocityX = 0;
              grupoPeces3.velocityX = 0;
    
              if(keyDown("space")) {
                reset();
              }
            }
          }
  
  function grupoPeces1(){
    peces1 = createSprite(1200,Math.round(random(450,500)));
    peces1.scale = 0.2;
    peces1.velocityX = -1;
    peces1.addAnimation("peces1", peces1_img);
    peces1.setlifetime = 100;
  }
  function grupoPeces2(){
    peces2 = createSprite(2,Math.round(random(550,650)));
    peces2.scale = 0.2;
    peces2.velocityX = +1;
    peces2.addAnimation("peces1", peces2_img);
    peces2.setlifetime = 100;

  }
  function grupoPeces3(){
    peces3 = createSprite(2,Math.round(random(250,500)));
    peces3.scale = 0.2;
    peces3.velocityX = +1;
    peces3.addAnimation("peces1", peces3_img);
    peces3.setlifetime = 100;

  }
  function grupoBuzo1(){
    buzo1 = createSprite(2,Math.round(random(550,600)));
    buzo1.scale = 0.2;
    buzo1.velocityX = +1;
    buzo1.addAnimation("buzo1", buzo1_img);
    buzo1.setlifetime = 100;
  }

  function grupoBuzo3(){
    buzo3 = createSprite(1200,Math.round(random(250,500)));
    buzo3.scale = 0.2;
    buzo3.velocityX = -1;
    buzo3.addAnimation("buzo3", buzo3_img);
    buzo3.setlifetime = 100;
  }
  function reset(){
    gameState = PLAY;
     gameOver.visible = false;

     buzoGroup.destroyEach();
     salvaaltiburon = 0;
  }

