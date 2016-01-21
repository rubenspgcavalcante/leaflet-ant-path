(function () {
    "use strict";

    AppController.$inject = ['$scope', '$element'];
    angular.module('ant-path-example').controller('AppController', AppController);

    function AppController($scope, $element) {
        var mv = this;

        mv.options = {
            delay: 200,
            color: '#0000FF',
            pulseColor: '#FFFFFF',
            weight: 5,
            dashArray: [10, 20]
        };

        mv.init = function () {
            var colorInput = $($element).find('#color');
            var pulseColorInput = $($element).find('#pulse-color');

            colorInput.colorpicker({
                format: 'hex'
            }).on('changeColor.colorpicker', function () {
                mv.options.color = $(this).val();
                $scope.$apply();
            });

            pulseColorInput.colorpicker({
                format: 'hex'
            }).on('changeColor.colorpicker', function () {
                mv.options.pulseColor = $(this).val();
                $scope.$apply();
            });
        };
    }
}());


