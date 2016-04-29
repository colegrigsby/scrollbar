/**
 * Created by mkahn on 4/18/16.
 */

app.controller('guestsController', function ($scope, a8API, $log, $uibModal) {


    $scope.guests = [];

    a8API.getResource('guest')
        .then(function (data) {
            $scope.guests = data;
        })
        .catch(function (err) {
            // TOAST and error
        })


    $scope.info = function (guest) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'app/components/guests/guestInfo.modal.html',
            controller: 'guestInfoModalController',
            size: "lg",
            resolve: {
                guest: function () {
                    return guest;
                }
            }

        });

        
    }

});