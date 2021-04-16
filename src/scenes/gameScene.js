import Phaser from 'phaser';
import Player from '../entities/playerEntity'
import NormalEnemy from '../entities/normalEnemy'

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  create() {
    // add background image to scene
    let image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    // add functional keyboards to move the player
    this.cursors = this.input.keyboard.createCursorKeys();

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();

    this.time.addEvent({
      delay: 100,
      callback: function() {
        var enemy = new NormalEnemy(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });

    // create and add the player to the scene
    this.player = new Player(
      this, 
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprPlayer'
    );

  }

  update() {
    this.player.update();

    if (this.cursors.up.isDown) {
      this.player.moveUp();
    }
    else if (this.cursors.down.isDown) {
      this.player.moveDown();
    }

    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    }
    else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }
  }
}

export default GameScene;