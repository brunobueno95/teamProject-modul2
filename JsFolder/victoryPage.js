function updateViewWin() {
    console.log('running')
    document.getElementById('app').innerHTML = `
    Logget inn som: ${model.currentUser}
    <button onclick="logOut()">Logg ut</button><br>
    <button onclick="generateRandomWord(); createGameObject()">Spill Igjen</button>
    <button onclick="updateViewResult()">Resultat</button>
    <button onclick="updateViewLeaderBoard()">Poengtavle</button><br>
    <h2>Gratulerer du vant på  
    ${model.playerList[model.userIndex].game[model.currentGameIndex].attempts}. 
    forsøk!</h2><br>
    <h2>Med ordet: ${model.randomWord}.`;





}