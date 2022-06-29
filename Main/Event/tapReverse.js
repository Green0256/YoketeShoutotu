function tapReverse() {
    skillCutin("操作反転！ (10s)").addChildTo(itemGroup).setPosition(750, 100);
    timeCountDown = 10;
    
    mainScene.tapReverse = true;

    window.setTimeout(function() {
        skillCutin("終了").addChildTo(itemGroup).setPosition(750, 100);
        mainScene.tapReverse = false;
    },10000);
};