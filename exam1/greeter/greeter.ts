class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter.greet();


// 선언류
var isDone : boolean = false;
var num : number = 6;
var name : string = 'bob';
name = "bob";

var array1 : number[] = [1, 2, 3];
var array2 : Array<number> = [1, 2, 3];


// enum는 열거. c# 느낌 기본적으로 1씩오르고 0으로 시작함.
// 값을 할당하면 그것은 초기값의 개념.
enum color { red = 10, green = 12, blue };
var c: color = color.green;
// enum는 배열처럼 [1]의 접근을 사용할 수 없음...
enum color1 { red1 = 10, green1 , blue1 };
var cc: color1 = color1.green1//[2];


// any

coming...

























































