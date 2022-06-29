phina.globalize();

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function(params) {
    this.superInit(params);
    this.backgroundColor = "midnightblue";
    
    this.ScoreDisplay = 0;
    this.Scorelength = 6;
    
    this.x = false;
    
    this.ScoreLabel = Label({
      text: "000000",
      fill: "#ff6600",
      stroke: "white",
      fontSize: 100,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(4.5));
    
    this.rankS = Sprite("rank_s").addChildTo(this).setPosition(1000, this.gridY.span(8)).setScale(0.25);
    this.rankA = Sprite("rank_a").addChildTo(this).setPosition(1500, this.gridY.span(10)).setScale(0.25);
    this.rankB = Sprite("rank_b").addChildTo(this).setPosition(2000, this.gridY.span(12)).setScale(0.25);
    this.rankC = Sprite("rank_c").addChildTo(this).setPosition(2500, this.gridY.span(14)).setScale(0.25);
    
    this.rankS.tweener.moveTo(150, this.gridY.span(8), 2500).play();
    this.rankA.tweener.moveTo(150, this.gridY.span(10), 2500).play();
    this.rankB.tweener.moveTo(150, this.gridY.span(12), 2500).play();
    this.rankC.tweener.moveTo(150, this.gridY.span(14), 2500).play();
    
    Label({
      text: "- Result -",
      stroke: "skyblue",
      fill: "white",
      fontSize: 75,
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(2.25));

    this.newLabel = Label({
      text: "New!",
      stroke: "red",
      fill: "white",
      fontSize: 40,
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(4), this.gridY.span(5));
    this.newLabel.alpha = 0;

    this.HighScoreDisplay = 0;
    this.highScoreLabel = Label({
      text: "HighScore: ",
      stroke: "red",
      fill: "white",
      fontSize: 25,
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(3), this.gridY.span(6.25));
    
    this.rankLabel = Label({
      text: ".",
      fill: "white",
      fontSize: 60
    }).addChildTo(this).setPosition(250,this.gridY.span(15));
    
    this.rankStr = Label({
      text: "RANK: ",
      fill: "skyblue",
      stroke: "white",
      fontSize: 75,
      fontFamily: "CL"
    }).addChildTo(this).setPosition(-300, this.gridY.span(7.75));
    
    this.getCoinLabel = Label({
      text: "獲得コイン: " + gameCoin,
      fill: "orange",
      stroke: "white",
      fontSize: 32,
      fontFamily: "CL"
    }).addChildTo(this).setPosition(-300, this.gridY.span(6));
    
    this.backBtn = Sprite("backBtn").addChildTo(this).setPosition(this.gridX.center(-5), this.gridY.span(20)).setScale(0.5,0.5);
    this.backLabel = Label({
      text: "Back",
      stroke: "skyblue",
      fill: "white",
      fontSize: 50,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.center(-5), this.gridY.span(20))
    
    var self = this;
    
    this.backBtn.setInteractive(true);
    this.backBtn.onpointstart = function() {
      if (score > highScore) {
        highScore = score;
        datasave();
      };

      self.backBtn.tweener.fade(0.25, 300).play();
      self.backLabel.tweener.fade(0.25, 300).play();
      
      self.backBtn.tweener.fade(1, 300).play();
      self.backLabel.tweener.fade(1, 300).play();
      window.setTimeout(function() {
        self.exit();
      },500);
    };

    this.retryBtn = Sprite("backBtn").addChildTo(this).setPosition(this.gridX.center(5), this.gridY.span(20)).setScale(0.5,0.5);
    this.retryLabel = Label({
      text: "Retry",
      stroke: "skyblue",
      fill: "white",
      fontSize: 50,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.center(5), this.gridY.span(20))
    
    var self = this;
    
    this.retryBtn.setInteractive(true);
    this.retryBtn.onpointstart = function() {

      if (score > highScore) {
        highScore = score;
        datasave();
      };

      self.retryBtn.tweener.fade(0.25, 300).play();
      self.retryLabel.tweener.fade(0.25, 300).play();
      
      self.retryBtn.tweener.fade(1, 300).play();
      self.retryLabel.tweener.fade(1, 300).play();
      window.setTimeout(function() {
        self.exit("main");
      },500);
    };
  },
  
  update: function(app) {
   if (app.frame % 5 == 0 && this.ScoreDisplay < score) {
     this.ScoreDisplay += score / 50;
     this.HighScoreDisplay += highScore / 50;
     this.highScoreLabel.text = "HighScore: " + parseInt(this.HighScoreDisplay);
     
     if (this.ScoreDisplay > score) {
       this.ScoreDisplay = score;
       this.highScoreLabel.text = "HighScore: " + highScore;
     };
   
     this.ScoreStr = parseInt(this.ScoreDisplay).toString();
     this.Scorelength = 6 - this.ScoreStr.length

    // const colors = ["orange","coral","orangered","darkorange"];
    //  var color = Math.floor(Math.random() * (0 + colors.length));

    //  this.ScoreLabel.fill = colors[color];
   };
  
   this.ScoreLabel.text = ("0" * this.Scorelength) + parseInt(this.ScoreDisplay);

   if (this.x === false) {
     this.x = true;
     
     SoundManager.play('gaugeUp');
     
     var TWEEN = {
       tweens: [
         ['wait', 750],
         ['by', {scaleX: 0.15, scaleY: 0.15}, 300],
         ['wait', 100],
         ['to', {x: this.gridX.center(3.55), y: this.gridY.span(7.75)}, 1250],
       ]
     };
     
     var FALL = {
       tweens: [
         ['wait', 1000],
         ['to', {y: this.gridY.span(20), alpha: 0.35}, 250],
         ]
     };
     
     this.rankLabel.text = "┃";
     
     if (score <= 999) {
       this.rankLabel.tweener.moveTo(250, this.gridY.span(14), 3000).play();
      
       this.rankC.tweener.fromJSON(TWEEN);
    
       this.rankB.tweener.fromJSON(FALL);
       this.rankA.tweener.fromJSON(FALL);
       this.rankS.tweener.fromJSON(FALL);
       this.rankLabel.tweener.fromJSON(FALL);
       
     } else if (score <= 1999) {
       this.rankLabel.tweener.moveTo(250, this.gridY.span(12), 3000).play();
       this.rankB.tweener.fromJSON(TWEEN);
       
       this.rankC.tweener.fromJSON(FALL);
       this.rankA.tweener.fromJSON(FALL);
       this.rankS.tweener.fromJSON(FALL);
       this.rankLabel.tweener.fromJSON(FALL);
       
     } else if (score <= 4999) {
       this.rankLabel.tweener.moveTo(250, this.gridY.span(10), 3000).play();
       this.rankA.tweener.fromJSON(TWEEN);
       
       this.rankC.tweener.fromJSON(FALL);
       this.rankB.tweener.fromJSON(FALL);
       this.rankS.tweener.fromJSON(FALL);
       this.rankLabel.tweener.fromJSON(FALL);
       
     } else {
       this.rankLabel.tweener.moveTo(250, this.gridY.span(8), 3000).play();
       this.rankS.tweener.fromJSON(TWEEN);
       
       this.rankC.tweener.fromJSON(FALL);
       this.rankB.tweener.fromJSON(FALL);
       this.rankA.tweener.fromJSON(FALL);
       this.rankLabel.tweener.fromJSON(FALL);
       
     };
     
     this.rankStr.tweener.wait(3750)
                         .moveTo(this.gridX.center(-3), this.gridY.span(7.75));
       
     this.getCoinLabel.tweener.wait(3750)
                              .moveTo(this.gridX.center(-3), this.gridY.span(6.25));
                              
     this.backBtn.tweener.wait(3750)
                         .moveTo(this.gridX.center(-4), this.gridY.span(13.5));
                         
     this.backLabel.tweener.wait(3750)
                         .moveTo(this.gridX.center(-4), this.gridY.span(13.5));

     this.retryBtn.tweener.wait(3750)
                         .moveTo(this.gridX.center(4), this.gridY.span(13.5));
                         
     this.retryLabel.tweener.wait(3750)
                         .moveTo(this.gridX.center(4), this.gridY.span(13.5));

     if (score > highScore) {
      this.newLabel.alpha = 1;
     };
   };
  },
});