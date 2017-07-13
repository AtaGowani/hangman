var app = angular.module('HangmanApp', []);

app.controller('GameController', ['$scope', '$log', '$http', function($scope, $log, $http){

  var allGuesses = []
  var selectedWord = ''

  $scope.gameVariables = {
    incorrectGuesses: [],
    displayWord: '',
    userWinStatus: false
  }

  $scope.checkInput = function(valid){
    console.log('Input Validating Function Called')
    if(valid){
      document.getElementsByTagName("div")[5].className = "ng-hide"
      var userInput = $scope.guess
      $scope.guess = '' //clear the input field for the user

      var correct = game.check(userInput, selectedWord)
      var duplicate = game.checkDuplicate(userInput, allGuesses)

      if(correct && !duplicate){
        game.revealLetter(userInput, $scope.gameVariables, selectedWord)
        allGuesses += userInput

        $scope.gameVariables.userWinStatus = game.checkForWin($scope.gameVariables.displayWord)

        if($scope.gameVariables.userWinStatus){
          document.getElementsByTagName("input")[0].setAttribute("disabled","")
        }
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
          document.getElementsByTagName("input")[0].setAttribute("disabled","")
        }
      }
    }
    else {
      $log.warn('Input not validated')
    }
  }

  $scope.newGame = function() {

    // API call to get a random word
    $http({
      method: 'GET',
      url: 'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }).then(function successCallback(wordObject) {
      selectedWord = wordObject.data.word
      $log.info('Word:' + selectedWord)
      $scope.gameVariables.incorrectGuessesAllowed = selectedWord.length + 2
      $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)
      $scope.gameVariables.incorrectGuesses = []
      $scope.gameVariables.userWinStatus = false
      allGuesses = []
      document.getElementsByTagName("input")[0].removeAttribute("disabled")
    }, function errorCallback(response) {
      $log.warn('Unable to get API, returned ' + response)
    })
  }

  $scope.showHint = function() {
    do{
      var letterAlreadyGiven = false 
      var randomIndex = Math.random() * (selectedWord.length - 1)
      randomIndex = Math.round(randomIndex)
      var randomLetter = selectedWord[randomIndex]
      for (var i=0; !letterAlreadyGiven && i < $scope.gameVariables.displayWord.length; i++) {
        if (randomLetter == $scope.gameVariables.displayWord[i]) {
          letterAlreadyGiven = true
        }
      }
      if (!letterAlreadyGiven) {
        console.log(randomLetter)
      }
    } while(letterAlreadyGiven)

    var hold = $scope.gameVariables.displayWord
    $scope.gameVariables.displayWord = ''

    for(var i = 0; i < selectedWord.length; i++){
        if(randomLetter === selectedWord[i]){
          $scope.gameVariables.displayWord += randomLetter
        }
        else{
          $scope.gameVariables.displayWord += hold[i]
        }
      }
    }
}])