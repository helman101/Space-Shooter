import Phaser from 'phaser'

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {

  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;