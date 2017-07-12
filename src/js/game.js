var game = {}
var errorObj

// Function to select a word randomly
game.selectWord = function(randomWords){
  var index = Math.round(Math.random() * (randomWords.length - 1))
  return randomWords[index]
}

// Function to convert word into a secret with '*'
game.convertToSecret = function (word){
  var secretWord = ''
  for (var i = 0; i < word.length; i++){
    secretWord += '*'
  }
    return secretWord
}

// Function to check if the guess is correct
game.check = function(userGuess, correctWord) {
  //goes through each letter and sees if any match the input
  for(var i = 0; i < correctWord.length; i++){
    if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
      return true
    }
  }
  return false
}

game.checkDuplicate = function (userGuess, allGuesses) {
  var duplicate = false
  for(var i = 0; i < allGuesses.length; i++){
    if(allGuesses[i] === userGuess){
      duplicate = true
    }
  }
  return duplicate
}

// Function to reveal letters that have matched
game.revealLetter = function(userGuess, gameVariables, correctWord) {
  // Removes all spaces before storing
  var hold = gameVariables.displayWord.replace(/ /g,'')
  gameVariables.displayWord = ''

  for(var i = 0; i < correctWord.length; i++){
    if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
      gameVariables.displayWord += correctWord[i]
    }
    else{
      gameVariables.displayWord += hold[i]
    }
  }
}

// Function to check is the user has already guess all the letters
game.checkForWin = function(displayWord){
  var userWinStatus = true

  for(var i=0; i < displayWord.length; i++){
    if(displayWord[i] === '*'){
      userWinStatus = false
    }
  }
  return userWinStatus
}