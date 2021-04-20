import Model from '../src/objects/model';

let model = 0;

beforeAll(() => {
  model = new Model();
});

describe('Sound controller', () => {
  it('creates a new Model', () => {
    expect(model.constructor === Model).toBe(true);
  });

  it('have musicOn property set to True', () => {
    expect(model.musicOn).toBe(true);
  });

  it('have soundOn property set to True', () => {
    expect(model.soundOn).toBe(true);
  });

  it('have bgMusicPlaying property set to False', () => {
    expect(model.bgMusicPlaying).toBe(false);
  });
});