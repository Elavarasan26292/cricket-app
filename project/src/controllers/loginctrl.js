var services = require( "../services/mainservice" );
module.exports = {
loginctrls: ["$scope","$http","$location",function ( $scope,$http,$location) {
$scope.showlogin=true;
$scope.user={};
$scope.reguser={};
$scope.login=function(){
  $scope.nulls=false;
  $scope.invld=false;
  if($scope.user.email==null || $scope.user.password==undefined){
    $scope.nulls=true;
  }else{
  services.logins( $http, $scope.user )
			.then( function ( result ) {
        if(result.data.status==200){
          $location.path("/list");
        }else{
           $scope.invld=true;
        }
      }).catch(function ( err ) {
				console.log( err.data )
			})
    }
}

$scope.registerpage=function(){
  $scope.showlogin=false;
}

$scope.cancel=function(){
  $scope.showlogin=true;
}

$scope.register=function(){
  if($scope.reguser.name==null ||  $scope.reguser.name=="" ||
    $scope.reguser.email==null || $scope.reguser.email=="" ||
    $scope.reguser.password==null || $scope.reguser.password=="" ||
    $scope.reguser.passwordmtch==null || $scope.reguser.passwordmtch==""){
    $scope.regnul=true;
  }else if($scope.reguser.password!=$scope.reguser.passwordmtch){
    $scope.invldpwd=true;
  }else{
    $scope.regnul=false;
    $scope.invldpwd=false;
    services.createuser( $http, $scope.reguser ).then( function ( result ) {
          if(result.data.status==200){
            $scope.showlogin=true;
          }else if(result.data.status=402){
            $scope.existemail=true;
          }
        }).catch(function ( err ) {
          console.log( err.data )
        })
  }
}
}]
}
