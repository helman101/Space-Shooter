import Phaser from 'phaser';

class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    const image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 200, 'Options', { fontSize: 40 });
    this.text.setOrigin(0.5, 0.5);
    this.musicButton = this.add.image(200, 300, 'soundOn');
    this.musicButton.setDisplaySize(50, 50);
    this.musicText = this.add.text(250, 290, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 400, 'soundOn');
    this.soundButton.setDisplaySize(50, 50);
    this.soundText = this.add.text(250, 390, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.updateAudio();

    this.menuButton = this.add.sprite(300, 500, 'spaceButton').setInteractive();
    this.menuButton.setOrigin(0.5, 0.5);
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('soundOff');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('soundOn');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('soundOff');
    } else {
      this.soundButton.setTexture('soundOn');
    }
  }
}

export default OptionsScene;