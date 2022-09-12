function logIn() {

let thisPlayer = model.playerList.find(user => user.userName == model.player.userName);
let thisPassword = model.playerList.find(user => user.password == model.player.password);
if(thisPlayer && thisPassword){
    model.currentUser = model.player.userName;
    
    findplayerIndex()
    findGameIndex()
    updateViewGame()
}


 }

function findplayerIndex(){

    let thisPlayer = model.playerList.find(player => player.userName == model.currentUser);
    if(thisPlayer){
        
        model.userIndex = model.playerList.indexOf(thisPlayer)
    }
   
}
function findGameIndex(){
    model.currentGameIndex = model.playerList[model.userIndex].game.length; // ??? 
    // SHOULD WE  try this ? 
    
    
}


