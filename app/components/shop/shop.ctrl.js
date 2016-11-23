/**
 * Created by silvia on 11/15/16.
 */

//Controller that handles the events generated in the shop view. The controller can also contain some logic for visualization.
app.controller('ShopCtrl', function($scope, items, $uibModal, Player) {

    $scope.player = Player;

    $scope.shopList = [];

    $scope.purchase = function(item){

        $scope.diamonds -= item.price;
        $scope.player.stats.items.push(item);

    }

    $scope.isPurchased = function(item){
        var isPurchased = _.contains ($scope.player.stats.items, item);

        return isPurchased;
    }

    function setShopList(){
        $scope.shopList = items[$scope.player.stats.career];
    }

    setShopList();

});

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});