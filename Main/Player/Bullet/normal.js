phina.define("NormalBullet", {
  superClass: "Bullet",

  init: function() {
    this.superInit();

    Sprite("bullet_normal").addChildTo(this).setScale(0.05, 0.05);

    this.speed = 8;
  },
});