// "use strict";

// try {
//     console.log("normal");
//     console.log(a);
//     console.log("result")
// } catch (eror) {
//     console.log(eror.name);
//     console.log(eror.message);
//     console.log(eror.stack);
// }finally{

// }

// console.log("Still normal");
try {
    document.querySelector(".btn").addEventListener("click", () => {
        console.log("click");
    });
} catch (e) {
    console.log(e);
}
console.log("normal");