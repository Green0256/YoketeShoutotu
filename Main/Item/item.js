function itemGen() {
  const data = {
    0: 95,
    1: 2,
    2: 3,
  };

  r = lot(data);

  var m = 950;
  var n = 30;

  var yr = Math.floor(Math.random() * (m + 1 - n)) + n;

  var m = 950;
  var n = 700;

  var xr = Math.floor(Math.random() * (m + 1 - n)) + n;
  
  if (RingEvent === true) {
    var r = 100;
  };

  switch (r) {
    case 0:
      Coin().addChildTo(itemGroup).setPosition(xr, yr);
      break;
    case 1:
      speedDown().addChildTo(itemGroup).setPosition(xr, yr);
      break;
    case 2:
      ShieldItem().addChildTo(itemGroup).setPosition(xr, yr);
      break;
    case 100:
      
      var m = 725;
      var n = 275;
      
      var yr = Math.floor(Math.random() * (m + 1 - n)) + n;
      
      Ring().addChildTo(itemGroup).setPosition(xr, yr);
      break;
  };
};

phina.define("Item", {
  superClass: "DisplayElement",

  init: function() {
    this.superInit();

    this.speed = 1;

    this.rot = 0;
    this.getCode = function() {};
  },

  update: function() {
    
    this.x -= this.speed * scrollSpeed;
    
    if (this.rot != 0) {
      this.rotation += this.rot;
    }

    // 画面外に行ったら削除
    if (this.x < 0) { this.remove(); };

    // プレイヤーが当たったらコード実行
    if (playerSelf.hitTestElement(this)) {
      this.getCode();
      datasave();
      
      this.remove();
    };
    
    var self = this;
    
    // 敵と重なってたら移動
    enemyGroup.children.each(function(enemy) {
      if (self.hitTestElement(enemy)) {
        self.x -= self.speed*5;
      };
    });
  },
});