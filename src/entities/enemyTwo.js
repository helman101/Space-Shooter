import Entity from './entity';

class ChaserEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprChaserEnemy', 'chaserEnemy')
  }
}

export default ChaserEnemy;