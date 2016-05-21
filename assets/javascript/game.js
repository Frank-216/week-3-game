  // All my Javascript for the program 
// Get rid of the ALERTS 
    var answers = ['targaryen', 'stark', 'baratheon', 'martell','greyjoy','arryn','tully','lannister'];
    var remainingGuesses = 8; // guesses remaining 
    var round = 0; // round 
    var charSplit;
    var rand;
    var blankAnswer;
    var CorrectGuess;
    var incorrectGuess = [];
    var counter = 0;
    var illegalCharacters =[];


    // split the solution & display the correct number of letters of the solution.
    function solution(myArray){
        rand = myArray[Math.floor(Math.random()* myArray.length)];
        console.log(rand);
        charSplit = rand.split('');
        console.log(charSplit);
        blankAnswer = [];
        for(var i = 0; i < charSplit.length; i++){
            blankAnswer[i] = " _ ";
        }
        console.log(blankAnswer)
    }// Close Solution 

    //initial display or guess now I may need to recall if 
    function show(blankAnswer){
    	document.querySelector("div.answers").innerHTML = blankAnswer.join(" ");
	
    }
    function replace(userGuess, charSplit){
        // The if statement asks if you have already guest that letter.  if not continues. If it is already in the answer 
        if(blankAnswer.indexOf(userGuess) == -1){
            for (var i = 0; i < charSplit.length; i++) {
                if( charSplit[i] === userGuess){
                 blankAnswer[i] = userGuess;
                  counter++;
                  console.log(counter);
            }
         }
        
        }
    	//letter = charSplit.indexOf(userGuess);
    	//blankAnswer[letter] = userGuess;
    	document.querySelector("div.answers").innerHTML = blankAnswer.join(" ");

    }
    function reset(incorrectGuess){
       console.log(incorrectGuess);
    	for (var i = 0; i < incorrectGuess.length; i++){
    		incorrectGuess[i] = " _ ";
    	}
    	userGuess = null;// empties user guess
    	
    	remainingGuesses = 8;// restarting Game 
    	document.querySelector('div.answers').innerHTML ='';
    	solution(answers);// start a new game
        counter =0;
    	document.querySelector("div.errors").innerHTML = "";
    	console.log(blankAnswer);

    }
    // Function for what to do if we get an incorrect guess. If already a part of the array enter a new letter. Else guess is valid but still incorrect. 
    function checkWrongAnswers(userGuess){
    	
    	if(incorrectGuess.indexOf(userGuess) !==-1 ){
    			document.querySelector('div.info').innerHTML =  ("You already guessed '" + userGuess + "'. Guess a different Letter!");
    	}	else{
	    		console.log(incorrectGuess.indexOf(userGuess));
	    		incorrectGuess.push(userGuess);
	    		document.querySelector("div.errors").innerHTML = incorrectGuess.join(" ");
	 		    document.querySelector('div.info').innerHTML =("'" + userGuess + "' is not in the word. You have " + remainingGuesses + " tries remaining");
	      	remainingGuesses--;//reducing remaining counts
    		}
    	}// Close function
        function music() {
           
    myMusic.play();
    myGameArea.start();
}



    //how to replace underscores if they are guesses.  
    //Indexof will only replace 1st instance.  Slice or Splice will remove element from array
    // function to check word for value and replace.  takes in answer & guess WHile loop 
    solution(answers);

    show(blankAnswer);

        // On key Look up 
        document.onkeyup = function(event) {
            // First if to check if the button is a letter. 
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                // Sets var userGuess to a string that is crom the event, also makes it lowercase. 
                var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
                // if remaining Guess is not 0 continue.   
                if( remainingGuesses > 0 ){
                    // check if you win.  Length of counter will be equal to length of charSplit 
                    if ( counter === charSplit.length){
                        document.querySelector('div.info').innerHTML = ("<h1> YOU WIN!!!</h1>");
                        reset(incorrectGuess);
                        // Check is userGuess is part of the charsplit 
                    }else if(charSplit.indexOf(userGuess) !== -1 ){

                         
                         document.querySelector('div.info').innerHTML = userGuess + " is correct keep going!" ;
                         // Calls function replace to make the visual change. 
                         replace(userGuess,charSplit);

                     }else{

                      checkWrongAnswers(userGuess);
                     }
              }else{
                document.querySelector('div.info').innerHTML = ('<h1> YOU LOSE :( the correct answer was ' + rand + "!</h1>" );
                reset(incorrectGuess);
            } 
        }
            else {                 

                document.querySelector(".info").innerHTML = "please press a letter";             
            }
      
       // ask how to update and check for letters only I know it relates to specific characters code
            
 }// Colsing function event

   