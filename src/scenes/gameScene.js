import Phaser from 'phaser';
import Player from '../entities/playerEntity'

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

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