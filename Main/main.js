phina.globalize();

phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();

    // 背景色
    this.backgroundColor = 'skyblue';
    
    // var background = Sprite("background").addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
    // background.setSize(650, 975);
    
    st_play_count++; // 統計のプレイ回数を増やす
    
    mainScene = this;
    
    SoundManager.playMusic('mainBGM');
    
    score = 0;
    gameCoin = 0;
    
    scrollSpeed = 6;
    enemyGenFrame = 15;
    itemGenFrame = 25;
    
    onlyEnemy = null;
    
    speedUpNextScore = 500;
    
    // 特殊イベント [リング] の管理用
    GameRing = 0;
    RingEvent = false;
    RingBossVS = false;
    
    bulletGroup = DisplayElement().addChildTo(this);
    itemGroup = DisplayElement().addChildTo(this);
    
    player = Player().addChildTo(this).setPosition(70, this.gridY.center());
    player.pointer = false;
    
    enemyGroup = DisplayElement().addChildTo(this); // プレイヤーの後に生成することで敵がプレイヤーより上に生成されるようにする。
  
    scoreLabel = Label({
      text: "SCORE:         ",
      fill: "midnightblue",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 42,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }).addChildTo(this).setPosition(200, 50);
    
    scoreNumLabel = Label({
      text: "0",
      fill: "dodgerblue",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 42,
    }).addChildTo(this).setPosition(260, 50);
    
    coinLabel = Label({
      text: "COIN:         ",
      fill: "orange",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 42,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }).addChildTo(this).setPosition(200, 120);
    
    coinNumLabel = Label({
      text: "0",
      fill: "dodgerblue",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 42,
    }).addChildTo(this).setPosition(260, 120);
    
  },
  
  update: function(app) {
   
    if (app.frame % enemyGenFrame == 0) {
      enemyGen();
    };
    
    if (app.frame % itemGenFrame == 0) {
      itemGen();
    };
    
    if (app.frame % 3600 == 0) {
      st_play_time++;
    };
    
    if (app.frame % 1000 === 0 && RingBossVS === false && onlyEnemy === null) {
      enemyGroup.children.clear();
      
      var data = {
        0: 80,
        1: 10,
        2: 10,
      };
      
      r = lot(data);
      
      switch (r) {
        case 0:
          BulletWall();
          blockWall();
          break;
        
        case 1:
          RingBoss();
          break;
        
        case 2:
          MeteorShower();
          break;
      };
      
      
    };
    
    scoreNumLabel.text = score;
    coinNumLabel.text = gameCoin;
    
    if (speedUpNextScore <= score) {
      speedUpNextScore += 750;
      
      scrollSpeed++;
    };
  
    // Fire().addChildTo(this).setPosition(xr, yr);
    // Ice().addChildTo(this).setPosition(xr, yr);
  },
});