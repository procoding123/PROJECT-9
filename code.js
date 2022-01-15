var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d3aa363d-228a-4877-82de-6e280a50040d","c5145864-dfc3-425e-aa08-22fa81186b5a","96d62fd4-3622-4a70-ae69-c96a8376d817","cb08fb59-10c4-4faf-b37e-d068c50881ba","b664fce4-a1a3-490a-bcef-cc874aa73e36","654d827f-8dd2-4a7e-84d3-27ec93043f8c"],"propsByKey":{"d3aa363d-228a-4877-82de-6e280a50040d":{"name":"bg","sourceUrl":null,"frameSize":{"x":523,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"6xWKMnGv.qrISttrAB_bN_gHC0sdo8gz","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":523,"y":400},"rootRelativePath":"assets/d3aa363d-228a-4877-82de-6e280a50040d.png"},"c5145864-dfc3-425e-aa08-22fa81186b5a":{"name":"virus1","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"FUsMTrQ.tRatj1246mO2nDavvhwJA9tg","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/c5145864-dfc3-425e-aa08-22fa81186b5a.png"},"96d62fd4-3622-4a70-ae69-c96a8376d817":{"name":"virus2","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"8uuUuatlU7OvNBC2BdP7LVKxxWqJO2uj","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/96d62fd4-3622-4a70-ae69-c96a8376d817.png"},"cb08fb59-10c4-4faf-b37e-d068c50881ba":{"name":"virus3","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"4kCyEE8RaTBNHJDWxyMEydU5EP3SXD8_","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/cb08fb59-10c4-4faf-b37e-d068c50881ba.png"},"b664fce4-a1a3-490a-bcef-cc874aa73e36":{"name":"virus4","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"WhticUQQqDUmU.sFVNqsa.zNH.9BjliI","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/b664fce4-a1a3-490a-bcef-cc874aa73e36.png"},"654d827f-8dd2-4a7e-84d3-27ec93043f8c":{"name":"man","sourceUrl":null,"frameSize":{"x":25,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"jVi9ei7D3PQpWyuIPL4ieX0OTI5DI2Ep","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":35},"rootRelativePath":"assets/654d827f-8dd2-4a7e-84d3-27ec93043f8c.png"}}};
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

var  bg = createSprite(200,200);
bg.setAnimation("bg");

var virus1 = createSprite(50,50);
virus1.setAnimation("virus1");
var virus2 = createSprite(50,150);
virus2.setAnimation("virus2");
var virus3 = createSprite(50,250);
virus3.setAnimation("virus3");
var virus4 = createSprite(50,350);
virus4.setAnimation("virus4");
var virus5 = createSprite(350,100);
virus5.setAnimation("virus1");
var virus6 = createSprite(350,200);
virus6.setAnimation("virus2");
var virus7 = createSprite(350,300);
virus7.setAnimation("virus3");



var finishline = createSprite(180,10,150,20);
finishline.shapeColor="red";

var man = createSprite(200,380);
man.setAnimation("man");

var death = 0;

function draw(){
  
  createEdgeSprites();
  virus1.bounceOff(leftEdge)||virus1.bounceOff(rightEdge);
  virus2.bounceOff(leftEdge)||virus2.bounceOff(rightEdge);
  virus3.bounceOff(leftEdge)||virus3.bounceOff(rightEdge);
  virus4.bounceOff(leftEdge)||virus4.bounceOff(rightEdge);
  virus5.bounceOff(leftEdge)||virus5.bounceOff(rightEdge);
  virus6.bounceOff(leftEdge)||virus6.bounceOff(rightEdge);
  virus7.bounceOff(leftEdge)||virus7.bounceOff(rightEdge);
  man.bounceOff(bottomEdge);
  man.collide(finishline);
  
  drawSprites();
  
   fill("black");
  textSize(20);
  text("COVID GAME ",265,30);
  
  
  fill("black");
  textSize(20);
  text("DEATHS: " + death,290,60);
  
  fill("black");
  textSize(20);
  text("FINISH",150,20);
  
  if(keyDown("up")){
    man.y-=8;
  }
  
  if(keyDown("down")){
    man.y+=8;
  }
  
  if(man.isTouching(virus1)||man.isTouching(virus2)||man.isTouching(virus3)||man.isTouching(virus4)||man.isTouching(virus5)||man.isTouching(virus6)||man.isTouching(virus7)){
    man.x=200;
    man.y=380;
    death+=1;
  }
  
  if(keyDown("enter")){
    virus1.velocityX=12;
virus2.velocityX=12;
virus3.velocityX=12;
virus4.velocityX=12;
virus5.velocityX=12;
virus6.velocityX=12;
virus7.velocityX=12;
  }
  
  if(man.isTouching(finishline)){
    virus1.velocityX=0;
virus2.velocityX=0;
virus3.velocityX=0;
virus4.velocityX=0;
virus5.velocityX=0;
virus6.velocityX=0;
virus7.velocityX=0;
    textAlign(CENTER);
    fill("black");
    textSize(22);
    text("YOU WON",200,200);
  }
  
  if(man.isTouching(virus1)||man.isTouching(virus2)||man.isTouching(virus3)||man.isTouching(virus4)||man.isTouching(virus5)||man.isTouching(virus6)||man.isTouching(virus7)){
    playSound("assets/category_hits/vibrant_game_electro_hit_collect.mp3");
  }
  
  if(man.isTouching(finishline)){
    playSound( "assets/category_achievements/peaceful_win_8.mp3");
  }
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
