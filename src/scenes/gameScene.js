import Phaser from 'phaser';
import Player from '../entities/playerEntity';
import NormalEnemy from '../entities/normalEnemy';
import ChaserEnemy from '../entities/chaserEnemy';
import FastEnemy from '../entities/fastEnemy';
import laserUpdate from '../helper/laserUpdate';
import getEnemiesByType from '../helper/enemyHelper';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.sys.game.globals.bgMusic.stop();
    this.model.bgMusicPlaying = false;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('mainTheme', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    let score = 0;

    this.sfx = {
      explosions: [
        this.sound.add('explosion1'),
        this.sound.add('explosion2'),
      ],
      laser: this.sound.add('laser', { volume: 0.3 }),
    };

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.add.image(300, 400, 'bgImage');


    const scoreCont = this.add.image(110, 40, 'scoreContainer');
    scoreCont.scaleX = 0.8;
    scoreCont.scaleY = 0.6;

    scoreCont.depth = 100;
    const scoreText = this.add.text(0, 0, 'Score: 0', {
      fontFamily: 'FreeMono', fontSize: '18px', fontStyle: 'bold', fill: '#fff',
    });
    scoreText.depth = 101;
    Phaser.Display.Align.In.Center(scoreText, scoreCont);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyBullets = this.add.group();
    this.playerBullets = this.add.group();

    this.time.addEvent({
      delay: 1500,
      callback() {
        let enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new NormalEnemy(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          );
        } else if (Phaser.Math.Between(0, 10) >= 5 && score >= 100) {
          if (getEnemiesByType(this, 'ChaserShip').length < 5) {
            enemy = new ChaserEnemy(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          }
        } else if (score >= 500) {
          enemy = new FastEnemy(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0,
          );
        }

        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprPlayer',
    );

    this.physics.add.collider(this.playerBullets, this.enemies, (playerBullet, enemy) => {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
        score += enemy.points;
        scoreText.setText(`Score: ${score}`);
        window.localStorage.setItem('score', score);
        Phaser.Display.Align.In.Center(scoreText, scoreCont);
        enemy.explosion(true);
        playerBullet.destroy();
      }
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead') && !enemy.getData('isDead')) {
        player.explosion(false);
        player.onDestroy();
        enemy.explosion(true);
      }
    });

    this.physics.add.overlap(this.player, this.enemyBullets, (player, enemyBullet) => {
      if (!player.getData('isDead') && !enemyBullet.getData('isDead')) {
        player.explosion(false);
        player.onDestroy();
        enemyBullet.destroy();
      }
    });
  }

  update() {
    if (!this.player.getData('isDead')) {
      this.player.update();

      if (this.cursors.up.isDown) {
        this.player.moveUp();
      } else if (this.cursors.down.isDown) {
        this.player.moveDown();
      }

      if (this.cursors.left.isDown) {
        this.player.moveLeft();
      } else if (this.cursors.right.isDown) {
        this.player.moveRight();
      }

      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    }


    laserUpdate(this, this.enemies.getChildren(), 'enemy');
    laserUpdate(this, this.enemyBullets.getChildren(), 'laser');
    laserUpdate(this, this.playerBullets.getChildren(), 'laser');
  }
}

export default GameScene;