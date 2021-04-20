import Phaser from 'phaser';
import Entity from './entity';

class FastEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprFastEnemy', 'fastEnemy');
    this.body.velocity.y = Phaser.Math.Between(100, 200);
    this.points = 20;
  }
}

export default FastEnemy;