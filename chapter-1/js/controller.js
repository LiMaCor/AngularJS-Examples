/**
 * A partir de las versiones (>1.3) la forma de crear un controlador
 * pasa de ser:
 * 
 * function AppCtrl($scope) {
 *      $scope.name = "World";
 * }
 * 
 * A instanciarse de la manera indicada en el documento.
 */

angular.module("app", []).controller("AppCtrl", function($scope) {
    $scope.name = "World";
});