const laserUpdate = (scene, group, type) => {
  for (let i = 0; i < group.length; i += 1) {
    const obj = group[i];
    obj.update();

    if (obj.x < -obj.displayWidth
      || obj.x > scene.game.config.width + obj.displayWidth
      || obj.y < -obj.displayHeight * 4
      || obj.y > scene.game.config.height + obj.displayHeight) {
      if (obj) {
        if (obj.onDestroy !== undefined && type === 'enemy') {
          obj.onDestroy();
        }

        obj.destroy();
      }
    }
  }
};

export default laserUpdate;