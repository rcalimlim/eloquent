class Group {
    constructor() {
        this.group = [];
    }
    add(value) {
        if (this.group.indexOf(value) == -1) this.group.push(value);
    }
    delete(value) {
        let index = this.group.indexOf(value);
        if (index != -1) this.group.splice(index, 1);
    }
    has(value) {
        return this.group.indexOf(value) > -1 ? true : false;
    }
    static from(iterable) {
        let newGroup = new Group();
        for (let val of iterable) {
            if (!newGroup.group.indexOf(val) > -1) {
                newGroup.group.push(val);
            }
        }
        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group);
console.log(group.has(10));
// → false