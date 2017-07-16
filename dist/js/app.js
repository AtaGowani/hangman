!function(e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    var a = {};
    t.m = e, t.c = a, t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(a, "a", a), a;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
}([ function(e, t, a) {
    a(1), e.exports = a(2);
}, function(e, t, a) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), i = function() {
        function e() {
            n(this, e);
        }
        return r(e, [ {
            key: "selectWord",
            value: function(e) {
                return e[Math.round(Math.random() * (e.length - 1))];
            }
        }, {
            key: "convertToSecret",
            value: function(e) {
                for (var t = "", a = 0; a < e.length; a++) t += "*";
                return t;
            }
        }, {
            key: "check",
            value: function(e, t) {
                for (var a = 0; a < t.length; a++) if (e.toLowerCase() == t[a].toLowerCase()) return !0;
                return !1;
            }
        }, {
            key: "checkDuplicate",
            value: function(e, t) {
                for (var a = !1, n = 0; n < t.length; n++) t[n] === e && (a = !0);
                return a;
            }
        }, {
            key: "revealLetter",
            value: function(e, t, a) {
                var n = t.displayWord.replace(/ /g, "");
                t.displayWord = "";
                for (var r = 0; r < a.length; r++) e.toLowerCase() == a[r].toLowerCase() ? t.displayWord += a[r] : t.displayWord += n[r];
            }
        }, {
            key: "checkForWin",
            value: function(e) {
                for (var t = !0, a = 0; a < e.length; a++) "*" === e[a] && (t = !1);
                return t;
            }
        } ]), e;
    }();
    t.default = i;
}, function(e, t, a) {
    "use strict";
    var n = a(1), r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n), i = angular.module("HangmanApp", []), game = new r.default();
    i.controller("GameController", [ "$scope", "$log", "$http", function(e, t, a) {
        var n = [], r = "";
        e.gameVariables = {
            incorrectGuesses: [],
            displayWord: "",
            userWinStatus: !1,
            hintsLeft: 0
        }, e.checkInput = function(a) {
            if (console.log("Input Validating Function Called"), a) {
                document.getElementsByTagName("div")[5].className = "ng-hide";
                var i = e.guess;
                e.guess = "";
                var o = game.check(i, r), s = game.checkDuplicate(i, n);
                o && !s ? (game.revealLetter(i, e.gameVariables, r), n += i, e.gameVariables.userWinStatus = game.checkForWin(e.gameVariables.displayWord), 
                e.gameVariables.userWinStatus && (document.getElementsByTagName("input")[0].setAttribute("disabled", ""), 
                document.getElementsByTagName("input")[1].classList.add("disabled"))) : s ? (t.info("Duplicate detected"), 
                document.getElementsByTagName("div")[5].className = "ng-show alert alert-warning") : (e.gameVariables.incorrectGuesses += i, 
                n += i, e.gameVariables.incorrectGuessesAllowed -= 1, e.gameVariables.incorrectGuessesAllowed || document.getElementsByTagName("input")[0].setAttribute("disabled", ""));
            } else t.warn("Input not validated");
        }, e.newGame = function() {
            a({
                method: "GET",
                url: "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
            }).then(function(a) {
                r = a.data.word, t.info("Word:" + r), e.gameVariables.incorrectGuessesAllowed = r.length + 2, 
                e.gameVariables.displayWord = game.convertToSecret(r), e.gameVariables.incorrectGuesses = [], 
                e.gameVariables.userWinStatus = !1, e.gameVariables.hintsLeft = Math.ceil(.25 * r.length), 
                n = [], document.getElementsByTagName("input")[0].removeAttribute("disabled"), document.getElementsByTagName("input")[1].classList.remove("disabled");
            }, function(e) {
                t.warn("Unable to get API, returned " + e);
            });
        }, e.showHint = function() {
            if (!e.gameVariables.userWinStatus && e.gameVariables.hintsLeft) {
                do {
                    var t = !1, a = Math.random() * (r.length - 1);
                    a = Math.round(a);
                    for (var i = r[a], o = 0; !t && o < e.gameVariables.displayWord.length; o++) i == e.gameVariables.displayWord[o] && (t = !0);
                    t || console.log(i);
                } while (t);
                game.revealLetter(i, e.gameVariables, r), n += i, e.gameVariables.hintsLeft -= 1, 
                e.gameVariables.userWinStatus = game.checkForWin(e.gameVariables.displayWord), !e.gameVariables.userWinStatus && e.gameVariables.hintsLeft || (e.gameVariables.userWinStatus && document.getElementsByTagName("input")[0].setAttribute("disabled", ""), 
                document.getElementsByTagName("input")[1].classList.add("disabled"));
            } else document.getElementsByTagName("input")[1].classList.add("disabled");
        };
    } ]);
} ]);