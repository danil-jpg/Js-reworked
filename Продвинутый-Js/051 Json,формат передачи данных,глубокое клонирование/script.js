let userData = {
    name: "Dmitri",
    id: 44,
    parents: {
        dad: "Danil",
        mom: "Inga"
    }
};

let jsformat = JSON.stringify(userData),
    jsUnFormat = JSON.parse(jsformat);

jsUnFormat.mom = "Olga";
console.log(userData);
console.log(jsUnFormat);