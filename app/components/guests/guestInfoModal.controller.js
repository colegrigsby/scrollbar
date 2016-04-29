/**
 * Created by cgrigsby on 4/20/16.
 */


app.controller('guestInfoModalController', function ($scope, $uibModalInstance, guest, $log) {

    $scope.g = guest;


    $scope.finished = function () {
        $uibModalInstance.dismiss('cancel');
    };


});