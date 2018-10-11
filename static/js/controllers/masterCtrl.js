
angular.module('myApp.controllers',[]);


angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            $scope.M = {};
            $scope.M.results = [];
            $scope.M.selectedPlayer = {};   //to będzie jakiś obiekt, ważne, że tu mamy referencję (a nie kopię)


            $scope.search = {};
            $scope.iloraz = 0;



            $scope.AABB = 12; //to jest liczba
            $scope.nazwaArtykulu = 'BREAKING NEWS'; //to jest napis

            $scope.callSomeHttp = function(){
                return $http({
                    url: 'http://google.com/cleanup',
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }).success(function(data){
                    $log.info('Google DB deleted');
                });
            };

            $scope.doit = function () {

                alert('ok');
            };

            $scope.wyliczIloraz = function(xxx, yyy) {
                $scope.iloraz = xxx / yyy;
            };
            $scope.wyliczIloczyn = function(xxx, yyy) {
                $scope.iloraz = xxx * yyy;
            };

            //// poniżej przykłady sortowania tablicy

            $scope.sortByNazwisko = function () {
                $scope.M.results.sort(function (a, b) {
                    const nameA = a.nazwisko.toUpperCase();
                    const nameB = b.nazwisko.toUpperCase();
                    if (nameA===nameB) {
                        let imieA = a.imie.toUpperCase();
                        let imieB = b.imie.toUpperCase();
                        if (imieA==imieB) return 0;
                        if (imieA<imieB) return -1;
                        else return 1;
                    }
                    if (nameA<nameB) return -1;
                    else return 1;
                });
            };

            $scope.sortByScore = function () {
                $scope.M.results.sort(function (a, b) {
                    let aa = a.score;
                    let bb = b.score;
                    if (aa===bb) return 0;
                    if (aa<bb) return 1;
                    else return -1;
                });
            };


            ////// INIT STATE

            $scope.M.results = [
                {imie:'Rafael', nazwisko:'Nadal', score:8760},
                {imie:'Roger', nazwisko:'Federer', score:6905},
                {imie:'Novak', nazwisko:'Djokovic', score:6445},
                {imie:'RogerZ', nazwisko:'Federer', score:6902},
                {imie:'Novak', nazwisko:'Djokovic2', score:6445},
                {imie:'Juan Martin', nazwisko:'del Potro', score:5980},
                {imie:'Alexander', nazwisko:'Zverev', score:4890}
            ];

            /////////////////////////////////////////////////////////////

        }
    ]
);
