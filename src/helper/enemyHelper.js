const getEnemiesByType = (scene, type) => {
  const arr = [];
  for (let i = 0; i < scene.enemies.getChildren().length; i += 1) {
    const enemy = scene.enemies.getChildren()[i];
    if (enemy.getData('type') === type) {
      arr.push(enemy);
    }
  }
  return arr;
};

export default getEnemiesByType;