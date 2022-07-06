function blockWallPlus() {
    var setY = 0;
    
    SoundManager.play('warn');

    skillCutin("赤いブロックに注意！").addChildTo(itemGroup).setPosition(750,100);
        
    var warnArray = [];

    for (var i = 0; i < 10; i++) {
      if (i % 2 != 0) {
        var obj = Warn(sound=false).addChildTo(itemGroup).setPosition(600, setY);
        warnArray.push(obj);
        
        setY += 300;
      };
    };
    
    window.setTimeout(function() {
      
      for (var i=0; i < warnArray.length; i++) {
        var obj = warnArray[i]
        obj.speed = 10;
      };
      
      setY = 0;
      for (var i = 0; i < 10; i++) {

        if (i % 2 == 0) {
            var b = BlockRED().addChildTo(enemyGroup).setPosition(750, setY);
            setY += 150;

            b.speed = 1.6;
            b.hp = 100;
        } else {
            var b = Block().addChildTo(enemyGroup).setPosition(750, setY);
            setY += 150;

            b.speed = 1;
        };
      };
    }, 1500);
  };