import Phaser from 'phaser';
 
export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, normal, hover, text, goTo) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
 
    this.button = this.scene.add.sprite(0, 0, normal).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);
 
    this.add(this.button);
    this.add(this.text);
 
    this.button.on('pointerdown', function () {
      this.scene.scene.start(goTo);
    }.bind(this));
 
    this.button.on('pointerover', function () {
      this.button.setTexture(hover);
    }.bind(this));
 
    this.button.on('pointerout', function () {
      this.button.setTexture(normal);
    }.bind(this));
 
    this.scene.add.existing(this);
  }
}