import laderBoardModule from '../src/APIs/laderBoard';

jest.mock('../src/APIs/laderBoard');

describe('API Module Fuctionality', () => {
  beforeAll(() => {
    laderBoardModule.getScores.mockResolvedValue({
      result: [{
        user: 'Good',
        score: 1000,
      },
      {
        user: 'Bad',
        score: 899,
      },
      {
        user: 'Ugly',
        score: 45,
      },
      ],
    });

    laderBoardModule.setPlayer.mockResolvedValue({
      result: 'Leaderboard score created correctly.',
    });
  });

  it('returns an Array with all the players and the scores', async () => {
    const players = await laderBoardModule.getScores();
    expect(Array.isArray(players.result)).toBe(true);
  });


  it('returns the information of the Players', async () => {
    const players = await laderBoardModule.getScores();
    expect(players.result[0].user).toEqual('Good');
    expect(players.result[0].score).toEqual(1000);
  });

  it('Save the player score into the API', async () => {
    const message = await laderBoardModule.setPlayer('Happy', 101);
    expect(message.result).toMatch('Leaderboard score created correctly.');
  });
}); 