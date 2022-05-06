phina.define("IceBullet", {
  superClass: "Enemy",

  init: function() {
    this.superInit();

    Sprite("enemy_iceBullet").addChildTo(this).setScale(0.25, 0.25);

    this.hp = 15;
    this.score = 25;

    this.enemyType = "iceBullet";
  },
});