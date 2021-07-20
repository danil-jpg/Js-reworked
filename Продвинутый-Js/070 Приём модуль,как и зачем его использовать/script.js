const app = " 11";

let number = '11';

(function() {
    let number = 1;
    console.log(number);
    console.log(number + 2);
}());

console.log(number);

let user = (function() {
    let privat = function() {
        console.log("some text");
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();