

define(['services/serviceModule'], function (serviceModule) {
	serviceModule.factory('cdsService', ['$http',"appUrlService",function($http, appUrlService){	
		
		var age,
			isRegistered,
			userId;
		
		return {
			age:age,
			setUserId:function(val){
				userId = val;
			},
			getUserId:function(){
				return userId;
			},
			getUserSession : function(cb){				

				 $http.get(appUrlService.getUserSession, {
				 	 params: {
				   		orgId: 2
				  	}
				 }).success(function(resp) {
				  cb(resp);				  
				 })
			},
			getProfileInfo : function(cb){
				 $http.get(appUrlService.getProfileInfo, {
				 }).success(function(resp) {
				  cb(resp);				  
				 })
			}
			
		};
	}]);
});

