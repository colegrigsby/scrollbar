/**
 * Created by cgrigsby on 4/25/16.
 */

app.directive('ticker', function ($log, $interval, $timeout) {
    return {
        scope: {
            strings: "="
        },
        link: function (scope, elem, attr) {


            var str = [];
            var strlens = [];
            scope.slider = {leftPos: []};
            var lastLeft = 0;
            var total = 0;
            scope.slider.leftPos[0] = lastLeft;
            var SHIFT = .2;


            angular.element(document).ready(function () {
                var i;
                for (i = 0; i < scope.strings.length; i++) {
                    var length = eval("str" + i).offsetWidth + 20;

                    if (i > 0)
                        scope.slider.leftPos[i] = lastLeft;

                    strlens[i] = length;
                    lastLeft += length;
                    total += length;
                }
                var r = 0;
                while (total + strlens[r]< bar.offsetWidth + strlens[r]) { //occurrences not equal
                    scope.strings.push(scope.strings[r]);
                    scope.slider.leftPos[i] = lastLeft;
                    strlens[i] = strlens[r];
                    lastLeft += strlens[r];
                    total += strlens[r];
                    r++;
                    i++;
                    //$log.log(strlens);
                }
            })

            

            $interval(function () {
                for (var i = 0; i < scope.strings.length; i++) {
                    if (!scope.slider.leftPos[i]) {
                        strlens[i] = eval("str" + i).offsetWidth + 20;
                        scope.slider.leftPos[i] = lastLeft;
                        lastLeft += strlens[i];
                    }
                    scope.slider.leftPos[i] = (scope.slider.leftPos[i] - SHIFT); //SHIFT LEFT
                    if (scope.slider.leftPos[i] < -strlens[i]) {
                        scope.slider.leftPos[i] = lastLeft;
                        //$log.log(lastLeft);
                        lastLeft += strlens[i];
                    }
                }
                lastLeft -= SHIFT;
                if (lastLeft < bar.offsetWidth) {
                    lastLeft = bar.offsetWidth;
                    //todo add the first element to the end and cycle through again...
                    //issue when a string is too long and needs to wrap to both ends at once
                }

            }, 1)


        },
        templateUrl: 'app/components/ticker/ticker.template.html'
    };
});


