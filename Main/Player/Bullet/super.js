phina.define("SuperBullet", {
  superClass: "Bullet",

  init: function() {
    this.superInit();

    Sprite("bullet_super").addChildTo(this).setScale(0.0875, 0.0875);

    this.speed = 10;
    this.damage = 2;
  },
});