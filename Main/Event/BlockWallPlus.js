function blockWallPlus() {
    var setY = 0;
    
    SoundManager.play('warn');

    skillCutin("赤いブロックを壊して通り抜けよう！").addChildTo(itemGroup).setPosition(750,100);
    
    var r = fRange(1,4,shuffle=true)
    var warnArray = [];
    
    for (var i = 0; i < 10; i++) {
      var obj = Warn(sound=false).addChildTo(itemGroup).setPosition(600, setY);
      warnArray.push(obj);
      
      setY += 150;
    };
    
    window.setTimeout(function() {
      
      for (var i=0; i < warnArray.length; i++) {
        var obj = warnArray[i]
        obj.speed = 10;
      };
      
      setY = 0;
      for (var i = 0; i < 10; i++) {

        if (r[1] === i) {
            var b = BlockRED().addChildTo(enemyGroup).setPosition(750, setY);
            setY += 150;

        } else {
            var b = Block().addChildTo(enemyGroup).setPosition(750, setY);
            setY += 150;

        };
      };
    }, 1500);
  };