require ('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require ('../css/style.css')

export default class Game {

  // Function to select a word randomly
  selectWord (randomWords){
    var index = Math.round(Math.random() * (randomWords.length - 1))
    return randomWords[index]
  }

  // Function to convert word into a secret with '*'
  convertToSecret (word){
    var secretWord = ''
    for (var i = 0; i < word.length; i++){
      secretWord += '*'
    }
      return secretWord
  }

  // Function to check if the guess is correct
  check (userGuess, correctWord) {
    //goes through each letter and sees if any match the input
    for(var i = 0; i < correctWord.length; i++){
      if(userGuess.toLowerCase() == correctWord[i].toLowerCase()){
        return true
      }
    }
    return false
  }

  checkDuplicate (userGuess, allGuesses) {
    var duplicate = false
    for(var i = 0; i < allGuesses.length; i++){
      if(allGuesses[i].toLowerCase() === userGuess.toLowerCase()){
        duplicate = true
      }
    }
    return duplicate
  }

  // Function to reveal letters that have matched
  revealLetter (userGuess, gameVariables, correctWord) {
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
  checkForWin (displayWord){
    var userWinStatus = true

    for(var i=0; i < displayWord.length; i++){
      if(displayWord[i] === '*'){
        userWinStatus = false
      }
    }
    return userWinStatus
  }
}