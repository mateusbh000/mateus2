var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d51cf5fe-ae39-416a-b4b9-6f7952f18985","f46c36ea-f4ca-43ef-8381-4a7a07435c35"],"propsByKey":{"d51cf5fe-ae39-416a-b4b9-6f7952f18985":{"name":"donut_03_1","sourceUrl":null,"frameSize":{"x":364,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"QXXwWW0doIXnUhCR7M_RWgnhlcDFac.2","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":365},"rootRelativePath":"assets/d51cf5fe-ae39-416a-b4b9-6f7952f18985.png"},"f46c36ea-f4ca-43ef-8381-4a7a07435c35":{"name":"background_landscape02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


var gameState = 'iniciar'

var pontuacao = 0;

var group = createGroup();
group.add(box1);group.add(box2);group.add(box3);group.add(box4);group.add(box5);
group.add(box6);group.add(box7);group.add(box8);group.add(box9);group.add(box10);
group.add(box11);group.add(box12);group.add(box13);group.add(box14);group.add(box15);
group.add(box16);



paddle=createSprite(200,390,100,20);
paddle.shapeColor = 'green'

ball=createSprite(200,200,20,20);
ball.shapeColor = 'white'

ball.setAnimation('donut_03_1')
ball.scale = 0.08

createEdgeSprites();

function draw() {
  background("black");
  
  paddle.x = World.mouseX;
  
if (keyDown("ENTER")) {

  ball.setVelocity(8,-5)
}

 ball.bounceOff(group, quebrarcaixas)
 ball.bounceOff(topEdge);
 ball.bounceOff(paddle);
 ball.bounceOff(rightEdge);
 ball.bounceOff(leftEdge);

if(ball.bounceOff(paddle)) {
  playSound("assets/category_hits/retro_game_hit_block_4.mp3")
}


if(gameState === 'iniciar'){
textSize(25);
fill("yellow");
text('Presione a tecla "enter" para jogar!', 15,235);
if(keyDown('ENTER')){
  ball.setVelocity(6,-4);
  gameState = 'jogar';
}
} 

if(ball.isTouching(bottomEdge)|| pontuacao === 16){
  gameState = 'fim'
}

if(gameState === 'fim'){
pontuacao = 0
gameState = 'iniciar'
ball.x = 200
ball.y = 300
ball.setVelocity(0,0)
  
  
}
  drawSprites();
  

textSize(20);
fill("white");
textFont("Times New Roman");
text("pontuação:" + pontuacao, 10, 30);
}



function quebrarcaixas(ball,box){
  box.remove()
  pontuacao += 1
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
