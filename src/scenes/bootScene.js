import Phaser from 'phaser';
import player from '../assets/fighter.png';
import fastEnemy from '../assets/fast-enemy.png';
import normalEnemy from '../assets/normal-enemy.png';
import chaserEnemy from '../assets/chaser-enemy.png';
import background from '../assets/back.png'

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('sprPlayer', player);
    this.load.image('sprNormalEnemy', normalEnemy);
    this.load.image('sprFastEnemy', fastEnemy);
    this.load.image('sprchaserEnemy', chaserEnemy);
    this.load.image('bgImage', background);
  }

  create() {
    this.scene.start('Game');
  }
}

export default BootScene;