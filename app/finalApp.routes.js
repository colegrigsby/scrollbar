/**
 * Created by mkahn on 6/1/15.
 */


// TODO switch this to UI-Router

app.config( function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/err');


    $stateProvider

        .state( '/', {
            url: '/',
            templateUrl: 'app/components/home/home.partial.html'

        } )
        
        .state( '/guests', {
            url: '/guests',
            templateUrl: 'app/components/guests/guests.partial.html',
            controller: 'guestsController'
        })
        .state('/experiences', {
            url: '/experiences',
            controller: 'experiencesController',
            templateUrl: 'app/components/experiences/experiences.partial.html',

        })
        .state('/media',{
            url: '/media',
            controller: 'mediaController'
        })
        .state( '/err', {
            url: '/err',
            templateUrl: 'app/components/error/error.partial.html'

        } )
} );





