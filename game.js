    let choices=["rock","paper","scissors"]
    let playerDisplay = documnet.getElementById("playerDisplay");
    let computerDisplay = document.getElementById("computerDisplay");
    let resultDisplay = document.getElementById("computerDisplay");
    let playerScoreDisplay=document.getElementById("playerScoreDisplay")
    let computerScoreDisplay=document.getElementById("computerrScoreDisplay")
    let playerScore=0;
    let computerScore=0;

    function playGame(PlayerChoice){
        let computerChoice = choices[Math.floor(Math.random()* 3)]
        let result="";  
        if(PlayerChoice === computerChoice){
            result= "IT'S A TIE!"
        }
        else{
            switch(PlayerChoice){
                case"rock":
                (computerChoice==="scissors")? "YOU WIN": "YOU LOSE";
                break;
                case"paper":
                (computerChoice==="rock")? "YOU WIN": "YOU LOSE";
                break;
                case"scissors":
                (computerChoice==="paper")? "YOU WIN": "YOU LOSE";
                break;


            }
        }
        playerDisplay.textcontent = `Player:${PlayerChoice}`;
        playerDisplay.textcontent = `Computer:${PlayerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText","redText")
        
        switch(result){
            case " YOU WIN!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent =playerScore;
                break
                case " YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent =computerScore;
                break
        }
    }
    