let laderBoardModule = (() => {
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JEsLUihmCMuLpplPt45n/scores'

  let getScores = async () => {
    let result = await $.get(url);
    return result.result;
  }

  let setPlayer = async (player) => {
    let result = await $.post(url, player);
  }

  return { getScores, setPlayer}
})();