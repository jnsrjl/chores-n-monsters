/**
 * Created by silvia on 11/6/16.
 */

//Controller that handles the events generated in the chores view. The controller can also contain some logic for visualization.
app.controller('ChoresCtrl', function($scope) {

    $scope.choresList = [
        {choreName: 'Clean the toys', reward: 10} , 
        {choreName: 'Clean the markers', reward: 5}, 
        {choreName: 'Doing the homework', reward: 5}
    ];
    $scope.newChore = '';

    $scope.addNewChore = function(){
        $scope.choresList.push($scope.newChore);
        $scope.newChore = '';
    }

});