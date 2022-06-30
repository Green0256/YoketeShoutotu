function StairsLeft() {
    var setY = 1000;
    var setX = 600;
    
    SoundManager.play('warn');
    skillCutin("階段！").addChildTo(itemGroup).setPosition(750,100);
    skillCutin("上でワープして回避しよう！").addChildTo(itemGroup).setPosition(750,150);
        
    score += 100;

    onlyEnemy = -1;
    
    window.setTimeout(function() {
      for (var i = 0; i < 10; i++) {      
        var b = Block().addChildTo(enemyGroup).setPosition(setX, setY);
        setY -= 150;
        setX += 100;
      };
    }, 1500);

    window.setTimeout(function() {
      onlyEnemy = null;
    }, 3500);
  };