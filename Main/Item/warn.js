phina.define("Warn", {
  superClass: "Item",

  init: function(sound=true) {
    this.superInit();

    this.speed = 0.1;
    
    Sprite("item_warn").addChildTo(this).setScale(0.25, 0.25);
    
    if (sound === true) {
      SoundManager.play('warn');
    };
    
    this.getCode = function() {};
  },
});