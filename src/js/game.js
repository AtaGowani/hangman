var game = {}
var errorObj

// function to select a word randomly
game.selectWord = function(randomWords){
  var index = Math.round(Math.random() * (randomWords.length - 1))
  return randomWords[index]
}

// function to convert word into a secret with '_'
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

game.checkDuplicate = function (userGuess, allGuesses) {
  var duplicate = false
  for(var i = 0; i < allGuesses.length; i++){
    if(allGuesses[i] === userGuess){
      duplicate = true
    }
  }
  return duplicate
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