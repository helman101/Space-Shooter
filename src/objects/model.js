class Model {
  constructor() {
    this._score = '0';
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }
 
  set musicOn(value) {
    this._musicOn = value;
  }
 
  get musicOn() {
    return this._musicOn;
  }
 
  set soundOn(value) {
    this._soundOn = value;
  }
 
  get soundOn() {
    return this._soundOn;
  }
 
  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }
 
  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

  set score(value) {
    this._musicOn = value;
  }
 
  get score() {
    return this._musicOn;
  }
}

export default Model;