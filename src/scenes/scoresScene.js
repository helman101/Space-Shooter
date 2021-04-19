import Phaser from 'phaser';
import laderBoardModule from '../APIs/laderBoard';
import Button from '../objects/button';
import config from '../config/config';

class ScoreScene extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  create() {
    let image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);

    this.gameButton = new Button(this, config.width/2, config.height/2 + 300, 'spaceButton', 'Menu', 'Title');

    let title = this.add.text(300, 100, 'Leader Board', { fontSize: '35px', fill: '#fff' })
    title.setOrigin(0.5, 0.5)

    let showScores = async () => {
      let scores = await laderBoardModule.getScores();
      console.log(scores)
      let y = 200;

      for (let i = 0; i < 10; i+=1 ){
        let score = this.add.text(300, y, `${scores.result[i].user}............${scores.result[i].score}`, { fontSize: '25px', fill: '#fff' });
        score.setOrigin(0.5, 0.5)
        y += 50;
      }
    }

    showScores();
  }
}

export default ScoreScene