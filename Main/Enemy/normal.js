phina.define("Normal", {
  superClass: "Enemy",

  init: function() {
    this.superInit();
    
    Sprite("enemy_normal").addChildTo(this).setScale(0.175,0.175);
    
    this.hp = 1;
    
    this.rot = 0;
    this.score = 10;

    this.boss = false;
    
    this.enemyType = "normal";
  },
});