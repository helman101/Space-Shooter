import Phaser from 'phaser';
import Button from '../objects/button';
import config from '../config/config';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.model = this.sys.game.globals.model;

    const image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    const title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE AVENGER', {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    title.setOrigin(0.5);

    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'spaceButton', 'Play', 'Game');
    this.gameButton = new Button(this, config.width / 2, config.height / 2, 'spaceButton', 'Options', 'Options');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 100, 'spaceButton', 'Credits', 'Credits');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 200, 'spaceButton', 'Scores', 'Scores');

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('menuTheme', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}

export default TitleScene;