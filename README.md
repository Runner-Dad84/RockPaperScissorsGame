# RockPaperScissorsGame
TOP: Rock Paper Scissors

1. Get the computer choice
	function getComputerChoice

	Generate a random decision
		Rock - 0-33%
		Paper - 34-66%
		Scissor - 67-100%

2. Ask for the user choice.
	prompt for choice
	store choice to playerSelection
2b.
	Sting input to playerSelection
	Return string value case insensitive 

3. Compare user and computer choice.
	function playRound (playerSelection, computerSelection)
		Player choice vs. Computer Choice
		rock beats scissor
		rock loses to paper
		paper beats beats rock
		paper loses to scissors
		scissors beats paper
		scissors loses to rock
		player choice equals computer choice, tie

4. Declare winner

5. Play a game to five
	Reports results
	function game() calls playRound
