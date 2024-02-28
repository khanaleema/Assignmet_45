function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your club sandwich aleema khan");
sandwich('capsicum', 'chicken', 'cheese');
sandwich('mayo sauce', 'beef');
sandwich('garlic chicken', 'tomato');
