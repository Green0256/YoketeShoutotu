phina.globalize();

phina.define("StaticsScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();

    // 背景色
    this.backgroundColor = '#192f60';

    dataload();
    
    var self = this;

    Label({
      text: "Back",
      fill: "#fac559",
      stroke: "white",
      fontFamily: "CL",
      fontSize: 40,
    }).addChildTo(this).setPosition(500, 250);

    backBtn = Sprite("item_speedDown").addChildTo(this).setPosition(500, 125).setScale(0.4, 0.4);
    backBtn.rotation -= 90;

    backBtn.setInteractive(true);
    backBtn.onpointstart = function() {
      self.exit();
    };

    var setY = 50;
    
    var item_array = ["プレイ回数", "プレイ時間(分)", "合計スコア", "獲得コイン数", "獲得ダイヤ数", "リングを取った回数", "弾を発射した回数", "Normalを倒した回数", "Fireを倒した回数", "Iceを倒した回数"];
    var var_array = [st_play_count, st_play_time, st_all_score, st_all_coin, st_diamond, st_all_ring, st_bullet_count, st_enemy_normal, st_enemy_fire, st_enemy_ice];
    
    for (var i = 0; item_array.length > i; i++) {
      Label({
        text: item_array[i],
        fill: "skyblue",
        stroke: "white",
        fontFamily: "CL",
        fontSize: 25,
      }).addChildTo(this).setPosition(225, setY);
      
      setY += 35;
      
      Label({
        text: var_array[i],
        fill: "orange",
        stroke: "white",
        fontFamily: "CL",
        fontSize: 20,
      }).addChildTo(this).setPosition(225, setY);
      
      setY += 50;
    };
  },
});