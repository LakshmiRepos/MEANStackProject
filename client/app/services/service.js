app.factory("service",function($http,$q){
  var data = {
    login : login,
    addUser : addUser,
    getProducts : getProducts,
    addToCart : addToCart,
    showCart : showCart,
    checkout : checkout,
    deleteProd : deleteProd,
    history : history    
  };
  return data;  

  function login(data){
    return request('POST','/api/user/login',data,null);
  }

  function addUser(data){
    return request('POST','/api/user/add',data,null);
  }

  function getProducts(){
    return request('GET','/api/product/getproducts',null,null);
  }

  function addToCart(data){
    return request('POST','/api/transaction/add',data,null);
  }

  function showCart(id){
    return request('GET','/api/transaction/get/'+id,null,null);
  }  

  function checkout(data){
    return request('POST','/api/transaction/checkout',data,null);
  }

  function deleteProd(data){
    return request('POST','/api/transaction/delete',data,null);
  }

  function history(id){
    return request('get','/api/transaction/history/'+id,null,null);
  }

  function request(method,url,data,headers){
    var deferred = $q.defer();
    $http({
      method : method,
      headers : headers,
      url : url,
      data : data
    }).success(function(data,status){
      var result = {
        data : data || {},
        status : status
      }
      deferred.resolve(result);
    }).error(function(error,status){
      var result= {
        data : error || {},
          status : status
      }
      deferred.resolve(result);
    })
    return deferred.promise;
  }
});
