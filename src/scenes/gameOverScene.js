import Phaser from 'phaser';
import Button from '../objects/button';
import config from '../config/config';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    const title = this.add.text(this.game.config.width * 0.5, 128, 'Game Over', {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    title.setOrigin(0.5);

    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'spaceButton', 'Restart', 'Game');
    this.gameButton = new Button(this, config.width / 2, config.height / 2, 'spaceButton', 'Menu', 'Title');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 100, 'spaceButton', 'Scores', 'Scores');
  }
}

export default GameOverScene;