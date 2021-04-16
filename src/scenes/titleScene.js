import Phaser from 'phaser';
import Button from '../objects/button'
import config from '../config/config'

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'spaceButton', 'Play', 'Game');
  }
}

export default TitleScene;