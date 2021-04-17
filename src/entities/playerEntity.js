import Entity from './entity';
import PlayerBullet from './playerBullet'

class Player extends Entity {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 'player');
    this.body.setCollideWorldBounds(true)
    this.setData('speed', 200);
    this.setData("isShooting", false);
    this.setData("timerShootDelay", 10);
    this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
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

    if (this.getData("isShooting")) {
      if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
        this.setData("timerShootTick", this.getData("timerShootTick") + 1); 
      }
      else {
        var laser = new PlayerBullet(this.scene, this.x, this.y + (-this.scene.player.width * 0.5));
        this.scene.playerBullets.add(laser);
      
        this.setData("timerShootTick", 0);
      }
    }
  }
}

export default Player;