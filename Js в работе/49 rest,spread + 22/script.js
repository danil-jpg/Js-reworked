// function copy(copiedElement) {

//     let selectElementToCopy = {};

//     for (let key in copiedElement) {
//         selectElementToCopy[key] = copiedElement[key];
//     }
//     return selectElementToCopy;
// }


// let addByFunc = {
//     some: 44,
//     smth: 55
// };

// let nested = {
//     a: 22,
//     b: 24,
//     dc: {
//         d: 5,
//         c: 7
//     }
// };

// let x = Object.assign({}, nested);

// x.b = 34234;

// console.log(x.b);
// console.log(nested.b)
// console.log(nested)

// let newNested = copy(nested);

// newNested.a = 44;
// newNested.dc.c = 12;





// console.log(newNested);
// console.log(nested);

// Копирование массивов
// Копирование массивов
// Копирование массивов
// Копирование массивов
// Копирование массивов
// Копирование массивов

let oldArr = ["a", "b", "c", "d", "e", "f"],
    newArr = oldArr.slice(),
    newnewArr = oldArr.slice();

console.log(newArr);
newArr.push("g");
newnewArr.shift();

let allMylettersInOneMassive = [...oldArr, ...newArr, ...newnewArr, "special for the first updata : i!!!"];
console.log(allMylettersInOneMassive);

// function giveLog(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let massive = [2, 3, 5];

// giveLog(...massive);

// let obj = {
//     one: 1,
//     numb: 3
// };

// let copiedObj = {...obj };
// // абсолютно тоже самое работаеет и с массивами

// console.log(copiedObj);

// Rest оператор 049 урок - последний из раздела!

function threePointAndAnyWordAfterThisIsARestOperator(a, b, c, ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}

threePointAndAnyWordAfterThisIsARestOperator(1, 2, 3, 4, 5, 6);

function defalt(a, b = 2) {
    a + b;
}

defalt(2);