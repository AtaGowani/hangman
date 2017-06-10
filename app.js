var app = angular.module('HangmanApp', []);

app.controller('GameController', function($scope){
  var words = ['Cow', 'Goat', 'Boat', 'Float' , 'Lion', 'Tiger', 'Math', 'Trello', 'Chello', 'Hello'];

  //the variables that need to accesible from DOM
  $scope.numberOfGuesses = 6;
  $scope.displayWord;
  $scope.incorrectGuesses = [];

  //other variables
  var selectedWord;

  var selectWord = function(){
    var index = Math.round(Math.random() * (words.length - 1));
    return words[index];
  }

  //store the selected word into variable 
  selectedWord = selectWord();
  console.log(selectedWord);

  convertToSecret = function (){
    var secretWord = '';
    for (var i = 0; i < selectedWord.length; i++){
      secretWord += '*';
    }
     return secretWord;
  }

  //gets correct number of '*' and stores it in $scope.displayWord
  $scope.displayWord = convertToSecret();

  $scope.checkLetter = function() {
    var correct = false;
    var hold = $scope.displayWord;
    $scope.displayWord = '';

    //go through each letter and see if any match the input
    for(var i = 0; i < selectedWord.length; i++){
      //if input matches replace '*' with whatever it matched with
      if($scope.guess.toLowerCase() == selectedWord[i].toLowerCase()){
        //if input matches letter in the word
        correct = true;

        $scope.displayWord += selectedWord[i];
      }
      else{
        $scope.displayWord += hold[i];
      }
    }
    if(!correct){
      $scope.incorrectGuesses += $scope.guess;
    }
    //empty the input for the user
    $scope.guess = '';
  }
});