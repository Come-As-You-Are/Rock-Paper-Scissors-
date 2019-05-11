var person = prompt("Please Enter your Name:");
const personalize = document.querySelector('.player-score h2');
personalize.textContent = person;
const game =()=> {
    //function that contains whole game
    //scoping everything inside this function; no global variables
    //self-containing all your code so no outside can reach it
    let pScore = 0;
    let cScore = 0;
   
    
    
    //start game function...
   const startGame = () => {
   
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
       
        
        
        playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            
        });
    };
    //play match: everything revolves around playing the game
    
    const playMatch = () => {
    
        //need options: rock/paper/scissors
        //player options
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand');
        //get the computer's options:
        //random generated..
        //associated generated number to symbols
        const computerOptions = ['rock', 'paper', 'scissors'];
        //get buttons: dont want this to run until buttons are clicked
        options.forEach((option=>{
            
            //each button, event listener
            option.addEventListener("click", function(){
                //computers choice
                 const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice);
                //player options: needed as well
                //comparison function needed..
                //feed choice we made: compare who is winning
                playerHand.src = `./assets/${this.textContent}.png`
                //text content of the button
                computerHand.src = `./assets/${computerChoice}.png`
                console.log(computerChoice);
                
            });
        }));
       
        //generate a random number between 0 and 2
        
    };
    
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
        //call this function whenever choice gets made
    }
    const compareHands = (playerChoice, computerChoice) =>{
        //call compare hands function
        //update text to show winner
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
            //end function
            
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = person + " wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            
        }
        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = person + " wins!";
                pScore++;
                updateScore();
                return;
            }
            
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = person + " wins!";
                 pScore++;
                updateScore();
                return;
            }
            
        }
        
    }
    
    startGame();
    playMatch();
    
   
  
};
game();

 
