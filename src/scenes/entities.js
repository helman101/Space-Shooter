import Phaser from 'phaser';

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, type){
    super(scene, x, y, texture)
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
  }
}

class Player extends Entity {
  constructor(scene, x, y, texture){
    super(scene, x, y, texture, 'player');
    this.setData('speed', 180);
  }
}
