import Entity from './entity';

class Player extends Entity {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 'player');
    this.body.setCollideWorldBounds(true)
    this.setData('speed', 200);
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    this.body.setVelocity(0, 0);
  }
}

export default Player;