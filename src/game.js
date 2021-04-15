import 'phaser';

class SimpleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);