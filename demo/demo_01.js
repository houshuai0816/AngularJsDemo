/**
 * Created by housh on 2017/5/22.
 */
function phoneListCtl($scope) {
    $scope.phones = [
        {
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "age":0
        },
        {
            "name":"Motorola XOOM with Wi-Fi",
            "snippet":"The Next ,Next Generation tablet.",
            "age":1
        },
        {
            "name":"MOTOROLA XOOM",
            "snippet":"The Next ,Next Generation tablet.",
            "age":2
        }
    ];
    $scope.hello="Hello , World!"
    $scope.orderProp = 'age';
}