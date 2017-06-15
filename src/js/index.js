var app = angular.module('HangmanApp', []);

app.controller('GameController', ['$scope', function($scope){

  var words = ['Cow', 'Goat', 'Boat', 'Float' , 'Lion', 'Tiger', 'Math', 'Trello', 'Chello', 'Hello']
  var allGuesses = []

  $scope.gameVariables = {
    numberOfIncorrectGuesses: 6,
    incorrectGuesses: [],
    displayWord: ''
  }

  //serve the display of the secret to the user
  $scope.userDisplayWord = function(){
    return $scope.gameVariables.displayWord
  }

  //serve the missed leeters to the user
  $scope.userDisplayIncorrectGuesses = function(){
    //only return if there is something there
    if($scope.gameVariables.incorrectGuesses.length){
      return $scope.gameVariables.incorrectGuesses
    }
    else{
      return false
    }
  }

  //store the selected word into variable 
  var selectedWord = game.selectWord(words)
  console.log(selectedWord)

  $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)

  $scope.checkInput = function(valid){
    if(valid){
      var userInput = $scope.guess
      console.log($scope.guess)
      $scope.guess = '' //clear the input field for the user

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
}])