import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  create() {
    this.add.image(300, 700, 'sprPlayer');
  }
}

export default GameScene;