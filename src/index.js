import 'phaser';
import config from './config/config';
import gameScene from './Scenes/gameScene';
import bootScene from './Scenes/bootScene';
import preloaderScene from './Scenes/preloaderScene';
import titleScene from './Scenes/titleScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Title', titleScene);
    this.scene.add('Game', gameScene);
    this.scene.start('Game');
  }
}
 
window.game = new Game();
