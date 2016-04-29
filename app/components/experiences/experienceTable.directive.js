/**
 * Created by cgrigsby on 4/20/16.
 */
app.directive('experienceTable', function ($log, $filter) {
    return {
        scope: {
            experiences: "="
        },
        link: function(scope, elem, attr){
            var e = scope.experiences;


            scope.filterNameEmail = function(val) {
                val = val[0]
                return (angular.lowercase(val.guests[0].firstName).indexOf(angular.lowercase(scope.guest) || '') !== -1 ||
                angular.lowercase(val.guests[0].lastName).indexOf(angular.lowercase(scope.guest) || '') !== -1 ||
                    angular.lowercase(val.guests[0].email).indexOf(angular.lowercase(scope.guest) || '') !== -1);
            }
            
            
            scope.sorter = function(val) {
                return val[0].guests[0].firstName;
            }

        },
        templateUrl: 'app/components/experiences/experienceTable.template.html'
    };
});