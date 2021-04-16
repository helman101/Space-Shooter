import Entity from './entity';

class NormalEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprNormalEnemy', 'normalEnemy')
  }
}

export default NormalEnemy;