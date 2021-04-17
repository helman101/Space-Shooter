let laserUpdate = (scene, group, type) => {
  for (var i = 0; i < group.length; i++) {
    var obj = group[i];
    obj.update();

    if (obj.x < -obj.displayWidth ||
      obj.x > scene.game.config.width + obj.displayWidth ||
      obj.y < -obj.displayHeight * 4 ||
      obj.y > scene.game.config.height + obj.displayHeight) {
    
      if (obj) {
        if (obj.onDestroy !== undefined && type == 'enemy') {
          obj.onDestroy();
        }
        
        obj.destroy();
      }
    }
  }
}

export default laserUpdate;