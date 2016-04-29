/**
 * Created by cgrigsby on 4/18/16.
 */


app.controller("experiencesController", function($scope, a8API, $log){

    
    $scope.experiences = [];

    a8API.getResource('experience')
        .then(function (data) {
            $scope.experiences = _.values(_.groupBy(data, function(e){
                return [e.guests[0].firstName, e.guests[0].lastName, e.guests[0].email]

            }));

            /*$log.log(_.values(_.groupBy(data, function(e){
                return [e.guests[0].firstName, e.guests[0].lastName, e.guests[0].email]

            })))

            $log.log(_.groupBy(data, function(e){
                return [e.guests[0].firstName, e.guests[0].lastName, e.guests[0].email]

            }))*/

        })
        .catch(function (err) {
            // TOA
        });
    
});


//TODO figure out images, figure out grouping if necesary
