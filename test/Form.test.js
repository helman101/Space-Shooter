import nameForm from '../src/helper/Form';

describe('Form creator', () => {
  it('return a div', () => {
    let score = 105;
    const result = nameForm('fromScene', 'toScene', score)
    expect(result.tagName).toMatch('DIV');
  })

  it('has a button and a text input', () => {
    let score = 105;
    const result = nameForm('fromScene', 'toScene', score)
    expect(result.hasChildNodes('button')).toBe(true);
    expect(result.hasChildNodes('input')).toBe(true);
  })
})