import 'regenerator-runtime';

const laderBoardModule = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JEsLUihmCMuLpplPt45n/scores';

  const getScores = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  };

  const setPlayer = async (name, score) => {
    const player = {
      user: name,
      score,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  return { getScores, setPlayer };
})();

export default laderBoardModule;