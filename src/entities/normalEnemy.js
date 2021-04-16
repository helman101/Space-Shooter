import Entity from './entity';
import EnemyBullet from './enemyBullet'

class NormalEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprNormalEnemy', 'normalEnemy');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        var laser = new EnemyBullet(
          this.scene,
          this.x,
          this.y
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true
    });
  }
}

export default NormalEnemy;