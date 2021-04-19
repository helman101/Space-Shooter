import Phaser from 'phaser';
import laderBoardModule from '../APIs/laderBoard'

class PlayerInputScene extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  create() {
    this.model = this.sys.game.globals.model;

    let gameScore = localStorage.getItem('score');

    let div = document.createElement('div');
    let textInput = document.createElement('input');
    let submitButton = document.createElement('button');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder', 'Insert you name...');
    textInput.classList.add('text-input');
    textInput.required = true;
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submitButton')

    submitButton.addEventListener('click', () => {
      let name = textInput.value;
      laderBoardModule.setPlayer({user: name, score: gameScore})
      this.scene.start('GameOver');
    })

    div.appendChild(textInput);
    div.appendChild(submitButton);
    document.body.appendChild(div);

    let element = this.add.dom(this.game.config.width * 0.5, -400, div);
    element.setDepth(100);

    let image = this.add.image(300, 400, 'bgImage');
    image.setScale(0.4);
    
    let title = this.add.text(this.game.config.width * 0.5, 128, "Game Over", {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    let scoreText = this.add.text(this.game.config.width * 0.5, 300, `Score: ${gameScore}`, {
      fontFamily: 'FreeMono',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    title.setOrigin(0.5);
    scoreText.setOrigin(0.5);

  }
}

export default PlayerInputScene;
