function checkWord() {

    if (model.guessedWord.word.length == model.randomWord.length) {
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts++
            //model.currentAttempts++
            //model.game.attempts++ //
            model.guessedWord.points = 0

        let splitedGuessedWord = ""
        let splitedrandomWord = ''

        splitedGuessedWord = model.guessedWord.word.split('')
        splitedrandomWord = model.randomWord.split('')


        for (i = 0; i < splitedrandomWord.length; i++) {
            if (splitedGuessedWord[i] == splitedrandomWord[i]) {
                model.guessedWord.points++

            }

        }
        if (model.guessedWord.word == model.randomWord) {
            model.playerList[model.userIndex].game[model.currentGameIndex].finished = true


            console.log('game finished');
            model.currentPage = 'win';
            model.guessedWord.word = '';
            updateView();

        } else {

            checkGuessedWord();
            zeroPoints()
            model.guessedWord.word = '';
            updateViewGame()
        }





    } else {
        alert("Ordet du gjetter må være på " + model.difficulty + " bokstaver!")
    }

}

function checkGuessedWord() {
    let filteredWords = model.jsonWords.filter(i => !i.includes("-") && !i.includes(" ") && !i.includes("."))
    if(model.difficulty == "fem"){
            let array5Letters = filteredWords.filter(i => i.length == 5)
     if (array5Letters.includes(model.guessedWord.word)) {
            model.guessedWord.word
            pushGuessedWord(); }   
            else {
            alert('må gjette et ord')
            model.playerList[model.userIndex].game[model.currentGameIndex].attempts--}
    }
    if(model.difficulty == "syv"){
        let array7Letters = filteredWords.filter(i => i.length == 7)
    if (array7Letters.includes(model.guessedWord.word)) {
        model.guessedWord.word
        pushGuessedWord(); }   
        else {
        alert('må gjette et ord')
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts--}
}
    if(model.difficulty == "ni"){
        let array9Letters = filteredWords.filter(i => i.length == 9)
    if (array9Letters.includes(model.guessedWord.word)) {
        model.guessedWord.word
        pushGuessedWord(); }   
        else {
        alert('må gjette et ord')
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts--}
    }

    
}

//start
function generateRandomWord() {
    let filteredWords = model.jsonWords.filter(i => !i.includes("-") && !i.includes(" ") && !i.includes("."))

    if( model.difficulty == "fem"){
        let array5Letters = filteredWords.filter(i => i.length == 5)
        let newWordList = array5Letters.filter(i => i != model.randomWord);
        let random = Math.floor(Math.random() * newWordList.length);
        model.randomWord = newWordList[random];
        checkRandomWord()
        console.log(model.randomWord)
    }
    if(model.difficulty == "syv"){
        let array7Letters = filteredWords.filter(i => i.length == 7)
        let newWordList = array7Letters.filter(i => i != model.randomWord);
        let random = Math.floor(Math.random() * newWordList.length);
        model.randomWord = newWordList[random];
        checkRandomWord();
        console.log(model.randomWord)
    }
    if(model.difficulty == "ni"){
        let array9Letters = filteredWords.filter(i => i.length == 9)
        let newWordList = array9Letters.filter(i => i != model.randomWord);
        let random = Math.floor(Math.random() * newWordList.length);
        model.randomWord = newWordList[random];
        checkRandomWord();
        console.log(model.randomWord)
    }
    



}

function checkRandomWord() {
    if (separateAndCheckLetters()) {
        model.randomWord
    } else {
        generateRandomWord();
    }
}

function separateAndCheckLetters() {
    let letters = model.randomWord.split("");
    //let thisLetter = letters.some(letter => letter == "A");
    for (i = 0; i < letters.length; i++) {
        for (j = i + 1; j < letters.length; j++) {
            if (letters[i] == letters[j]) {
                return false
            }
        }
    }
    return true

}



function zeroPoints() {
    model.guessedWordList.points = 0;
}




function createGameObject() {
    let gameobject = {};
    let today = new Date();
    let dateOfGame = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    gameobject.gameNumber = model.playerList[model.userIndex].game.length + 1;
    gameobject.date = dateOfGame;
    gameobject.attempts = 0;
    model.currentGameIndex = model.playerList[model.userIndex].game.length
    gameobject.word = model.randomWord;
    gameobject.finished = false;
    //oppdater riktig gameindex
    model.playerList[model.userIndex].game.push(gameobject);
    // model.currentAttempts = model.playerList[model.userIndex].game[model.currentGameIndex].attempts


    //empty guessedWordList
    model.guessedWordList.length = 0



    updateViewGame();
}




function pushGuessedWord() {

    model.guessedWordList.push({
        word: model.guessedWord.word,
        points: model.guessedWord.points
    })

}






// gettekst()
// async function gettekst(){
//     let response = await fetch("Ordliste5Bokstaver.txt");
//     let text = await response.text()
//     let fjernNewlineOgDiv = await text.replace(/\r\n/g, " ")
//     let stringArray = await fjernNewlineOgDiv.toString().split(" "); 
//     model.wordsList5Letters = stringArray 
// }
// +
// function pushGames() {



//     for (i = 0; i < model.playerList.length; i++) {
//         if (model.playerList[i].game.gotPushed = false) {
//             model.leaderBoardList.push.apply(model.leaderBoardList, model.playerList[i].game);
//             model.playerList[i].gamegotPushed = true
//             console.log('hello')
//         }





//     }

//     model.leaderBoardList.sort(compareAttempts)



// }





function changeColor(index) {


if( model.difficulty == "fem") { 
    model.theNewArray[index].clicks++
        
    if (model.theNewArray[index].clicks == 0) {
        model.theNewArray[index].color = ''
    }
    if (model.theNewArray[index].clicks == 1) {
        model.theNewArray[index].color = "red"
    }
    if (model.theNewArray[index].clicks == 2) {
        model.theNewArray[index].color = 'green'
    }
    if (model.theNewArray[index].clicks == 3) {
        model.theNewArray[index].color = '#00FFFF'
    }
    if (model.theNewArray[index].clicks == 4) {
        model.theNewArray[index].color = 'yellow'
    }

    if (model.theNewArray[index].clicks == 5) {
        model.theNewArray[index].color = 'purple'

    }
    if (model.theNewArray[index].clicks == 6) {
        model.theNewArray[index].color = 'black'

    }
    if (model.theNewArray[index].clicks == 7) {
        model.theNewArray[index].color = ''
        model.theNewArray[index].clicks = 0
    } 
    updateViewGame(); }


    if(model.difficulty == "syv")
    {
        model.theNewArray[index].clicks++
        console.log(model.clicks)
    if (model.theNewArray[index].clicks == 0) {
        model.theNewArray[index].color = ''
    }
    if (model.theNewArray[index].clicks == 1) {
        model.theNewArray[index].color = "red"
    }
    if (model.theNewArray[index].clicks == 2) {
        model.theNewArray[index].color = 'green'
    }
    if (model.theNewArray[index].clicks == 3) {
        model.theNewArray[index].color = '#00FFFF'
    }
    if (model.theNewArray[index].clicks == 4) {
        model.theNewArray[index].color = 'yellow'
    }

    if (model.theNewArray[index].clicks == 5) {
        model.theNewArray[index].color = 'purple'

    }
    if (model.theNewArray[index].clicks == 6) {
        model.theNewArray[index].color = 'orange'

    }
    if (model.theNewArray[index].clicks == 7) {
        model.theNewArray[index].color = 'blue'
       
    }   if (model.theNewArray[index].clicks == 8) {
        model.theNewArray[index].color = 'black'
       
    }  
    if (model.theNewArray[index].clicks == 9) {
        model.theNewArray[index].color = ''
        model.theNewArray[index].clicks = 0
    }  
    updateViewGame();
    
}
if(model.difficulty == "ni")
{
    model.theNewArray[index].clicks++
    console.log(model.clicks)
if (model.theNewArray[index].clicks == 0) {
    model.theNewArray[index].color = ''
    model.theNewArray[index].clicks = 0
}
if (model.theNewArray[index].clicks == 1) {
    model.theNewArray[index].color = "red"
}
if (model.theNewArray[index].clicks == 2) {
    model.theNewArray[index].color = 'green'
}
if (model.theNewArray[index].clicks == 3) {
    model.theNewArray[index].color = '#00FFFF'
}
if (model.theNewArray[index].clicks == 4) {
    model.theNewArray[index].color = 'yellow'
}

if (model.theNewArray[index].clicks == 5) {
    model.theNewArray[index].color = 'purple'

}
if (model.theNewArray[index].clicks == 6) {
    model.theNewArray[index].color = 'orange'

}
if (model.theNewArray[index].clicks == 7) {
    model.theNewArray[index].color = 'blue'
   
}   if (model.theNewArray[index].clicks == 8) {
    model.theNewArray[index].color = 'pink'
   
}  
if (model.theNewArray[index].clicks == 9) {
    model.theNewArray[index].color = 'lightgreen'
   
}  
if (model.theNewArray[index].clicks == 10) {
    model.theNewArray[index].color = 'black'
   
}  
if (model.theNewArray[index].clicks == 10) {
    model.theNewArray[index].color = ''
    model.theNewArray[index].clicks = 0
   
}  
updateViewGame();
}

    



}