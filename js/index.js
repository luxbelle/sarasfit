
angular
  .module('Survey',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('AppCtrl', function($scope) {
    
    $scope.submit =function() {
      $scope.display = $scope.data.group1 + $scope.data.group2;
  };

    $scope.data = {
      group1 : '추천브라1',
      group2 : '추천브라2'
      group3 : '추천브라3',
    };

    $scope.frontData = [{
        id: "img/flat.png",
        title: '납작형',
        value: '납작형 추천1'
      },{
        id: "img/cone.png",
        title: '원추형',
        value: '원추형 추천2'
      },{
        id: "img/hemi.png",
        title: '반구형',
        value: '반구형 추천3'
    },{
        id: "img/drooping.png",
        title: '하수형',
        value: '하수형 추천4'
    }];

    $scope.sideData = [{
        id: "img/flat.png",
        title: 'Round',
        value: 'Round 추천1'
      },{
        id: "img/cone.png",
        title: '벌어진형-퍼진형',
        value: '벌어진형-퍼진형 추천2'
      },{
        id: "img/hemi.png",
        title: '짝짝',
        value: '짝짝 추천3'
    },{
        id: "img/drooping.png",
        title: '새가슴',
        value: '새가슴 추천4'
    }];


    $scope.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: '3'},
      { label: '4', value: '4' }
    ];



  });