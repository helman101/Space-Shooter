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
      scores = scores.result.sort((a,b) => b.score - a.score)
      let y = 200;
      let length = (scores.length >= 10) ? 10 : scores.length;

      for (let i = 0; i < length; i+=1 ){
        let score = this.add.text(300, y, `${scores[i].user}............${scores[i].score}`, { fontSize: '25px', fill: '#fff' });
        score.setOrigin(0.5, 0.5)
        y += 50;
      }
    }

    showScores();
  }
}

export default ScoreScene