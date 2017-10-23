(function(){
    'use strict';
    angular.module('yinvo')
        .controller('HomeController',['$scope', '$state',
            function ($scope, $state) {
                var ctrl = this;
            
                init();

                function init(){
                    console.log("Home conroller loaded");
                }

            }]);

})();
