var baseUrl="http://localhost:3000/";
var mainservice = {
  createuser: function (  $http,userdata ) {
  		return $http( {
  			method: 'POST',
  			url: baseUrl + 'newuser/' ,
        headers: {
					'Content-Type': 'application/json'
				},
  			data: userdata
  		} )
  	},
  logins: function (  $http,userdata ) {
  		return $http( {
  			method: 'POST',
  			url: baseUrl + 'login/' ,
        headers: {
					'Content-Type': 'application/json'
				},
  			data: userdata
  		} )
  	},
    players: function (  $http ) {
    		return $http( {
    			method: 'GET',
    			url: baseUrl + 'playerlist/' ,
          headers: {
  					'Content-Type': 'application/json'
  				}
    		} )
    	},
      addplayer: function (  $http,userdata ) {
      		return $http( {
      			method: 'POST',
      			url: baseUrl + 'newplayer/' ,
            headers: {
    					'Content-Type': 'application/json'
    				},
      			data: userdata
      		} )
      	},
        updateplayer: function (  $http,userdata ) {
        		return $http( {
        			method: 'POST',
        			url: baseUrl + 'updtplayer/' ,
              headers: {
      					'Content-Type': 'application/json'
      				},
        			data: userdata
        		} )
        	},
        getplayer: function (  $http ,id) {
        		return $http( {
        			method: 'GET',
        			url: baseUrl + 'getplayer/'+id ,
              headers: {
      					'Content-Type': 'application/json'
      				},
        		} )
        	},
          deleteplayer: function ( $http ,id) {
          		return $http( {
          			method: 'POST',
          			url: baseUrl + 'deleteplayer/'+id ,
                headers: {
        					'Content-Type': 'application/json'
        				},
          		} )
          	},
};
module.exports = mainservice;
