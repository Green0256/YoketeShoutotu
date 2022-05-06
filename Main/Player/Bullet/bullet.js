function newBullet(player) {
  const data = {
    0: 97,
    1: 3,
  };
  
  st_bullet_count++;
  
  var r = lot(data);
  
  if (RingBossVS === true) {
    r = 100;
  };
  
  switch (r) {
    case 0: 
      NormalBullet().addChildTo(bulletGroup).setPosition(player.x + 40, player.y);
      break;
    case 1:
      SuperBullet().addChildTo(bulletGroup).setPosition(player.x + 40, player.y);
      break;
    case 100: // RingEvent用
      var blt = SuperBullet().addChildTo(bulletGroup).setPosition(player.x + 40, player.y);
      blt.damage = GameRing*2;
      break;
  };
};

phina.define("Bullet", {
  superClass: "DisplayElement",

  init: function() {
    this.superInit();

    this.speed = 6
    this.damage = 1;
    
    this.bulletType = null;
    
    SoundManager.play('bullet');
  },

  update: function() {
    if (this.bulletType === null) {
      this.x += this.speed;  
      
    } else if (this.bulletType === "Wall1") {
      this.x = playerSelf.x + 100;
      this.y = playerSelf.y - 50;
    } else if (this.bulletType === "Wall2") {
      this.x = playerSelf.x + 100;
      this.y = playerSelf.y;
    } else if (this.bulletType === "Wall3") {
      this.x = playerSelf.x + 100;
      this.y = playerSelf.y + 50;
    };

    this.rotation += 5;
    
    if (this.x > 700) {
      this.remove();
    };
    
    var bulletSelf = this;
    
    enemyGroup.children.each(function(enemy) {
      // 敵に当たったら
      if (bulletSelf.hitTestElement(enemy)) {
        enemy.hp -= bulletSelf.damage;
        bulletSelf.remove();
      };
    });
  },
});