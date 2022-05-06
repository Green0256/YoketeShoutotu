phina.define("speedDown", {
  superClass: "Item",

  init: function() {
    this.superInit();

    Sprite("item_speedDown").addChildTo(this).setScale(0.1, 0.1);
    
    this.getCode = function() {
      scrollSpeed -= 1;
      
      if (scrollSpeed <= 2) {
        scrollSpeed = 3;
      };
    };

  },
});