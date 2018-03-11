/**
 * A partir de las versiones (>1.3) la forma de crear un controlador
 * pasa de ser:
 * 
 * function AppCtrl($scope) {
 *      $scope.name = "World";
 * }
 * 
 * A instanciarse de la manera indicada en el documento:
 */

angular.module("app", []).controller("AppCtrl", function ($scope) {

    /**
     * Función que muestra una alerta en función de un
     * evento dado. En este caso, pinchar sobre un botón.
     * 
     * Actualizado: ahora, la función clickHandler() cambia
     * el valor para la directiva "ng-hide" de false a true.
     */
    $scope.clickHandler = function () {
        $scope.isHidden = !$scope.isHidden;
    };

    /**
     * Array de objetos en formato JSON, declarado en el ámbito o
     * "scope" de nuestro controlador.
     */
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

    /**
     * Función que comprueba el valor de la variable definida en el ámbito
     * o "scope" de nuestro controlador, y aplica un estilo css completo
     * si el valor es true. En caso contrario, no devolverá nada.
     */
    $scope.styleDemo = function () {
        if (!$scope.styler) {
            return;
        }
        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
});