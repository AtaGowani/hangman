var game = {}
var errorObj

// function to validate user input
game.validateInput = function (userInput, userGuesses) {
  if(!(userInput) || userInput.length != 1){
    console.log('Not a valid input.')
    $('#error').html('Please enter a valid input.')
    errorObj = Error('the inpout is npt okay.')
    console.log(errorObj)
    return false
  }
  else{
    console.log(userGuesses)
    for(var i = 0; userGuesses && i < userGuesses.length; i++){
      console.log('helloooo')
      if(userInput == userGuesses[i]){
        console.log('repeat')
        return false
      }
    }
    $('#error').html('')
    return true
  }
}

// function to select a word randomly
game.selectWord = function(randomWords){
  var index = Math.round(Math.random() * (randomWords.length - 1))
  return randomWords[index]
}

// function to convert word into a secret with _
game.convertToSecret = function (word){
  var secretWord = ''
  for (var i = 0; i < word.length; i++){
    secretWord += '_ '
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
  var hold = gameVariables.displayWord.replace(/ /g,'') //removes all spaces before storing
  gameVariables.displayWord = ''

  for(var i = 0; i < correctWord.length; i++){
    if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
      gameVariables.displayWord += correctWord[i] + ' '
    }
    else{
      gameVariables.displayWord += hold[i] + ' '
    }
  }
}