/**
 * Created by silvia on 11/10/16.
 */

//Controller that handles the events generated in the chores view. The controller can also contain some logic for visualization.
app.controller('MainCtrl', function($scope, $location, Player, careerLevels) {

    $scope.view = '';

    $scope.player = Player;
    
    // $scope.currentSection = '';

    $scope.isGenderSelected = function(){

        if($scope.player.stats.gender != ''){
            return true;
        }
        return false;
    }

    $scope.isCareerSelected = function(){

        if($scope.player.stats.career != ''){
            return true;
        }
        return false;
    }

    $scope.getLevel = function(){
        return careerLevels[$scope.player.stats.career][$scope.player.stats.level];
    }

    $scope.selectGender = function(gender){
        $scope.player.stats.gender = gender;
    }

    $scope.selectCareer = function(career){
        $scope.player.stats.career = career;
    }
    
    $scope.changeView = function(view){
        $scope.view = view;
    }

    $scope.getTemplate = function(){

        if($scope.view != '')
            return 'app/components/' + $scope.view + '/' + $scope.view + '.tmpl.html';

        return '';
    }

});