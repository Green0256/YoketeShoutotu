phina.define("ShieldItem", {
  superClass: "Item",

  init: function() {
    this.superInit();

    Sprite("item_shield").addChildTo(this).setScale(0.25, 0.25);

    this.getCode = function() {
      playerSelf.shield();
    };

  },
});