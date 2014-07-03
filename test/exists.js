var test = require("tape"),
    o = require("../");

test("exists: primative", function(t){
    var object = { result: "clive", hater: true };
    t.deepEqual(o.exists(object, { result: "clive" }), true);
    t.deepEqual(o.exists(object, { hater: true }), true);
    t.deepEqual(o.exists(object, { result: "clive", hater: true }), true);
    t.deepEqual(o.exists(object, { ibe: true }), false);
    t.end();
});

test("not exists: primative", function(t){
    var object = { result: "clive", hater: true };
    t.deepEqual(o.exists(object, { "!result": "clive" }), false);
    t.deepEqual(o.exists(object, { "!result": "ian" }), true);
    t.deepEqual(o.exists(object, { "!result": "ian", "!hater": false }), true);
    t.end();
});

test("exists: regexp", function(t){
    var object = { result: "red-ish" };
    t.deepEqual(o.exists(object, { result: /red/ }), true);
    t.deepEqual(o.exists(object, { result: /black/ }), false);
    t.deepEqual(o.exists(object, { result: /blue/ }), false);
    t.end();
});

test("not exists: regexp", function(t){
    var object = { result: "red-ish" };
    t.deepEqual(o.exists(object, { "!result": /red/ }), false);
    t.deepEqual(o.exists(object, { "!result": /black/ }), true);
    t.deepEqual(o.exists(object, { "!result": /blue/ }), true);
    t.end();
});