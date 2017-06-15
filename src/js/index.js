var app = angular.module('HangmanApp', []);

app.controller('GameController', function($scope){

var words = ['Cow', 'Goat', 'Boat', 'Float' , 'Lion', 'Tiger', 'Math', 'Trello', 'Chello', 'Hello']

  $scope.gameVariables = {
    numberOfIncorrectGuesses: 6,
    incorrectGuesses: [],
    displayWord: ''
  }

  //store the selected word into variable 
  var selectedWord = game.selectWord(words)
  console.log(selectedWord)

  $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)

  $scope.checkInput = function(){
    var userInput = $scope.guess
    console.log($scope.guess)
    $scope.guess = '' //clear the input field for the user

    var validated = game.validateInput(userInput)

    if(validated){
      var correct = game.check(userInput, selectedWord)
      if(correct){
        game.reveal(userInput, $scope.gameVariables, selectedWord)
      }
      else{
        $scope.gameVariables.incorrectGuesses += userInput
        $scope.gameVariables.numberOfIncorrectGuesses -= 1 
      }
    }
    else {
      console.log('There was an error')
    }
  }
})