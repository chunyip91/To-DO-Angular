/**
 * Created by ChunYip on 10/20/2014.
 */

app.controller("myCtrl", function($scope ,localStorageService){
    $scope.todo = "";

    $scope.add =function(){
       localStorageService.set('key', $scope.todo);
       location.reload();

    };

    $scope.localStorageDemoValue = localStorageService.get('key');

    $scope.clear = function () {
        localStorageService.clearAll();
    }

});