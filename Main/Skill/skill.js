function BulletWall() {
  skillCutin("スキル発動 - バレットウォール").addChildTo(itemGroup).setPosition(750,150);
  
  var bulletA = NormalBullet().addChildTo(bulletGroup).bulletType="Wall1";
  var bulletB = NormalBullet().addChildTo(bulletGroup).bulletType="Wall2";
  var bulletC = NormalBullet().addChildTo(bulletGroup).bulletType="Wall3";
};