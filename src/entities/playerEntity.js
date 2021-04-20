import Entity from './entity';
import PlayerBullet from './playerBullet';

class Player extends Entity {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 'player');
    this.body.setCollideWorldBounds(true);
    this.setData('speed', 200);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
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

    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1);
      } else {
        const laser = new PlayerBullet(this.scene, this.x, this.y + (-this.width * 0.5));
        this.scene.playerBullets.add(laser);

        const { model } = this.scene.sys.game.globals;

        if (model.soundOn === true) {
          this.scene.sfx.laser.play();
        }

        this.setData('timerShootTick', 0);
      }
    }
  }

  onDestroy() {
    this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.scene.scene.start('PlayerInput');
      },
      callbackScope: this,
      loop: false,
    });
  }
}

export default Player;