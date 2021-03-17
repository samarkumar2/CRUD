var app=angular.module("crudApp",[]);
app.controller("crudController",function($scope){
    
        $scope.records=[
            {"Name":"samar","Age":24,"Address":"saharsa"},
            {"Name":"sidhu","Age":26,"Address":"patna"},
            {"Name":"shalini","Age":28,"Address":"delhi"}
        ];

      $scope.delete=function(){
          var index=this.$index;
          $scope.records.splice(index,1);
      }
      $scope.addUser=function(){
        $scope.records.push({
            "Name":$scope.data.Name,
            "Age":$scope.data.Age,
            "Address":$scope.data.Address
        });
        $scope.data.Name="";
        $scope.data.Age="";
        $scope.data.Address="";
    };
    $scope.edit = function(){
        $scope.x={"display":"block"}
        var index=this.$index;
        $scope.edit.index=index;
        $scope.edit.updateName=$scope.records[index].Name;
        $scope.edit.Age=$scope.records[index].Age;
        $scope.edit.Address=$scope.records[index].Address;
        };
    $scope.UpdateUser=function(){
      var index= $scope.edit.index;
      $scope.records[index]={
        "Name":$scope.edit.updateName,
        "Age":$scope.edit.Age,
        "Address":$scope.edit.Address
    };
  
    };
  
    });



    









