"use strict";

let k = 0;

function count() {
    for (let i = 0; i < 1e3; i++) {
        k++;
        console.log(k);
    }
}

count();