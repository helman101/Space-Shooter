import Entity from './entity';

class ChaserEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprChaserEnemy', 'chaserEnemy');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.states = {
      NORMAL: "NORMAL",
      CHASE: "CHASE"
    };
    this.state = this.states.NORMAL;
    this.points = 10;
  }

  update() {
    if (!this.getData("isDead") && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y
      ) < 320) {

        this.state = this.states.CHASE;
      }

      if (this.state == this.states.CHASE) {
        var dx = this.scene.player.x - this.x;
        var dy = this.scene.player.y - this.y;

        var angle = Math.atan2(dy, dx);

        var speed = 100;
        this.body.setVelocity(
          Math.cos(angle) * speed,
          Math.sin(angle) * speed
        );
      }
    }

    if (this.x < this.scene.player.x && this.state == this.states.CHASE) {
      this.angle -= 5;
    }
    else {
      this.angle += 5;
    } 
  }
}

export default ChaserEnemy;