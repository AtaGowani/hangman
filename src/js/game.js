var game = {}

// function to validate user input
game.validateInput = function (userInput) {
  if(!(userInput) || userInput.length != 1){
    console.log('Not a valid input.')
    $('#error').html('Please enter a valid input.')
    return false
  }
  else{
    $('#error').html('')
    return true
  }
}

// function to select a word randomly
game.selectWord = function(randomWords){
  var index = Math.round(Math.random() * (randomWords.length - 1))
  return randomWords[index]
}

// function to convert word into a secret with *
game.convertToSecret = function (word){
  var secretWord = ''
  for (var i = 0; i < word.length; i++){
    secretWord += '*'
  }
    return secretWord
}

// function to check if the guess is correct
game.check = function(userGuess, correctWord) {
  //goes through each letter and sees if any match the input
  for(var i = 0; i < correctWord.length; i++){
    if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
      return true
    }
  }
  return false
}

//function to reveal letters that have matched
game.reveal = function(userGuess, gameVariables, correctWord) {
  var hold = gameVariables.displayWord
  gameVariables.displayWord = ''
  console.log('The function ran')

  for(var i = 0; i < correctWord.length; i++){
    if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
      console.log('guess was correct')
      gameVariables.displayWord += correctWord[i]
    }
    else{
      gameVariables.displayWord += hold[i]
    }
  }
}