var app = angular.module('HangmanApp', []);

app.controller('GameController', ['$scope', '$log', function($scope, $log){

  var words = ['Cow', 'Goat', 'Boat', 'Float' , 'Lion', 'Tiger', 'Math', 'Trello', 'Chello', 'Hello']
  var allGuesses = []

  $scope.gameVariables = {
    incorrectGuesses: [],
    displayWord: ''
  }

  //store the selected word into variable 
  var selectedWord = game.selectWord(words)
  $log.info('Word:' + selectedWord)

  $scope.gameVariables.incorrectGuessesAllowed = selectedWord.length

  $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)

  $scope.checkInput = function(valid){
    if(valid){
      document.getElementsByTagName("div")[5].className = "ng-hide"
      var userInput = $scope.guess
      $scope.guess = '' //clear the input field for the user

      var correct = game.check(userInput, selectedWord)
      var duplicate = game.checkDuplicate(userInput, allGuesses)

      if(correct && !duplicate){
        game.reveal(userInput, $scope.gameVariables, selectedWord)
        allGuesses += userInput
      }
      else if(duplicate){
        $log.info("Duplicate detected")
        document.getElementsByTagName("div")[5].className = "ng-show alert alert-warning"
      }
      else{
        $scope.gameVariables.incorrectGuesses += userInput
        allGuesses += userInput
        $scope.gameVariables.incorrectGuessesAllowed -= 1

        if (!$scope.gameVariables.incorrectGuessesAllowed){
          document.getElementsByTagName("input")[0].setAttribute("disabled","");
        }
      }
    }
    else {
      $log.warn('Input not validated')
    }
  }

  $scope.newGame = function() {

    selectedWord = game.selectWord(words)
    $log.info('Word:' + selectedWord)

    $scope.gameVariables.incorrectGuessesAllowed = selectedWord.length
    $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)
    $scope.gameVariables.incorrectGuesses = [];
    document.getElementsByTagName("input")[0].removeAttribute("disabled");
  }
}])