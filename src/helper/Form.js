import laderBoardModule from '../APIs/laderBoard';

const nameForm = (scene, goTo, score) => {
  const div = document.createElement('div');
  const textInput = document.createElement('input');
  const submitButton = document.createElement('button');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'Insert you name...');
  textInput.classList.add('text-input');
  textInput.required = true;
  submitButton.textContent = 'Submit';
  submitButton.classList.add('submitButton');

  submitButton.addEventListener('click', () => {
    const name = textInput.value;
    laderBoardModule.setPlayer(name, score);
    if (name !== '') {
      scene.scene.start(goTo);
    }
  });

  div.appendChild(textInput);
  div.appendChild(submitButton);

  return div;
};

export default nameForm;