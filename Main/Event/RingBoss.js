function RingBoss() {
  RingEvent = true;
  GameRing = 0;
  
  enemyGenFrame = 25; // 敵の出現頻度を下げておく
  itemGenFrame = 30;
  
  skillCutin("リングを集めろ！ (タイム: 10秒)").addChildTo(itemGroup).setPosition(750,150);
  timeCountDown = 10;
  
  powerTLabel = Label({
    text: "POWER : ",
    fill: "red",
    stroke: "white",
    fontFamily: "CL",
    fontSize: 40,
  }).addChildTo(mainScene).setPosition(275, 750);
  
  powerLabel = Label({
    text: "0",
    fill: "blue",
    stroke: "white",
    fontFamily: "CL",
    fontSize: 50,
  }).addChildTo(mainScene).setPosition(425, 750);
  
  RingWait = window.setTimeout(function() {
    
    if (RingEvent === false) { // 途中でやられたりしてバグるのを回避
      return;
    };
    
    RingEvent = false;
    enemyGenFrame = 15;
    itemGenFrame = 25;
  
    BulletWall();
    
    RingBossVS = true;
    
    enemyGenFrame = 99999999999;
    
    var setX = 500;
    var setY = mainScene.gridY.center();
    
    var iceBoss = Ice().addChildTo(enemyGroup).setPosition(setX, setY);
    iceBoss.hp = parseInt(score/10);
    iceBoss.score = 100 + parseInt(score / 100);
    
  }, 10000);
};