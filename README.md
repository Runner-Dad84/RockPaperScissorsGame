# RockPaperScissorsGame
TOP: Rock Paper Scissors

1. Get the computer choice
	function getComputerChoice

	Generate a random decision
		Rock - 0-33%
		Paper - 34-66%
		Scissor - 67-100%

2. Ask for your the user choice.
	prompt for choice
	function getPlayerChoice is input
	return string value case insensitive

3. Compare user and computer choice.
	function playRound (playerSelection, computerSelection)

		Rock beats Scissor
		Paper beat Rock
		Scissor beats Paper

4. Declare winner

5. Play a game to five
	Reports results
	function game() calls playRound
