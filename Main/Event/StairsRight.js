function StairsRight() {
    var setY = 0;
    var setX = 600;
    
    SoundManager.play('warn');
    skillCutin("階段！").addChildTo(itemGroup).setPosition(750,100);
    skillCutin("下か上でワープして回避しよう！").addChildTo(itemGroup).setPosition(750,150);

    score += 100;
        
    window.setTimeout(function() {
      for (var i = 0; i < 10; i++) {      
        var b = Block().addChildTo(enemyGroup).setPosition(setX, setY);
        setY += 150;
        setX += 100;
      };
    }, 1500);
  };