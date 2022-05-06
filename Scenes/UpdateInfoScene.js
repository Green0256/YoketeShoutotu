phina.globalize();

phina.define('UpdateInfoScene', {
  superClass: 'DisplayScene',

  init: function(params) {
    this.superInit(params);
    this.backgroundColor = "skyblue";
    
    var vList = readJSON("./version.json");
    for (var item in vList) {
      var latestVer = vList[item]["version"];
      var description = vList[item]["description"];
      var date = vList[item]["date"];
    };
    
    Label({
      text: "Ver." + latestVer,
      stroke: "white",
      fill: "blue",
      fontSize: 64,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.span(5), this.gridY.span(2));
    
    Label({
      text: date,
      stroke: "white",
      fill: "tomato",
      fontSize: 20,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.span(11), this.gridY.span(2.25));
    
    Label({
      text: description,
      stroke: "white",
      fill: "midnightblue",
      fontSize: 24,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(6.5));
    
    this.backBtn = Sprite("backBtn").addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(20));
    this.backLabel = Label({
      text: "BACK",
      stroke: "skyblue",
      fill: "white",
      fontSize: 100,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(20))
    
    var self = this;
    
    this.backBtn.setInteractive(true);
    this.backBtn.onpointstart = function() {
      self.backBtn.tweener.fade(0.25, 300).play();
      self.backLabel.tweener.fade(0.25, 300).play();
    
      self.backBtn.tweener.fade(1, 300).play();
      self.backLabel.tweener.fade(1, 300).play();
      window.setTimeout(function() {
        self.exit();
      }, 500);
    };
    
    this.backBtn.tweener.moveTo(this.gridX.center(), this.gridY.span(13.5));
    this.backLabel.tweener.moveTo(this.gridX.center(), this.gridY.span(13.5));
    
  },
});