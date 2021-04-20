import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/titleScene';
import GameOverScene from './scenes/gameOverScene';
import PlayerInputScene from './scenes/playerInputScene';
import CreditsScene from './scenes/creditsScene';
import OptionsScene from './scenes/optionScene';
import Model from './objects/model';
import ScoreScene from './scenes/scoresScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('PlayerInput', PlayerInputScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Score', ScoreScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
