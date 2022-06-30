function hovering() {
  var setY = 0;
  SoundManager.play('warn');

  skillCutin("ホバリング！").addChildTo(itemGroup).setPosition(750,100);
  skillCutin("操作は上移動のみ！").addChildTo(itemGroup).setPosition(750,150);

  onlyEnemy = -1;

  mainScene.hovering = true;

  var r = fRange(1,4,shuffle=true);
  r = r[1];

  warnArray = [];
  
  for (var i = 1; i < 10; i++) {
    var obj = Warn(sound=false).addChildTo(itemGroup).setPosition(600, setY);
    warnArray.push(obj);
    
    setY += 150;
    
    if (r === i) {
      setY += 150;
    };
  };

  window.setTimeout(function() {    
    for (var i=0; i < warnArray.length; i++) {
        var obj = warnArray[i]
        obj.speed = 10;
    };

    var setY = 0;
    var setX = 1500;
    for (var i = 1; i < 30; i++) {
    
      var b = Block().addChildTo(enemyGroup).setPosition(setX, setY);
      setY += 150;
    
      if (r === i) {
        setY += 150;
      };

      if (i % 10 == 0) {
        setX += 150;
        setY = 0;
        r += 10;
      };
    };

    var t = 5500;
    if (scrollSpeed * 1000 < 5000) {
        t = 6000;
    };

    window.setTimeout(function() {
      onlyEnemy = null;

      mainScene.hovering = false;
      score += 350;
    }, t);
  }, 1500);
};