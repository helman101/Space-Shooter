import Entity from './entity';

class FastEnemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprFastEnemy', 'fastEnemy')
  }
}

export default FastEnemy;