'use strict'

import Game from './app'

var app = angular.module('HangmanApp', [])
var game = new Game()

app.controller('GameController', ['$scope', '$log', '$http', function($scope, $log, $http){

  var allGuesses = [],
      selectedWord = ''

  $scope.gameVariables = {
    incorrectGuesses: [],
    displayWord: '',
    userWinStatus: false,
    hintsLeft: 0,
    loaded: false,
    defineWord: false
  }

  $scope.checkInput = (valid) => {
    console.log('Input Validating Function Called')
    if(valid){
      document.getElementsByTagName('div')[12].className = 'ng-hide'
      var userInput = $scope.guess
      $scope.guess = '' //clear the input field for the user

      var correct = game.check(userInput, selectedWord)
      var duplicate = game.checkDuplicate(userInput, allGuesses)

      if(correct && !duplicate){
        game.revealLetter(userInput, $scope.gameVariables, selectedWord)
        allGuesses += userInput

        $scope.gameVariables.userWinStatus = game.checkForWin($scope.gameVariables.displayWord)

        if($scope.gameVariables.userWinStatus){
          document.getElementsByTagName('input')[0].setAttribute('disabled','')
          document.getElementsByTagName('input')[1].classList.add('disabled')
          document.getElementsByTagName('input')[1].setAttribute('disabled','')
        }
      }
      else if(duplicate){
        $log.info('Duplicate detected')
        document.getElementsByTagName('div')[12].className = 'ng-show alert alert-warning'
      }
      else{
        $scope.gameVariables.incorrectGuesses += userInput
        allGuesses += userInput
        $scope.gameVariables.incorrectGuessesAllowed -= 1

        if (!$scope.gameVariables.incorrectGuessesAllowed){
          $scope.gameVariables.displayWord = selectedWord
          document.getElementsByTagName('input')[1].classList.add('disabled')
          document.getElementsByTagName('input')[1].setAttribute('disabled','')
          document.getElementsByTagName('input')[0].setAttribute('disabled','')
        }
      }
    }
    else {
      $log.warn('Input not validated')
    }
  }

  $scope.getDefinition = () => {
    if($scope.gameVariables.defineWord) {
      $scope.gameVariables.defineWord = false
    } else {
      $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/word.json/' + selectedWord + '/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }).then(function successCallback(wordObject) {
      console.log(wordObject)
      if (wordObject.data[0]) {
        $scope.gameVariables.partOfSpeech = wordObject.data[0].partOfSpeech
        $scope.gameVariables.wordDefinition = wordObject.data[0].text
        $scope.gameVariables.sourceAttribution = wordObject.data[0].attributionText
        $scope.gameVariables.defineWord = true
      }
      else {
        $scope.gameVariables.defineWord = true
        $scope.gameVariables.wordDefinition = false
        console.log('Definition is undefined')
      }
    }, function errorCallback(response) {
      $log.warn('Unable to get definition, returned ' + response)
    })
    }
  }

  $scope.newGame = () => {
    $scope.gameVariables.loaded = false;

    // API call to get a random word
    $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=abbreviation&minCorpusCount=0&maxCorpusCount=10&minDictionaryCount=1&maxDictionaryCount=10&minLength=5&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }).then(function successCallback(wordObject) {
      $scope.gameVariables.defineWord = false
      selectedWord = wordObject.data.word
      $log.info('Word:' + selectedWord)
      $scope.gameVariables.incorrectGuessesAllowed = selectedWord.length + 2
      $scope.gameVariables.displayWord = game.convertToSecret(selectedWord)
      $scope.gameVariables.incorrectGuesses = []
      $scope.gameVariables.userWinStatus = false
      $scope.gameVariables.hintsLeft = Math.ceil(selectedWord.length * 0.25)
      allGuesses = []
      document.getElementsByTagName('input')[0].removeAttribute('disabled')
      document.getElementsByTagName('input')[1].removeAttribute('disabled')
      document.getElementsByTagName('input')[1].classList.remove('disabled')
      $scope.gameVariables.loaded = true
    }, function errorCallback(response) {
      $log.warn('Unable to get API, returned ' + response)
    })
  }

  $scope.showHint = () => {
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
       } while(letterAlreadyGiven)

      game.revealLetter(randomLetter, $scope.gameVariables, selectedWord)
      allGuesses += randomLetter
      $scope.gameVariables.hintsLeft -= 1

      $scope.gameVariables.userWinStatus = game.checkForWin($scope.gameVariables.displayWord)

      if($scope.gameVariables.userWinStatus || !$scope.gameVariables.hintsLeft) {
        if($scope.gameVariables.userWinStatus) {
          document.getElementsByTagName('input')[0].setAttribute('disabled', '')
        }
        document.getElementsByTagName('input')[1].classList.add('disabled')
        document.getElementsByTagName('input')[1].setAttribute('disabled', '')
      }
}}])