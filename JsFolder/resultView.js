function updateViewResult() {
    document.getElementById('app').innerHTML = `
   Logget inn som: ${model.currentUser}
   <button onclick="logOut()">Logg ut</button><br>
   
   <button onclick="updateViewGame()">Spill igjen</button>
   <button onclick="updateViewResult()">Resultat</button>
   <button onclick="updateViewLeaderBoard()">Poengtavle</button>
   <h2>Resultat</h2><hr>

   
    ${createResultHtml()}
   

   `;
}

function compareAttempts(a, b) {
    return a.attempts - b.attempts;
}

function createResultHtml() {

    let html = ``;

  
    let thisPlayer = model.playerList.find(player => player.userName == model.currentUser);
    let FinishedGames = thisPlayer.game.filter(game => game.finished == true)
    if (thisPlayer  ) {
     
        FinishedGames.sort(compareAttempts);

        html += ` 
        Ditt gjennomsnitt: ${averageAttempts()}<br><hr>
        
        
        
        Ditt beste spill: <div>
        <p> Spillnr: ${FinishedGames[0].gameNumber}</p>
        <p> Ord: ${FinishedGames[0].word}</p>
        <p> Dato: ${FinishedGames[0].date}</p>
        <p> Forsøk: ${FinishedGames[0].attempts}</p><hr>
         </div>
         
         Ditt dårligste spill: <div>
         <p> Spillnr: ${FinishedGames[FinishedGames.length -1].gameNumber}</p>
         <p> Ord: ${FinishedGames[FinishedGames.length -1].word}</p>
         <p> Dato: ${FinishedGames[FinishedGames.length -1].date}</p>
         <p> Forsøk: ${FinishedGames[FinishedGames.length -1].attempts}</p><hr>
          </div> `;
    }



    return html;

}



function averageAttempts() {
    let thisPlayer = model.playerList.find(player => player.userName == model.currentUser)
    let FinishedGames = thisPlayer.game.filter(game => game.finished == true)
    let totalAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }));
    
    let fullNumber = Math.round(totalAttempts.attempts / FinishedGames.length)
    return Math.round(fullNumber)

}



// function check(){
//     for (i=0;i<model.playerList.length;i++){
//         console.log(model.playerList[i].game.sort(compareAttempts));

//      }
// }

//for(let i = 0; i < model.playerList[userIndex].game[i].attempts.length; i++){
//  let attempts list = []
// 
//}