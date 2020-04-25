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

};

module.exports = { Set };
