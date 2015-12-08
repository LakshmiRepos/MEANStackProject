app.controller("historyCtrl",['service','$stateParams',function(service,$stateParams){
  var hist = this;
  hist.userID = $stateParams.id;

  hist.checkedOutProducts = [];
  service.history(hist.userID).then(function(obj){
		hist.checkedOutProducts = obj.data.data;
	});
  
}]);
