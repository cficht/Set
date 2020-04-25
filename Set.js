class Set {
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!this.items.includes(item)) this.items.push(item);
    return this.items;
  };

  remove(item) {
    if (this.items.includes(item)) this.items.splice(this.items.indexOf(item), 1);
    return this.items;
  };

  has(item) {
    if (this.items.includes(item)) return true;
    return false;
  }

  intersection(set) {
    const interSet = new Set();
    this.items.forEach(item => {
      if(set.items.includes(item)) interSet.add(item);
    });
    return interSet;
  }

  union(set) {
    const unionSet = new Set();
    this.items.forEach(item => unionSet.add(item));
    set.items.forEach(item => {
      if(!unionSet.items.includes(item)) unionSet.add(item);
    });
    return unionSet;
  }

  difference(set) {
    const diffSet = new Set();
    this.items.forEach(item => {
      if(!set.items.includes(item)) diffSet.add(item);
    });
    set.items.forEach(item => {
      if(!this.items.includes(item)) diffSet.add(item);
    });
    return diffSet;
  }

  static intersection(set1, set2) {
    const interSet = new Set();
    set1.items.forEach(item => {
      if(set2.items.includes(item)) interSet.add(item);
    });
    return interSet;
  }

};

module.exports = { Set };
