phina.define("Fire", {
  superClass: "Enemy",

  init: function() {
    this.superInit();

    Sprite("enemy_fire").addChildTo(this).setScale(0.25, 0.25);

    this.hp = 3;
    this.speed = 2.5;
    
    this.rot = 16;
    this.score = 75;
    
    this.boss = false;
    
    this.enemyType = "fire";
  },
});