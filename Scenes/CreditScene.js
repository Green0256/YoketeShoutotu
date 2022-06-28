phina.globalize();

phina.define("CreditScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();

    // 背景色
    this.backgroundColor = '#192f60';
    
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
    
    var item_array = ["プログラミング", "絵とか     ", "BGM      ", "効果音     ", "神アイディア  ", "テスター      "];
    var name_array = [ ["Green0256"], ["Green0256"], ["Green0256"], ["魔王魂", "効果音ファクトリー"], ["しょう★㌖"], ["             しょう★㌖ (デバッグゴリラ)", "                           ソウ"] ]
    
    var setY = -50;
  
    for (var item=0; item_array.length > item; item++) {
      setX = 0;
      setY += 100;
      
      Label({
        text: item_array[item],
        fill: "#fac559",
        stroke: "white",
        fontFamily: "CL",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        fontSize: 40,
      }).addChildTo(this).setPosition(150, setY);
      
      setY += 60;
      
      for (var name=0; name_array[item].length > name; name++) {
        setX += 125;
        
        Label({
          text: name_array[item][name],
          fill: "tomato",
          stroke: "white",
          fontFamily: "CL",
          fontSize: 30,
        }).addChildTo(this).setPosition(setX, setY);
        
        setX += 60;
      };
      
    };
  },
});