var app = angular.module('HangmanApp', []);

app.controller('GameController', function($scope){
  var words = ['cow', 'goat', 'boat', 'float' , 'lion', 'tiger', 'math'];

  //the variables that need to accesible from DOM
  $scope.numberOfGuesses = 6;
  $scope.displayWord = '';
  $scope.incorrectGuesses = [];

  //other variables
  var THEword;

  var selectWord = function(){
    var index = Math.round(Math.random() * (words.length - 1));
    return words[index];
  }

  //store the selected word into variable 
  THEword = selectWord();
  console.log(THEword);

  var getSecret = function(){
    for (var i = 0; i < THEword.length; i++){
      $scope.displayWord += '*';
    }
  }

  //gets correct number of '*' and stores it in $scope.displayWord
  getSecret();

  console.log($scope.displayWord);

  console.log($scope.guess);

  $scope.checkLetter = function(){
    var correct = false;
    console.log('Function Called!!');
    for(var i = 0; i < THEword.length; i++){
      if($scope.guess == THEword[i]){
        correct = true;
        console.log('its equal');
        var hold = $scope.displayWord;
        $scope.displayWord = '';
        for(var j =0; j < THEword.length; j++){
          if(j != i){
            $scope.displayWord += hold[j]; 
          }
          else{
            $scope.displayWord += $scope.guess;
          }
        }
        
      }
    }
    if(!correct){
      $scope.incorrectGuesses += $scope.guess;
    }
  }


});