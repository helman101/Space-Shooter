import Entity from './entity';

class PlayerBullet extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprBullet2');
    this.body.velocity.y = -250;
    this.setTint('0x75ff91');
  }
}

export default PlayerBullet;