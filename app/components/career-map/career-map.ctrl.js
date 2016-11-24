/**
 * Created by silvia on 11/23/16.
 */

//Controller that handles the events generated in the chores view. The controller can also contain some logic for visualization.
app.controller('CareerMapCtrl', function($scope, careerLevels, Player, _ ) {

    $scope.levels = _.range(1, 8);
    $scope.levelCoordinates = {
        1: {top: 600, left: 50},
        
    }
    $scope.player = Player;

    $scope.monsterView = false;

    $scope.showMonsterView = function(){
        $scope.monsterView = true;
    }

    $scope.$on('showMapView', function(){
        $scope.monsterView = false;
    });

    $scope.isCurrentLevel = function(level){

        if(level == $scope.player.stats.level)
            return true;
        return false;
    }

    // var canvas = document.getElementById('map-canvas');
    // var context = canvas.getContext('2d');

    // var levelCoordinates = {
    //     1: {x: 50, y: 500},
    //     2: {x: 150, y: 500},
    //     3: {x: 150, y: 400},
    //     4: {x: 150, y: 300},
    //     5: {x: 300, y: 300},
    //     6: {x: 400, y: 300},
    //     7: {x: 400, y: 100}
    // }

    // var levelInfo = [
    //     {level: 1, x: 50, y: 500},
    //     {level: 2, x: 150, y: 500},
    //     {level: 3, x: 150, y: 400},
    //     {level: 4, x: 150, y: 300},
    //     {level: 5, x: 300, y: 300},
    //     {level: 6, x: 400, y: 300},
    //     {level: 7, x: 400, y: 100}
    //
    // ];
    //
    // function drawMap(){
    //
    //     for(i=0; i< levelInfo.length; i++){
    //         drawLevel(levelInfo[i]);
    //         drawCircle(levelInfo[i]);
    //
    //         if(i != levelInfo.length - 1)
    //             drawLine(levelInfo[i], levelInfo[i+1]);
    //     }
    // }
    //
    // function drawLevel(levelInfo){
    //     var levelText = 'Level '+ levelInfo.level;
    //     var x = levelInfo.x - 30;
    //     var y = levelInfo.y - 30;
    //
    //     context.font="20px Open Sans";
    //     context.fillStyle = "black";
    //
    //     context.fillText(levelText, x, y);
    // }
    //
    // function drawCircle(levelInfo) {
    //     context.beginPath();
    //     context.arc(levelInfo.x, levelInfo.y, 25, 0, 2 * Math.PI, false);
    //     context.fillStyle = "#ccddff";
    //     context.fill();
    //     context.lineWidth = 1;
    //     context.strokeStyle = "#666666";
    //     context.stroke();
    // }
    //
    // function drawLine(levelA, levelB) {
    //     context.beginPath();
    //     context.moveTo(levelA.x, levelA.y);
    //     context.lineTo(levelB.x, levelB.y);
    //     context.strokeStyle = "black";
    //     context.stroke();
    // }
    //
    // context.globalAlpha = 1.0;
    // context.beginPath();
    // drawMap();

});