const model = {

        //app
        //currentPage: 'login', // createUser, resultPage, leaderBoard, game
        currentPage: 'login', // createUser, resultPage, leaderBoard, game
        // currentUser: '',
        currentUser: "",
        userIndex: null, // satt for testing vanligvis null

        currentGameIndex: null, // satt for testing vanligvis null

        randomWord: "",
        color: ["red", "green", "#00FFFF","yellow","purple","orange","blue","pink","lightgreen" ],

        filterby: "",

       
        theNewArray : [],
        // currentAttempts: null,

        thisPlayer: "",

        //Input 
        // all the info from login and createuser will come into player, 
        // and every game info will come as an object inside the array games
        player: {
            userName: '',
            age: 0,
            password: '',
            repeatPassword: '',
        },

        guessedWord: {
            word: '',
            points: 0
        },

        difficulty:"",





        guessedWordList: [

        ],
        //  word and points are both properties of every attempt, 
        // they will be pushed in this array and printed together each time the player guessed a word.

        randomWordArray: [],
        // 'baker', 'bukse', 'jukse',
        //     'prate', 'åpent', 'årbok', 'kabel', 'kabin',
        //     'kamel', 'beist', 'kakse', 'angst', 'rødme',
        //     'skryte', 'bryst', 'kjole', 'falsk', 'først',
        //     'blits', 'kolbe', 'frisk', 'fersk', 'frost',
        //     'gripe', 'harde', 'heist', 'minst', 'morse'

        jsonWords: [],



        leaderBoardList: [

        ],

        wordsList5Letters: ""

    }
    // color on buttons, ok
    // leaderboard, the best result or the best average? ha en for begge, med knap for å se best spill og best gjennomsnitt 
    // input for each letter? no!
    // the guessed words sould be in a box with set colors for each field? Ok
    // can the guessed word have multible of the same letter? Ja
    // rolig nedtonet farger. 
    // vise hvordan 2 player ser ut for hver av spillerene 
    // https://ord.uib.no/bm/fil/lemma.json
    // ? i hjørnet med on over, med regler og forklaringer