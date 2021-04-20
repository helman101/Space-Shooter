import Phaser from 'phaser';
import Entity from './entity';

class BossEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprBossEnemy', 'bossEnemy');
    this.life = 150;
    this.setScale(5)
    this.points = 100;
  }


}

export default BossEnemy;