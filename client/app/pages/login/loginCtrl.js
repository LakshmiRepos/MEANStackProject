app.controller("loginCtrl",['service',function(service){

  var login = this;
  login.opened = false;
  login.user = {};

  login.signUp = function(){
    login.user = {};
    login.user.type = "ADMIN";
    $("#signUp").modal("show");
  }

  login.open = function($event){
    $event.preventDefault();
    $event.stopPropagation();

    login.opened = !login.opened;
  }

  login.signIn = function(){
    var data = {
      "username" : login.username,
      "password" : login.password
    };
    service.login(data).then(function(obj){
      if(obj.status === 200 && obj.data.data._id){
        window.location.href = '#/home/products/'+obj.data.data.id;       
      } else {
        alert("Invalid user id password");
      }
    });
  }

  login.clear = function(){
    login.username = "";
    login.password = "";
  }

  login.save = function(){
    if(login.user.password === login.user.confirmPass){
      login.user.id = "user-"+new Date().getTime();
      service.addUser(login.user).then(function(data){
        if(data.status == 200){
          $("#signUp").modal("hide");
        } else {
          alert("Error"+data.data.err);
        }
      });
    } else {
      alert("Password mismatch");
    }
  }
}]);
