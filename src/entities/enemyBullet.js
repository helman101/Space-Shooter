import Entity from './entity';

class EnemyBullet extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprBullet1');
    this.body.velocity.y = 200;
  }
}

export default EnemyBullet;