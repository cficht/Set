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

};

module.exports = { Set };
