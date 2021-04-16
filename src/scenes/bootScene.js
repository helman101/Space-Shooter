import Phaser from 'phaser';
import player from '../assets/fighter.png';
import fastEnemy from '../assets/fast-enemy.png';
import normalEnemy from '../assets/normal-enemy.png';
import chaserEnemy from '../assets/chaser-enemy.png';
import background from '../assets/back.png';
import bulletOne from '../assets/bullet_2.png';
import bulletTwo from '../assets/bullet_1.png';
import bulletLarge from '../assets/bulet_3.png';
import mainTheme from '../assets/OutThere.ogg';
import explosionOne from '../assets/Explosion.wav';
import explosionTwo from '../assets/Explosion2.wav';
import battleTheme from '../assets/Battle-Theme.mp3';
import laserSound from '../assets/Laser2.wav';
import spaceButton from '../assets/ui/BeamGlow_no_text.png'; 


class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(140, 370, 320, 50);
  
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width * 0.5,
      y: height * 0.5 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
  
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
  
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
  
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(150, 380, 300 * value, 30);
    });
  
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
  
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
  
    this.load.image('spaceButton', spaceButton);
    this.load.image('sprPlayer', player);
    this.load.image('sprNormalEnemy', normalEnemy);
    this.load.image('sprFastEnemy', fastEnemy);
    this.load.image('sprchaserEnemy', chaserEnemy);
    this.load.image('bgImage', background);
    this.load.image('sprbullet1', bulletOne);
    this.load.image('sprbullet2', bulletTwo);
    this.load.image('sprbulletL', bulletLarge);
    this.load.audio('mainTheme', mainTheme);
    this.load.audio('explosion1', explosionOne);
    this.load.audio('explosion2', explosionTwo);
    this.load.audio('battleTheme', battleTheme);
    this.load.audio('laser', laserSound);
  }

  create() {
    this.scene.start('Title')
  }
}

export default BootScene;