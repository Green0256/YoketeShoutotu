phina.define("Ice", {
  superClass: "Enemy",

  init: function() {
    this.superInit();

    Sprite("enemy_ice").addChildTo(this).setScale(0.55, 0.55);

    this.hp = 100000;
    
    this.rot = 5;
    this.score = 500;
    
    this.hpLabel = Label({
      text: "",
      fill: "tomato",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 90,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }).addChildTo(this);

    this.boss = true;
    
    this.enemyType = "ice";
    
    this.spFrame = 25;
    this.super = function() {
      
      var m = 950;
      var n = 30;
      
      var setX = 750;
      var setY = Math.floor(Math.random() * (m + 1 - n)) + n;
      
      IceBullet().addChildTo(enemyGroup).setPosition(setX, setY);
    };
  },
});