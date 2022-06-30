function enemyGen() {
  const data = {
    0: 98,
    1: 2,
  };

  var r = lot(data);

  var m = 950;
  var n = 30;

  var yr = Math.floor(Math.random() * (m + 1 - n)) + n;

  var m = 950;
  var n = 700;

  var xr = Math.floor(Math.random() * (m + 1 - n)) + n;
  
  if (onlyEnemy != null) {
    r = onlyEnemy;
  };

  switch (r) {
    case -1:
      // 敵出現しないやつ
      break;
      
    case 0:
      Normal().addChildTo(enemyGroup).setPosition(xr, yr);
      break;
      
    case 1:
      var obj = Warn().addChildTo(itemGroup).setPosition(600, yr);

      window.setTimeout(function() {
        obj.speed = 4.5;

        Fire().addChildTo(enemyGroup).setPosition(xr, yr);
      }, 500);
      
      break;
  };
};

phina.define("Enemy", {
  superClass: "DisplayElement",

  init: function() {
    this.superInit();

    this.hp = 1;
    this.speed = 0.995;
    
    this.rot = 0;
    this.score = 10;
    
    this.enemyType = null;
    
    this.superMove = false;
    this.moveF = null;
    
    this.boss = false;
  },

  update: function(app) {
 
    if (this.boss === true) { // ボスだったら
      this.hpLabel.text = this.hp; // hp表示を更新
      
      if (app.frame % this.spFrame === 0) { // 一定フレームごとに
        this.super(); // superを実行す
      };
    };
    
    if (this.hp <= 0) {
      this.death();
    };
    
    if (this.boss == false && this.superMove == false) {
      this.x -= this.speed * scrollSpeed;
    };
    
    if (this.superMove === true) {
      this.moveF();
    };
    
    if (this.rt != 0) {
      this.rotation += this.rot;
    };
    
    // 画面外に行ったら削除
    if (this.x < -25) { this.remove(); };
    
    // プレイヤーに当たったらプレイヤーのHPを減らす
    if (playerSelf.hitTestElement(this)) {
      playerSelf.check(this);
    };
    
    var self = this;
    
    // 重なってたら移動
    enemyGroup.children.each(function(enemy) {
      if (self.hitTestElement(enemy) && enemy != self && self.enemyType != "block" && enemy.enemyType != "block" && self.enemyType != "ice" && enemy.enemyType != "ice") {
        var r = fRange(1, 10, shuffle = true);
        var a = fRange(1, 5);
    
        if (r[5] in a) {
          self.x += self.speed * 10;
        } else {
          self.y -= self.speed * 10;
        };
      };
    });
  },
  
  death: function() {
   
    if (this.boss === false) {
      
      if (this.enemyType === "normal") {
        st_enemy_normal++; // 統計の数値を増加させる
      } else if (this.enemyType === "fire") {
        st_enemy_fire++;
      };
    };
    
    if (this.boss === true && RingBossVS === true) {
      RingBossVS = false;
      enemyGenFrame = 15;
      
      powerTLabel.remove();
      powerLabel.remove();
      
      st_enemy_ice++;
    };
    
    score += this.score;
    gameCoin += Math.floor(this.score / 10);
    
    this.remove();
  },
});