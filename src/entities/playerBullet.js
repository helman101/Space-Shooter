import Entity from './entity';

class PlayerBullet extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprBullet2');
    this.body.velocity.y = -250;
  }
}

export default PlayerBullet;