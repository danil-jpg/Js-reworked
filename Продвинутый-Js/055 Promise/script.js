// let req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let product = {
//             name: "tv",
//             price: "2000"
//         };
//         console.log("Подготовка данных...");

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             product.status = "order";
//             resolve(product);
//         }, 2000);
//     });
// }).then((data) => {
//     data.modify = "true";
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error("Произошла ошибка");
// }).finally(() => {
//     console.log("method  finally works in each situations");
// });

const test = function(time) {
    return new Promise(resolve => {
        setTimeout(() => { resolve(); }, time);
    });
};

// test(1000).then(() => { console.log("1000 ms"); });
// test(2000).then(() => { console.log("2000 ms"); });

Promise.all([test(1000), test(2000)]).then(() => {
    console.log("Успех")
}).catch(() => {
    console.log("Провал");
});