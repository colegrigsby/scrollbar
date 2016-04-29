/**
 * Created by mkahn on 6/1/15.
 */

var app = angular.module("finalApp", ['jsonFormatter', 'ui.bootstrap', 'ui.router', 'ngA8API2.service', 'ngAnimate']);

app.run( function(a8API){

    // Overplay A8 instance
    a8API.setSiteOrigin('http://162.243.133.57:1337/api/v2');

});