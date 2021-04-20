import Phaser from 'phaser';
import Entity from './entity';
import EnemyBullet from './enemyBullet';

class NormalEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprNormalEnemy', 'normalEnemy');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.points = 15;

    this.shootTimer = this.scene.time.addEvent({
      delay: 1200,
      callback: () => {
        const laser = new EnemyBullet(
          this.scene,
          this.x,
          this.y + (this.width * 0.5),
        );
        laser.setScale(this.scaleX);
        this.scene.enemyBullets.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

export default NormalEnemy;