let options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("test");
    }
};

let { border, bg } = options.colors;

console.log(border, bg);