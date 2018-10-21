var services = require( "../services/mainservice" );
module.exports = {
playerlistctrl: ["$scope","$http","$location",function ( $scope,$http,$location) {
  function loaddatas(){
services.players( $http ).then( function ( result ) {
      if(result.data.status==200){
        $scope.listscrn=true;
        $scope.listdata=result.data.playerdata
      }else if(result.data.status==403){
        $scope.listscrn=false;
         $scope.listdata==[];
      }
    }).catch(function ( err ) {
      console.log( err.data )
    })
  }
  loaddatas();

    $scope.addplayer=function(){
      $location.path("/addplayer");
    }

    $scope.editing=function(id){
      let tempdata={};
      tempdata._id=id;
      tempdata.views="UPDT";
      services.updateplayer( $http,tempdata ).then( function ( result ) {
            if(result.data.status==200){
              $location.path("/viewplayer/"+id);
            }else{
               $scope.invld=true;
            }
          }).catch(function ( err ) {
            console.log( err.data )
          })
    }

    $scope.deleting=function(id){
      services.deleteplayer( $http,id ).then( function ( result ) {
            if(result.data.status==200){
              loaddatas();
            }else{
            console.log("Error");
            }
          }).catch(function ( err ) {
            console.log( err.data )
          })
    }

    $scope.logout=function(){
      $location.path('/login');
    }
}]
}
