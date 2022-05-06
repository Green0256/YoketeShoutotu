phina.define("Ring", {
  superClass: "Item",

  init: function() {
    this.superInit();

    Sprite("item_ring").addChildTo(this).setScale(0.5, 0.5);
    this.getCode = function() {
      SoundManager.play('coin');
      
      score += 25;
      GameRing++;
      
      st_all_ring++;
      
      powerLabel.text = GameRing*2;
    };

  },
});