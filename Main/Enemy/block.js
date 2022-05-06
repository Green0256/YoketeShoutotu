phina.define("Block", {
  superClass: "Enemy",

  init: function() {
    this.superInit();

    Sprite("enemy_block").addChildTo(this).setScale(0.5, 0.5);

    this.hp = 100;

    this.score = 0;

    this.boss = false;

    this.enemyType = "block";
  },
});