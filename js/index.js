angular.module("mainModule", [])
  .controller("MyCtrl", function ($scope)
  {
    $scope.sizeCalc = function ()
    {
              $scope.bandValue1 = 10;
              cupValue1 = cupValue+1; 
              bandValue2 = bandValue-5;
              cupValue2 = cupValue+1;
              if (same){
                if (up){
                  if (first){
                    showBand = bandValue1
                    showCup = cupValue1
                  }
                }   
              }
              bandValue=5;              
    };
  })


angular
  .module('Survey',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('AppCtrl', function($scope) {

    $scope.submit =function() {
      $scope.display = $scope.data.group1 + $scope.data.group2  + $scope.data.group3;
      $scope.selected = $scope.frontData[0].value;
  };

    $scope.data = {
      group1 : '추천브라1',
      group2 : '추천브라2',
      group3 : '추천브라3',
    };

    $scope.frontData = [{
        id: "img/flat.png",
        title: '납작형',
        value: 'flat'
      },{
        id: "img/cone.png",
        title: '원추형',
        value: 'cone'
      },{
        id: "img/hemi.png",
        title: '반구형',
        value: 'hemi'
    },{
        id: "img/drooping.png",
        title: '하수형',
        value: 'drooping'
    }];

    $scope.sideData = [{
        id: "img/dgh.png",
        title: '둥근형',
        value: 'dgh'
      },{
        id: "img/pjh.png",
        title: '퍼진형',
        value: 'pjh'
      },{
        id: "img/jgs.png",
        title: '짝가슴',
        value: 'jgs'
    }];

    $scope.padData = [{
        title: '없음',
        value: 'nopad'
      },{
        title: '얇은 패드',
        value: 'thinpad'
      },{
        title: '컵 아래부분의 반정도 볼륨이 있는 중간 패드',
        value: 'midpad'
    },{
        title: '컵 전체를 거의다 볼륨으로 채우는 두꺼운 패드',
        value: 'thickpad'
    }];
   



  });