function createUser() {


    let thisPlayer = model.playerList.find(player => player.userName == model.player.userName);

    if (thisPlayer) {
        alert("invalid user name")
    } else {

        checkPassword();
        GiveUserIndex();


        updateView();
    }


    function checkPassword() {


        if (model.player.password == model.player.repeatPassword) {
            const User = {};

            User.userName = model.player.userName;
            User.age = parseInt(model.player.age);
            User.password = model.player.password;
            User.game = [];
            User.result = [];
            model.currentPage = 'game';
            model.currentUser = User.userName;
            model.playerList.push(User);

            //GiveUserIndex()

        } else { alert('password dont match') }
    }
}

function checkIfisBlank() {
    if (model.player.userName.length === 0) {
        alert('bugs all day')
        return updateViewLogin()


    }
}

function GiveUserIndex() {
    model.userIndex = parseInt(model.playerList.length) - 1;
    model.currentGameIndex = 0;

}