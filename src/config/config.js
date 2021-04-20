import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 600,
  height: 800,
  title: 'Space Avenger',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  dom: {
    createContainer: true,
  },
  pixelart: true,
  roundPixels: true,
  canvasStyle: 'margin: 0 auto;',
};