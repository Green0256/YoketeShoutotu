phina.define("BlockRED", {
    superClass: "Enemy",
  
    init: function() {
      this.superInit();
  
      Sprite("enemy_blockRED").addChildTo(this).setScale(0.5, 0.5);
  
      this.hp = 1;
  
      this.score = 0;
  
      this.boss = false;
  
      this.enemyType = "blockRED";
    },
  });