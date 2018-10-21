var services = require( "../services/mainservice" );
module.exports = {
addctrl: ["$scope","$http","$location",function ( $scope,$http,$location) {
  $scope.playerdatas={};
$scope.editflag=true;
$scope.submitpage=function(){
  console.log("hiiiiiiiiiii");
  console.log($scope.playerdatas);
  services.addplayer( $http, $scope.playerdatas ).then( function ( result ) {
        console.log(result.data);
        if(result.data.status==200){
          $location.path("/list");
        }else{
           $scope.invld=true;
        }
      }).catch(function ( err ) {
				console.log( err.data )
			})
}

$scope.back=function(){
  $location.path('/list');
}
}]
}
