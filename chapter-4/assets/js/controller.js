/**
 * A partir de las versiones (>1.3) la forma de crear un controlador
 * pasa de ser:
 * 
 * function AppCtrl($scope) {
 *      $scope.name = "World";
 * }
 * 
 * A instanciarse de la manera indicada en el documento.
 * 
 * Actualizado: la estructura de los modulos en AngularJS es la
 * siguiente:
 * 
 * - angular.module("app", []) => La función 'module' establece un módulo
 *   que tendrá como nombre el primer parámetro que le pasemos, en este caso, app.
 *   Los corchetes indican un array en el que se pueden especificar dependencias
 *   que se pueden inyectar en el módulo, por ejemplo, 'ngRoute'.
 * 
 * - .controller("AppCtrl", function ($scope)) => El método '.controller()' nos
 *   permite establecer controladores dentro del módulo, con los que podremos
 *   gestionar el funcionamiento de nuestra aplicación.
 * 
 * Por defecto, cuando indicamos la directiva 'ng-app' sin pasar ningún parámetro,
 * AngularJS establece un módulo que trae por defecto, permitiendonos ver fucionalidades
 * básicas del core. Si quisieramos crear un controlador, tendríamos que crear un módulo
 * y pasarlo como parámetro a la directiva 'ng-app'.
 */

angular.module("app", ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })
    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })
}).controller("indexCtrl", function($scope){

});