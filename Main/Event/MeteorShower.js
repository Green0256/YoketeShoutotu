function MeteorShower() {
  skillCutin("流星群").addChildTo(itemGroup).setPosition(750, 100);
  skillCutin("全部避けろ！ (Time: 10s)").addChildTo(itemGroup).setPosition(750, 250);
  timeCountDown = 10;
  
  enemyGenFrame = 25; // 出現速度を遅くする
  onlyEnemy = 1; // Fireのみ
  
  MeteoWait = window.setTimeout(function() {
    if (onlyEnemy != null) {
      onlyEnemy = null;
      enemyGenFrame = 15;
      
      score += 750;
    };
  }, 10000)
};