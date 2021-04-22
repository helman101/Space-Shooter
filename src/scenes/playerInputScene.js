import Phaser from 'phaser';
import Button from '../objects/button';
import config from '../config/config';
import nameForm from '../helper/Form';

class PlayerInputScene extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.sys.game.globals.bgMusic.stop();
    this.model.bgMusicPlaying = false;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('menuTheme', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    const gameScore = localStorage.getItem('score') || 0;

    const form = nameForm(this, 'GameOver', gameScore);

    document.body.appendChild(form);

    this.element = this.add.dom(document.body.offsetWidth * 0.5, document.body.offsetHeight * 0.5 + 50, form, 'margin: 0 auto;');
    this.element.setDepth(100);

    const image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    const title = this.add.text(this.game.config.width * 0.5, 128, 'Game Over', {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    const scoreText = this.add.text(this.game.config.width * 0.5, 300, `Score: ${gameScore}`, {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    title.setOrigin(0.5);
    scoreText.setOrigin(0.5);

    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 200, 'spaceButton', 'Skip', 'GameOver');
  }

  update() {
    this.element
      .setPosition(document.body.offsetWidth * 0.5, document.body.offsetHeight * 0.5 + 50);
  }
}

export default PlayerInputScene;
