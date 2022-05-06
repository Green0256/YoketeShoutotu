phina.define("Shield", {
  superClass: "DisplayElement",

  init: function(sizeX=0.375, sizeY=0.375) {
    this.superInit();
    
    this.hp = 1;
    
    this.speed = 10;
    
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    
    Sprite("player_shield").addChildTo(this).setScale(this.sizeX, this.sizeY)
    
    this.hpLabel = Label({
      text: "1",
      fill: "orange",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 64,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    }).addChildTo(this);
  },

  update: function() {
  
  if (this.hp === 4) {
    this.hpLabel.text = "MAX";
  } else {
    this.hpLabel.text = this.hp;
  };
  
  if (this.hp > 4) {
    this.hp = 4; // バグ防止
  };
  
  this.x = playerSelf.x; // 移動させる
  this.y = playerSelf.y;
   
  var self = this;
   
   //enemyGroup.children.each(function(enemy) {
     // 敵がシールドに当たったら
     //if (enemy.hitTestElement(self)) {
       
       //self.hp--; // シールドのhpを減らして
       //enemy.remove(); // 当たった敵を削除
       
       //if (self.hp <= 0) { // シールドのhpがなくなったら
         //self.remove(); // シールドを削除
         
         //playerSelf.shieldStatus = false;
       //};
       
     //};
   //});
   
  },
});