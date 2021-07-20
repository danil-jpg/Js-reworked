// function* generator() {
//     yield "s";
//     yield "c";
//     yield "r";
//     yield "i";
//     yield "p";
//     yield "t";
// }

// const str = generator();
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(4);

// console.log(counter.next());

// console.log(counter.next().value);

// console.log(counter.next().value);

// console.log(counter.next().value);

for (let key of count(2)) {
    console.log(key);
}