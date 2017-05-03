import 'bootstrap-colorpicker';

export default module => {
    AppController.$inject = ['$scope', '$element'];
    module.controller('AppController', AppController);

    function AppController($scope, $element) {
        var mv = this;

        mv.options = {
            delay: 400,
            color: '#0000FF',
            pulseColor: '#FFFFFF',
            weight: 5,
            dashArray: [10, 20]
        };

        mv.init = function () {
            const colorInput = $($element).find('#color');
            const pulseColorInput = $($element).find('#pulse-color');

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
}


