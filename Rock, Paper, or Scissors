const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper')
    return userInput;
  console.log('ERROR: INVALID INPUT!!!');
}
const getComputerChoice = () => {
  switch(Math.floor(Math.random() * 3)){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice)
    return 'Game is tie';
  if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock'))
    return 'Computer is the winner!!!';
  else
    return 'Human is the winner!!!';
}
const playGame = () => {
  let userChoice = getUserChoice('asb');
  if (!userChoice)
    return false;
  let computerChoice = getComputerChoice();
	console.log(`user choice is ${userChoice}.`);
  console.log(`computer choice is ${computerChoice}.`);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
