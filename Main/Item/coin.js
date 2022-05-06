phina.define("Coin", {
  superClass: "Item",

  init: function() {
    this.superInit();

    Sprite("item_coin").addChildTo(this).setScale(0.1, 0.1);
    this.getCode = function() {
      gameCoin++;
      score += 2;
      
      SoundManager.play('coin');
    };

  },
});