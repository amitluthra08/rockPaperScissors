console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Enter a valid input.');
  }
}

const getComputerChoice = () => {
  const temp = Math.floor(Math.random()*3);
  switch (temp) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'bloodly hell!';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User has won!';
  }
  if (userChoice === computerChoice) {
    return 'The game is tied!';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  } 
}

const playGame = () => {
  const userChoice = getUserChoice('Bomb');
  const computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
