app.controller("checkOutCtrl",['service','$stateParams',function(service,$stateParams){

  var cc = this;
  cc.userID = $stateParams.id;
  cc.savedProducts = []

	service.showCart(cc.userID).then(function(obj){
		cc.savedProducts = obj.data.data;
	});

	cc.checkout = function(data){
		service.checkout(data).then(function(obj){
			var index = cc.savedProducts.indexOf(data);
			cc.savedProducts.splice(index,1);
		});		
	}

	cc.remove = function(data){
		service.deleteProd(data).then(function(obj){
			if(obj.status === 200){
				var index = cc.savedProducts.indexOf(data);
				cc.savedProducts.splice(index,1);
			}			
		});		
	}
  
}]);
