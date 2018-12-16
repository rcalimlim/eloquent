function fetchTypeIfSame(...args) {
    /* return true iff all passed args have same type */
    let same = undefined;
    for (let i = 0; i < args.length; ++i) {
        if (i === args.length - 1) break;
        else if (args[i] === null && args[i + 1] === null) {
            same = null;
        }
        else if (typeof args[i] === 'object' &&
                 typeof args[i + 1] === 'object' &&
                 (args[i] === null || args[i + 1] === null)) {
            same = false;
        }
        else if (typeof args[i] === typeof args[i + 1]) {
            same = typeof args[i];
        }
        else same = false;
    }
    return same;
}

function deepEqual(a, b) {
    if (fetchTypeIfSame(a, b) === 'object') {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        let keyArray = obj => Object.keys(obj);
        for (let i = 0; i < keyArray(a).length; ++i) {
            if (keyArray(a)[i] !== keyArray(b)[i]) return false;
            else return deepEqual(a[keyArray(a)[i]], b[keyArray(b)[i]]);
        }
    }
    else if (!fetchTypeIfSame(a, b) && (a === null || b === null)) {
        return false;
    }
    else return (typeof a === typeof b);
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, null));
// > false