let laderBoardModule = (() => {
  let getScores = async () => {
    let result = await $.get(scoresURL);
    return result.result;
  }

  let setPlayer = async (player) => {
    let result = await $.post(scoresURL, player);
  }

  return { getScores, setPlayer}
})();