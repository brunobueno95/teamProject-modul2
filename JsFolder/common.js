function logOut() {
    model.currentPage = 'login';
    model.currentUser = '';
    model.userIndex = 0;
    model.currentGameIndex = 0;
    model.guessedWordList.length = 0;
    // model.game.attempts = 0
    updateView();

}

async function checkJson() {
    let response = await fetch('https://ord.uib.no/bm/fil/lemma.json')
        .then((response) => response.json())
        .then((json) => model.randomWordArray.push(json));

    console.log(model.randomWordArray)


    getRightFromJson();
    updateView();
}

function getRightFromJson() {

    let jsonArray = model.randomWordArray[0];


    for (i = 0; i < jsonArray.length; i++) {

        //console.log(model.randomWordArray[0][i][0])
        model.jsonWords.push(jsonArray[i][0])


    }
    console.log(model.jsonWords)



    //   for(i = 0; i < model.randomWordArray[28].length; i++){
    //  console.log(model.randomWordArray[i][0])
    //  }
    // here we get the array with arrays of 3. then we need 2 make it array og arrays with 1
}
// gettekst()
// async function gettekst(){
//     let response = await fetch("Ordliste5Bokstaver.txt");
//     let text = await response.text()
//     let fjernNewlineOgDiv = await text.replace(/\r\n/g, " ")
//     let stringArray = await fjernNewlineOgDiv.toString().split(" "); 
//     console.log(stringArray)
// }




// json fil for ord liste med lister i lister i lister

// function getRightFromJson() {
//     console.log(model.randomWordArray)
//     let jsonArray = model.randomWordArray[28];

//     for (i = 0; i < jsonArray.length; i++) {

//         //console.log(jsonArray[i][0])
//         model.jsonWords.push(jsonArray[i][0])




//     }
//     console.log(model.jsonWords)

// }