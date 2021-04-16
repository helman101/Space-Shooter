import Entity from './entity';

class FastEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprFastEnemy', 'fastEnemy');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default FastEnemy;