/**
 * Created by cgrigsby on 4/29/16.
 */


app.controller("stringsController", function($scope, $interval){
    
    $scope.strings = ['good morning', 'welcome',
        'this is a really really really really really really long message',
        'more stuff', 'words words words', 'ahhhhhh',
        'more']; 
    
    
    $interval(function(){
        $scope.strings.push("Woah");
    }, 10000)
    
    
})