// logic inside game
const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const maxMoves = 10;

    // selecting elements
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');

    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    const movesLeft = document.querySelector('#movesLeft');
    const result = document.querySelector('#result');
    const playerScoreBoard = document.querySelector('#playerScore');
    const computerScoreBoard = document.querySelector('#computerScore');
    const chooseMove = document.querySelector('.move');
    const resetBtn = document.querySelector('#reset');

    // play game
    const playGame = () => {

        playerOptions.forEach(option => {

            option.addEventListener('click', function () {

                moves++;

                // update moves left
                movesLeft.innerText = maxMoves - moves;

                // computer random choice
                const choiceNumber = Math.floor(Math.random() * 3);//computer options length is 3 so we multiply by 3 to get a number between 0 and 2
                const computerChoice = computerOptions[choiceNumber];

                // player choice
                const playerChoice = this.innerText.toLowerCase();//toLowerCase() to convert the player's choice to lowercase so it matches the computer's choice   because the computer's choice is in lowercase

                // winner check
                winner(playerChoice, computerChoice);

                // game over after max moves
                if (moves === maxMoves) {
                    gameOver();//call the gameOver function when the number of moves reaches the maximum allowed moves
                }

            });

        });

    };

    // winner logic
    const winner = (player, computer) => {

        if (player === computer) {

            result.innerText = `Tie Both chose ${player}`;

        }

        else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {

            playerScore++;
            playerScoreBoard.innerText = playerScore;

            result.innerText =
                `Player Won! ${player} beats ${computer}`;

        }

        else {

            computerScore++;
            computerScoreBoard.innerText = computerScore;

            result.innerText =
                `Computer Won! ${computer} beats ${player}`;

        }

    };

    // game over
    const gameOver = () => {

        // disable buttons
        playerOptions.forEach(option => {
            option.disabled = true;
        });

        chooseMove.innerText = 'Game Over';

        // final result
        if (playerScore > computerScore) {

            result.innerText = 'You Won The Game!';
            result.style.color = 'green';

        }

        else if (computerScore > playerScore) {

            result.innerText = 'You Lost The Game!';
            result.style.color = 'red';

        }

        else {

            result.innerText = 'Game Tie!';
            result.style.color = 'gray';

        }

        // reset button
        resetBtn.innerText = 'Restart';

        resetBtn.addEventListener('click', () => {
            window.location.reload();
        });

    };

    playGame();

};

game();