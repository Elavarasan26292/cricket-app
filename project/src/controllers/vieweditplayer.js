var services = require( "../services/mainservice" );
module.exports = {
veweditctrlctrl: ["$scope","$http","$location","$routeParams",function ( $scope,$http,$location,$routeParams) {
$scope.editflag=false;
services.getplayer( $http,$routeParams.id ).then( function ( result ) {
      if(result.data.status==200){
        console.log(result.data);
        $scope.playerdatas=result.data.datas
      }else{
         $scope.invld=true;
      }
    }).catch(function ( err ) {
      console.log( err.data )
    })

    $scope.edit=function(){
      $scope.editflag=true;
    }

    $scope.back=function(){
      $location.path('/list');
    }

    $scope.submitpage=function(){
      services.updateplayer( $http,$scope.playerdatas ).then( function ( result ) {
            if(result.data.status==200){
              $location.path('/list');
            }else{
               $scope.invld=true;
            }
          }).catch(function ( err ) {
            console.log( err.data )
          })
    }
}]
}
