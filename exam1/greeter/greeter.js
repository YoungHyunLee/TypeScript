var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
;
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
// 선언류
var isDone = false;
var num = 6;
var name = 'bob';
name = "bob";
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
// enum는 열거. c# 느낌 기본적으로 1씩오르고 0으로 시작함.
// 값을 할당하면 그것은 초기값의 개념.
var color;
(function (color) {
    color[color["red"] = 10] = "red";
    color[color["green"] = 12] = "green";
    color[color["blue"] = 13] = "blue";
})(color || (color = {}));
;
var c = color.green;
// enum는 배열처럼 [1]의 접근을 사용할 수 없음...
var color1;
(function (color1) {
    color1[color1["red1"] = 10] = "red1";
    color1[color1["green1"] = 11] = "green1";
    color1[color1["blue1"] = 12] = "blue1";
})(color1 || (color1 = {}));
;
var cc = color1.green1; //[2];
//# sourceMappingURL=greeter.js.map