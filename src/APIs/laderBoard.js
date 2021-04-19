import 'regenerator-runtime';

let laderBoardModule = (() => {
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JEsLUihmCMuLpplPt45n/scores'

  let getScores = async () => {
    let result = await fetch(url)
    let data = await result.json();
    console.log(data.result)
    return data
  }

  let setPlayer = async (name, score) => {
    const player = {
      user: name,
      score: score,
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
      console.log(data)
      return data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  return { getScores, setPlayer }
})();

export default laderBoardModule;