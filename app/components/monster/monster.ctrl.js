/**
 * Created by silvia on 11/23/16.
 */


//Controller that handles the events generated in the chores view. The controller can also contain some logic for visualization.
app.controller('MonsterCtrl', function($scope, $rootScope, Player, monsters, careerLevels, _, $timeout, ModalService) {
    
    $scope.player = Player;

    // $scope.close = close;

    $scope.monsterText = '';
    $scope.monster = {};
    $scope.isHit = false;
    $scope.hitsCount = 0;
    $scope.monsterWidth = 800;
    $scope.monsterHeight = 800;
    $scope.monsterDefeated = false;

    $scope.showItemText = function(){
        $scope.monsterText = $scope.monster.itemText;
    }

    $scope.attackMonster = function(){
        $scope.isHit = true;
        $scope.hitsCount++;

        $scope.monsterWidth = $scope.monsterWidth - ($scope.hitsCount * 140);
        $scope.monsterHeight = $scope.monsterHeight - ($scope.hitsCount * 140);

        if($scope.hitsCount >= 3){
            $timeout(defeatMonster, 1000);
            increasePlayerLevel();
            $rootScope.$broadcast('showMapView');
            $scope.showCongratulationsModal();
        }
        else{
            $timeout(resetHits, 500);
        }

    }
    
    $scope.hasRequiredItems = function(){

        var items = _.pluck($scope.player.stats.items, 'name');

        var playerHasItem = _.contains(items, $scope.monster.item);

        return playerHasItem;
    }

    $scope.showCongratulationsModal = function() {

        ModalService.showModal({
            templateUrl: "app/components/monster/congratulations.modal.tmpl.html",
            controller: "ModalCtrl",
            inputs : {
                monster : $scope.monster
            }
        }).then(function(modal) {
            modal.close.then(function(result) {
                $scope.customResult = "All good!";
            });
        });

    };

    function getMonster(){
        $scope.monster = monsters[$scope.player.stats.career][$scope.player.stats.level];
        $scope.monsterText = $scope.monster.introText;
    }

    function resetHits(){
        $scope.isHit = false;
    }

    function defeatMonster(){
        $scope.monsterDefeated = true;
    }

    function increasePlayerLevel(){
        $scope.player.stats.level++;
    }

    getMonster();


});

app.controller('ModalCtrl', function($scope, close, monster, careerLevels, Player) {
    $scope.close = close;
    $scope.monster = monster;
    $scope.player = Player;
    $scope.careerLevels = careerLevels;
});

