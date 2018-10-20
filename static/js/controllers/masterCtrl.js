
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

            $scope.getPosts = function () {
                //ma zapytać sieć o dane, i je zwrócić z tej metody
                return $http({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }).success(function(data){
                    $scope.M.posts = data;
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


            $scope.M.posts = [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                }
            ]



            /////////////////////////////////////////////////////////////

        }
    ]
);
