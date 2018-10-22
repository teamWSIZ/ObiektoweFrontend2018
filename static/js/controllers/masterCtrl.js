
angular.module('myApp.controllers',[]);


angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            $scope.M = {};
            $scope.M.results = [];
            $scope.search = {};
            $scope.iloraz = 0;
            $scope.M.selectedPlayer = {};
            $scope.M.posts = [];
            $scope.M.password = '';
            $scope.M.user = '';
            $scope.M.wdauth = '';

            $scope.AABB = 12; //to jest liczba
            $scope.nazwaArtykulu = 'BREAKING NEWS'; //to jest napis



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

            $scope.getPosts = function (pageNumber, pageSize) {
                //ma zapytać sieć o dane, i je zwrócić z tej metody
                return $http({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }).success(function(data){
                    $scope.M.posts = data.splice(
                        pageNumber * pageSize, pageSize);
                });
            };

            $scope.getFromService = function (pageNumber, pageSize) {
                //wołanie serwisów http przy pomocy metody fetch (javascript/ecmascript)
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => {
                        console.log('before:' + JSON.stringify($scope.M.posts));
                        console.log('got: ' + json.length);
                        $scope.M.posts = json;
                        console.log('after:' + JSON.stringify($scope.M.posts));
                        $scope.$apply();  //to trzeba zrobić wewnątrz 'fetch'; inaczej angular nie odświeży widoku
                    });

                //wykorzystanie serwisu $http (angularjs)
                // return $http({
                //     url: 'https://jsonplaceholder.typicode.com/posts',
                //     method: 'GET',
                //     headers: {'Content-Type': 'application/json'}
                // }).success(function(json){
                //     console.log('got: ' + json);
                //     $scope.M.posts = json;
                // });
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

            // $scope.getPosts(0, 5);

            /////////////////////////////////////////////////////////////

        }
    ]
);
