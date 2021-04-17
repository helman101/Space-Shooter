import Phaser from 'phaser';
import Player from '../entities/playerEntity'
import NormalEnemy from '../entities/normalEnemy'
import ChaserEnemy from '../entities/chaserEnemy'
import FastEnemy from '../entities/fastEnemy'
import laserUpdate from '../objects/laserUpdate'

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }

  create() {
    // add background image to scene
    let image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    // add functional keyboards to move the player
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyBullets = this.add.group();
    this.playerBullets = this.add.group();

    this.time.addEvent({
      delay: 1500,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new NormalEnemy(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {

            enemy = new ChaserEnemy(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new FastEnemy(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true
    });

    // create and add the player to the scene
    this.player = new Player(
      this, 
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprPlayer'
    );

    this.physics.add.collider(this.playerBullet, this.enemies, function(playerBullet, enemy) {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
      
        enemy.explode(true);
        playerLaser.destroy();
      }
    });
  }

  update() {
    this.player.update();

    if (this.cursors.up.isDown) {
      this.player.moveUp();
    }
    else if (this.cursors.down.isDown) {
      this.player.moveDown();
    }

    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    }
    else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }

    if (this.keySpace.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }

    laserUpdate(this, this.enemies.getChildren(), 'enemy');
    laserUpdate(this, this.enemyBullets.getChildren(), 'laser');
    laserUpdate(this, this.playerBullets.getChildren(), 'laser');
  }
}

export default GameScene;