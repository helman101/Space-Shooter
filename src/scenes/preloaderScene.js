import Phaser from 'phaser';
import player from '../assets/sprites/fighter.png';
import fastEnemy from '../assets/sprites/fast-enemy.png';
import normalEnemy from '../assets/sprites/normal-enemy.png';
import chaserEnemy from '../assets/sprites/chaser-enemy.png';
import background from '../assets/back.png';
import bulletOne from '../assets/sprites/bullet_2.png';
import bulletTwo from '../assets/sprites/bullet_1.png';
import bulletLarge from '../assets/sprites/bulet_3.png';
import mainTheme from '../assets/audio/OutThere.ogg';
import explosionOne from '../assets/audio/Explosion.wav';
import explosionTwo from '../assets/audio/Explosion2.wav';
import battleTheme from '../assets/audio/Battle-Theme.mp3';
import laserSound from '../assets/audio/Laser2.wav';
import spaceButton from '../assets/ui/BeamGlow_no_text.png';
import scoreContainer from '../assets/ui/GemsAndSteel_no_text.png';
import explosion from '../assets/sprites/explosion.png';
import soundOn from '../assets/ui/b_Sound1.png';
import soundOff from '../assets/ui/b_Sound2_Inactive.png';
import menuTheme from '../assets/audio/Loop-Menu.wav';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    window.localStorage.clear();

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(140, 370, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width * 0.5,
      y: height * 0.5 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(150, 380, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });


    this.load.image('soundOn', soundOn);
    this.load.image('soundOff', soundOff);
    this.load.image('spaceButton', spaceButton);
    this.load.image('scoreContainer', scoreContainer);
    this.load.image('sprPlayer', player);
    this.load.image('sprNormalEnemy', normalEnemy);
    this.load.image('sprChaserEnemy', fastEnemy);
    this.load.image('sprFastEnemy', chaserEnemy);
    this.load.image('bgImage', background);
    this.load.image('sprBullet1', bulletOne);
    this.load.image('sprBullet2', bulletTwo);
    this.load.image('sprBulletL', bulletLarge);
    this.load.audio('mainTheme', mainTheme);
    this.load.audio('menuTheme', menuTheme);
    this.load.audio('explosion1', explosionOne);
    this.load.audio('explosion2', explosionTwo);
    this.load.audio('battleTheme', battleTheme);
    this.load.audio('laser', laserSound);
    this.load.spritesheet('sprExplosion', explosion, {
      frameWidth: 90,
      frameHeight: 89,
    });
  }

  create() {
    this.scene.start('Title');
  }
}

export default PreloaderScene;