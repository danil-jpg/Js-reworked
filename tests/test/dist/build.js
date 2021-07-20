(() => {
    var o = {
            450: o => {
                o.exports = function() {
                    this.hello = function() {
                        console.log("hello")
                    }, this.goodbye = function() {
                        console.log("bye!")
                    }
                }
            }
        },
        e = {};

    function t(n) {
        var r = e[n];
        if (void 0 !== r) return r.exports;
        var l = e[n] = {
            exports: {}
        };
        return o[n](l, l.exports, t), l.exports
    }(() => {
        let o = new(t(450));
        o.hello(), o.goodbye()
    })()
})();