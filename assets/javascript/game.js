  // All my Javascript for the program 
// Get rid of the ALERTS 
    var answers = ['red','blue', 'yellow', 'orange', 'purple'];
    var remainingGuesses = 6; // guesses remaining 
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
    	
    	remainingGuesses = 6;// restarting Game 
    	document.querySelector('div.answers').innerHTML ='';
    	solution(answers);// start a new game
        counter =0;
    	document.querySelector("div.errors").innerHTML = "";
    	console.log(blankAnswer);

    }
    // Function for what to do if we get an incorrect guess. If already a part of the array enter a new letter. Else guess is valid but still incorrect. 
    function checkWrongAnswers(userGuess){
    	
    	if(incorrectGuess.indexOf(userGuess) !==-1 ){
    			alert( "You already guessed '" + userGuess + "'. Guess a different Letter!");
    	}	else{
	    		console.log(incorrectGuess.indexOf(userGuess));
	    		incorrectGuess.push(userGuess);
	    		document.querySelector("div.errors").innerHTML = incorrectGuess.join(" ");
	 				alert(userGuess + " is not in the word. You have " + remainingGuesses + " tries remaining");
	      	remainingGuesses--;//reducing remaining counts
    		}
    	}// Close function
    
    //how to replace underscores if they are guesses.  
    //Indexof will only replace 1st instance.  Slice or Splice will remove element from array
    // function to check word for value and replace.  takes in answer & guess WHile loop 
    solution(answers);
    show(blankAnswer);
    
        document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();// Takes user development 
       // ask how to update and check for letters only I know it relates to specific characters code
            if( remainingGuesses > 0 ){
                if ( counter === charSplit.length){
                    alert( 'You win!');

                    reset(incorrectGuess);
                }else if(charSplit.indexOf(userGuess) !== -1 ){

                     CorrectGuess = charSplit.indexOf(userGuess);
                     replace(userGuess,charSplit);

                }else{

                    checkWrongAnswers(userGuess);
                }
            }else{
                alert("You Lose :( ");
                reset(incorrectGuess);

            }
 }// Colsing function event

   