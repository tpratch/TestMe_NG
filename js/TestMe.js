function indexController($scope) {
    
    var flaggedID = 3;
    $scope.errorMessages = [{
        "message": ""},
    {
        "message": "Please make a selection!"},
    {   
        "message": "Please make a selection!"},
    {
        "message": "The system is down!"
    }];

    $scope.checks = [{
        "id": 0,
        "value": "1",
        "label": "Abstract",
        "checked": false},
    {
        "id": 1,
        "value": "2",
        "label": "Publication",
        "checked": false},
    {
        "id": 2,
        "value": "3",
        "label": "Inventor",
        "checked": false},
    {
        "id": 3,
        "value": "4",
        "label": "Language",
        "checked": false},
    {
        "id": 4,
        "value": "5",
        "label": "Source",
        "checked": false},
    {
        "id": 5,
        "value": "6",
        "label": "Priority",
        "checked": false}];

    $scope.value = [];
    $scope.checkedList = [];
    $scope.updateServerFail = function(boolHolder){
        $scope.failServer = boolHolder.checked;
    }
    $scope.updateCheckValues = function(checky){
        answered=[];
        answered = $scope.answered();
        if (answered.length==$scope.checks.length){
            $scope.selectAll = true;
        }
        if (answered.length<1){
            $scope.selectAll = false;
        }
    };
    $scope.checkAll = function(){
        $scope.selectAll = !$scope.selectAll;
        angular.forEach($scope.checks, function (check) {
            check.checked = $scope.selectAll;
        });
        answered = [];
        angular.forEach($scope.checks, function (check){
            if(check.checked){
                answered.push(check.id);
            }
        });
    };
    $scope.answered = function(){
        answered = [];
        $scope.checkedList = [];
        angular.forEach($scope.checks, function (check){
            if(check.checked){
                answered.push(check.id);
                $scope.checkedList.push(check.label);
            }
        });
        return answered;
    }
    $scope.validation = function(){
        answered = $scope.answered();
       if(answered.length<1){
            $scope.system.message.status = $scope.errorMessages[1].message;
            return false;
        }else if(answered.indexOf(flaggedID) > -1&&answered.length==1){
            $scope.system.message.status = $scope.errorMessages[2].message;
            return false;
        }else{
            $scope.system.message.status = $scope.errorMessages[0].message;
            return true;
        }
    }
    $scope.processPage = function(){
        if($scope.validation()==true){
            if($scope.failServer){
            $scope.system.message.status = $scope.errorMessages[3].message;
            }else{
            //serviceCall.set(check);
            }
        }

    }

    //set-and-get

};