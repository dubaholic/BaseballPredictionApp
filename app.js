var app = angular.module("baseballApp", []);
app.controller("BaseballCtrl", BaseballCtrl);

function BaseballCtrl() {
    this.winningTeam;
    this.resultValue;
    this.aTotalWins;
    this.aTotalLoses;
    this.bTotalWins;
    this.bTotalLoses;
    this.aDifference;
    this.bDifference;

    this.buttonClicked = function () {
        console.log("succes");
        var aNaam = this.aName;
        var aWinst = parseFloat(this.aWins);
        var aVerlies = parseFloat(this.aLoses);
        var aPitcherWinst = parseFloat(this.aPitcherWins);
        var aPitcherVeries = parseFloat(this.aPitcherLoses);

        this.aTotalWins = (aPitcherWinst * aPitcherWinst) + aWinst;
        this.aTotalLoses = (aPitcherVeries * aPitcherVeries) + aVerlies;

        var bNaam = this.bName;
        var bWinst = parseFloat(this.bWins);
        var bVerlies = parseFloat(this.bLoses);
        var bPitcherWinst = parseFloat(this.bPitcherWins);
        var bPitcherVerlies = parseFloat(this.bPitcherLoses);

        this.bTotalWins = (bPitcherWinst * bPitcherWinst) + bWinst;
        this.bTotalLoses = (bPitcherVerlies * bPitcherVerlies) + bVerlies;

        this.aDifference = this.aTotalWins + this.bTotalLoses;
        this.bDifference = this.bTotalWins +this.aTotalLoses;

        if (this.aDifference > this.bDifference) {
            this.resultValue = (this.aDifference / (this.aDifference + this.bDifference)) * 100;
            this.winningTeam = aNaam;
        } else if (this.bDifference > this.aDifference) {
            this.resultValue = (this.bDifference / (this.bDifference + this.aDifference)) * 100;
            this.winningTeam = bNaam;
        } else if(this.aDifference == this.bDifference) {
            this.winningTeam = aNaam + " " + bNaam;
        }

    }
}