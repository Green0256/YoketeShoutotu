phina.define("Player", {
  superClass: "DisplayElement",

  init: function() {
    this.superInit();
    
    this.shape = Sprite("player").addChildTo(this).setScale(0.25, 0.25);
    
    this.speed = 5.9;
    this.bulletSpeed = 20;
    
    this.shieldStatus = false;
    this.shieldInfo = null;
    
    this.pointer = false;
    
    playerSelf = this;
    
    mainScene.onpointstay = function(e) {
      playerSelf.pointer = true;
    };
    
    mainScene.onpointend = function(e) {
      playerSelf.pointer = false;
    };
  },
  
  update: function(app) {
    if (mainScene.tapReverse == false) {
      if (playerSelf.pointer) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      };
    } else {
      if (playerSelf.pointer) {
        this.y += this.speed;
      } else {
        this.y -= this.speed;
      };
    };
    
    
    if (this.y > 950) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = 950;
    };
    
    if (app.frame % this.bulletSpeed == 0) {
      this.bullet();
    };
  },
  
  check: function(enemy) {
    if (this.shieldStatus === true) {
     
      enemy.remove(); // 当たった敵を削除
      this.shieldInfo.hp--; // シールドのhpを減らす
      
      if (this.shieldInfo.hp <= 0) { // シールドのhpがなくなったら
        this.shieldInfo.remove(); // シールドを削除
      
        this.shieldStatus = false;
      };
      
    } else {
      this.death();
    };
  },
  
  death: function() {
    SoundManager.stopMusic();
    
    SoundManager.play('death');
    
    player_coin += gameCoin;
    st_all_coin += gameCoin; // 統計の今まで獲得した全てのゴールド数を増加
    
    st_all_score += score;
    
    datasave();
    
    if (RingEvent === true) {
      clearTimeout(RingWait);
    };
    
    if (onlyEnemy === 1) { // onlyEnemyがFireだったら
      onlyEnemy = null;
      clearTimeout(MeteoWait);
    };
    
    params = {
      score: score,
      message: "ゲームオーバー！",
      url: "https://discord.com/"
    };
    mainScene.exit(params);
  },
  
  shield: function() {
    
    if (this.shieldStatus === false) {
      this.shieldInfo = Shield().addChildTo(mainScene).setPosition(this.x, this.y);
      this.shieldStatus = true;
    } else if (this.shieldStatus == true) {
      if (this.shieldInfo.hp != 4) { // 最大値じゃなかったら
        this.shieldInfo.hp++; // シールド増加
      } else {
        score += 25; // 最大値だったらスコア増やす
      };
    };
    
  },
  
  bullet: function() {
    newBullet(this);
  },
});