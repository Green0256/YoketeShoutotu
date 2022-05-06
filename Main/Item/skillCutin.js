phina.define("skillCutin", {
  superClass: "Item",

  init: function(title="-") {
    this.superInit();

    this.speed = 7;
    this.c = 0;
    
    Label({
      text: title,
      fill: "midnightblue",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 50,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }).addChildTo(this).setPosition(0, 100);
    
    this.getCode = function() {};
  },
  
  update: function() {
    this.x -= this.speed * scrollSpeed;
    
    var self = this;
    
    if (this.c === 0 && this.x <= mainScene.gridX.center(0.5)) {
      this.c = -1;
      this.speed = 0;
      
      window.setTimeout(function() {
        self.speed = 7;
      }, 1500);
    };
  },
});