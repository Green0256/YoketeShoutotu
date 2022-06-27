/**
 * タイトル
 */
phina.define('TitleScene', {
  superClass: 'phina.display.DisplayScene',

  init: function(params) {
    this.superInit(params);
    this.backgroundColor = "midnightblue";
    
    datacheck();
    dataload();
    
    var vList = readJSON("./version.json");
    for (var item in vList) {
      latestVer = vList[item]["version"];
      latestVerDate = vList[item]["date"];
    };
    
    
    // ------
    if (player_coin > st_all_coin) {
      player_coin = parseInt(st_all_coin);
      console.log("...");
    };
    
    if (player_diamond > st_diamond) {
      player_diamond = parseInt(st_diamond);
      console.log("...");
    };
    // ------
    
    
    var version_label = Label({
      text: "Ver." + latestVer + " (" + item + ")",
      fontSize: 20,
      fontFamily: "CL",
      stroke: "black",
      fill: "white",
      backgroundColor: "rgba(0, 0, 0, 0.3)"
    }).addChildTo(this).setPosition(this.gridX.span(12), this.gridY.span(15.25));

    var dateLabel = Label({
      text: latestVerDate,
      fontSize: 20,
      fontFamily: "CL",
      stroke: "black",
      fill: "white",
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    }).addChildTo(this).setPosition(this.gridX.span(12.5), this.gridY.span(14.5));
    dateLabel.alpha = 0;

    version_label.setInteractive(true);

    version_label.onpointover = function() {
      dateLabel.alpha = 1;

      window.setTimeout(function() {
        dateLabel.alpha = 0;
      },3000);
    };

    Sprite("item_coin").addChildTo(this).setPosition(75,75).setScale(0.15, 0.15);
    
    this.DisplayPlayerCoin = 0;
    
    coin_label = Label({
      text: "0",
      fill: "white",
      stroke: "orange",
      fontFamily: "CL"
    }).addChildTo(this).setPosition(200, 75).setScale(1, 1);
    
    var TitleLabel = Label({
      text: "避けて衝突",
      fill: "blue",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 45
    }).addChildTo(this).setPosition(this.gridX.center(-10), this.gridY.center(-15)).setScale(1.5, 1.5);
    
    TitleLabel.tweener.moveTo(this.gridX.center(-3.5), this.gridY.center(-3.5), 450);
    TitleLabel.tweener.moveTo(this.gridX.center(-4.5), this.gridY.center(-4.55), 200);
    TitleLabel.tweener.moveTo(this.gridX.center(-3.5), this.gridY.center(-4.25), 200);

    var TitleLabel2 = Label({
      text: "する謎ゲー",
      fill: "orange",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 45
    }).addChildTo(this).setPosition(this.gridX.center(4), this.gridY.center(-15)).setScale(1.5, 1.5);
    
    TitleLabel2.tweener.moveTo(this.gridX.center(4), this.gridY.center(-3.5), 450);
    TitleLabel2.tweener.moveTo(this.gridX.center(4), this.gridY.center(-4.55), 200);
    TitleLabel2.tweener.moveTo(this.gridX.center(4), this.gridY.center(-4.25), 200);

    var projectLogo = Label({
      text: "By 256Project",
      fill: "yellowgreen",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 30,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }).addChildTo(this).setPosition(this.gridX.center(4), this.gridY.center(-3));
    projectLogo.alpha = 0;

    projectLogo.tweener.fade(1,1000);

    projectLogo.setInteractive(true);
    projectLogo.onpointend = function() {
      window.location = "https://Green0256.github.io/";
    };
    
    var frame = Sprite("frame").addChildTo(this).setPosition(this.gridX.span(13), this.gridY.span(-1.5)).setScale(0.3, 0.3);
    var updateLabel = Label({
      text: "Ver." + latestVer + "\n情報",
      stroke: "white",
      fill: "blue",
      fontSize: 25,
      fontFamily: "CL",
    }).addChildTo(this).setPosition(this.gridX.span(13), this.gridY.span(-1.5));

    frame.onpointover = function() { // ホバー時に
      frame.y -= 15;
      updateLabel.y -= 15;
    };

    frame.onpointout = function() { // ホバーはずれたら
      frame.y += 15;
      updateLabel.y += 15;
    };
    
    frame.tweener.moveTo(this.gridX.span(13), this.gridY.span(1.5), 500)
    updateLabel.tweener.moveTo(this.gridX.span(13), this.gridY.span(1.5), 500)
    
    frame.setInteractive(true);
    frame.onpointstart = function() {
      frame.tweener.fade(0.25, 300).play();
      
      window.setTimeout(function() {
        self.app.pushScene(UpdateInfoScene());
      }, 500);
      
      frame.tweener.fade(1, 300).play();
    };
    
    var mode_normal = Label({
      text: "通常モード",
      fill: "white",
      stroke: "orange",
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(-1.5), this.gridY.center()).setScale(1, 1);
    
    var self = this;
    
    df_btn = Sprite("enemy_normal").addChildTo(this).setPosition(this.gridX.center(-15), this.gridY.center()).setScale(0.25, 0.25);
    df_btn.setInteractive(true);
    
    df_btn.tweener.moveTo(this.gridX.center(-5), this.gridY.center(), 500);

    df_btn.onpointover = function() { // ホバー時に
      mode_normal.x += 100;
    };

    df_btn.onpointout = function() { // ホバーはずれたら
      mode_normal.x -= 100;
    };
    
    df_btn.onpointstart = function() {
      df_btn.tweener.fade(0.25, 300).play();
      
      window.setTimeout(function() {
        self.exit();
      }, 500);
      
      df_btn.tweener.fade(1, 300).play();
    };
    
    setting_btn = Label({
      text: "設定",
      fill: "white",
      stroke: "orange",
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(-1.5), this.gridY.center(2)).setScale(1, 1);
  
    st_btn = Sprite("enemy_fire").addChildTo(this).setPosition(this.gridX.center(-15), this.gridY.center(2)).setScale(0.25, 0.25);
    st_btn.setInteractive(true);
    
    st_btn.tweener.moveTo(this.gridX.center(-5), this.gridY.center(2), 750);

    st_btn.onpointover = function() { // ホバー時に
      setting_btn.x += 100;
    };

    st_btn.onpointout = function() { // ホバーはずれたら
      setting_btn.x -= 100;
    };
    
    st_btn.onpointstart = function() {
      st_btn.tweener.fade(0.25, 300).play();
      
      window.setTimeout(function() {
        self.exit();
      }, 500);
      
      st_btn.tweener.fade(1, 300).play();
    };
    
    stat_label = Label({
      text: "統計",
      fill: "white",
      stroke: "orange",
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(-1.5), this.gridY.center(4)).setScale(1, 1);
    
    stat_btn = Sprite("enemy_block").addChildTo(this).setPosition(this.gridX.center(-15), this.gridY.center(4)).setScale(0.4, 0.4);
    stat_btn.setInteractive(true);
    
    stat_btn.tweener.moveTo(this.gridX.center(-5), this.gridY.center(4), 1000);

    stat_btn.onpointover = function() { // ホバー時に
      stat_label.x += 100;
    };

    stat_btn.onpointout = function() { // ホバーはずれたら
      stat_label.x -= 100;
    };
    
    stat_btn.onpointstart = function() {
      stat_btn.tweener.fade(0.25, 300).play();
      
      window.setTimeout(function() {
        self.app.pushScene(StaticsScene());
      }, 500);
      
      stat_btn.tweener.fade(1, 300).play();
    };
    
    credit_btn = Label({
      text: "クレジット",
      fill: "white",
      stroke: "orange",
      fontFamily: "CL"
    }).addChildTo(this).setPosition(this.gridX.center(-1.5), this.gridY.center(6)).setScale(1, 1);
    
    cr_btn = Sprite("enemy_ice").addChildTo(this).setPosition(this.gridX.center(-15), this.gridY.center(6)).setScale(0.2, 0.2);
    cr_btn.setInteractive(true);
    
    cr_btn.tweener.moveTo(this.gridX.center(-5), this.gridY.center(6), 1250);

    cr_btn.onpointover = function() { // ホバー時に
      credit_btn.x += 100;
    };

    cr_btn.onpointout = function() { // ホバーはずれたら
      credit_btn.x -= 100;
    };
    
    cr_btn.onpointstart = function() {
      cr_btn.tweener.fade(0.25, 300).play();
      
      window.setTimeout(function() {
        self.app.pushScene(CreditScene());
      }, 500);
      
      cr_btn.tweener.fade(1, 300).play();
    };
    
    
    login(); // ログイン処理をする
    
    
    // モバイルでの再生制限アンロックのため、画面タッチ時にSoundを無音再生
    this.on('enter', function() {
      var event = "touchstart";
      var dom = this.app.domElement;
      
      dom.addEventListener(event, (function() {
        return function f() {
          var context = phina.asset.Sound.getAudioContext();
          var buf = context.createBuffer(1, 1, 22050);
          var src = context.createBufferSource();
          src.buffer = buf;
          src.connect(context.destination);
          src.start(0);

          dom.removeEventListener(event, f, false);
        }
      }()), false);
    });

  },
  
  update: function(app) {
    coin_label.text = parseInt(this.DisplayPlayerCoin);
    
    if (this.DisplayPlayerCoin < player_coin && app.frame % 2 === 0) {
      this.DisplayPlayerCoin += player_coin/50;
      
      if (this.DisplayPlayerCoin > player_coin) {
        this.DisplayPlayerCoin = parseInt(player_coin);
      };
    };
  },

});