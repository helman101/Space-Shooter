import Phaser from 'phaser';
import Player from '../entities/playerEntity'

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  create() {
    this.player = new Player(
      this, 
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprPlayer'
    );
  }
}

export default GameScene;