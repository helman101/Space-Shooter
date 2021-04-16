import Entity from './entity';

class NormalEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprNormalEnemy', 'normalEnemy');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default NormalEnemy;