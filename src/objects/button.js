import Phaser from 'phaser';
 
class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, normal, text, goTo) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
 
    this.button = this.scene.add.sprite(0, 0, normal).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontFamily: 'FreeMono', fontSize: '32px', fontStyle: 'bold', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);
 
    this.add(this.button);
    this.add(this.text);
 
    this.button.on('pointerdown', function () {
      this.scene.scene.start(goTo);
    }.bind(this));
 
    this.button.on('pointerover', function () {
      this.button.setTint(0x629DD2)
    }.bind(this));
 
    this.button.on('pointerout', function () {
      this.button.setTint(0xffffff)
    }.bind(this));
 
    this.scene.add.existing(this);
  }
}

export default Button;