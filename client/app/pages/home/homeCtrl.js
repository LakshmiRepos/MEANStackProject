app.controller("homeCtrl",['service','$stateParams',function(service,$stateParams){

  var hc = this;
  hc.products = [];

  hc.userID = $stateParams.id;

  service.getProducts().then(function(obj){
    hc.products = obj.data.data;    
  });

  hc.addToCart = function(data){
    data.userId = $stateParams.id;
    data.isCheckedOut = false;
    service.addToCart(data).then(function(obj){
      if(obj.status === 200){
        alert("Added to Cart");
      }
    });
  }
}]);
