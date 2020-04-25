const { Set } = require('./Set');

describe('testing Set.js', () => {

  it('adds item to the set', () => {
    const testSet = new Set();
    const testItem = 'Chair';
    expect(testSet.add(testItem)).toEqual([testItem]);
  });

  it('does not add duplicates', () => {
    const testSet = new Set();
    const testItem = 'Chair';
    testSet.add(testItem);
    expect(testSet.add(testItem)).toEqual([testItem]);
  });

  it('removes item from the set', () => {
    const testSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    testSet.add(testItem);
    testSet.add(testItem2);
    expect(testSet.remove(testItem)).toEqual([testItem2]);
  });

  it('returns true since item is in set', () => {
    const testSet = new Set();
    const testItem = 'Chair';
    testSet.add(testItem);
    expect(testSet.has(testItem)).toEqual(true);
  });

  it('returns false since item is not in set', () => {
    const testSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    testSet.add(testItem2);
    expect(testSet.has(testItem)).toEqual(false);
  });

  it('returns a new set with the intersection of the two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const interSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    interSet.add(testItem2);
    interSet.add(testItem3);

    expect(testSet.intersection(testSet2)).toEqual(interSet);
  });

  it('returns a new set with the union of the two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const unionSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    unionSet.add(testItem);
    unionSet.add(testItem2);
    unionSet.add(testItem3);
    unionSet.add(testItem4);

    expect(testSet.union(testSet2)).toEqual(unionSet);
  });

  it('returns a new set with the difference of the two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const diffSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    diffSet.add(testItem);
    diffSet.add(testItem4);

    expect(testSet.difference(testSet2)).toEqual(diffSet);
  });

  it('static method that returns a new set with the intersection of two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const interSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    interSet.add(testItem2);
    interSet.add(testItem3);

    expect(Set.intersection(testSet, testSet2)).toEqual(interSet);
  });

  it('static method that returns a new set with the union of two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const unionSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    unionSet.add(testItem);
    unionSet.add(testItem2);
    unionSet.add(testItem3);
    unionSet.add(testItem4);

    expect(Set.union(testSet, testSet2)).toEqual(unionSet);
  });

  it('static method that returns a new set with the difference of two sets', () => {
    const testSet = new Set();
    const testSet2 = new Set();
    const diffSet = new Set();
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    const testItem3 = 'Bench';
    const testItem4 = 'Table';

    testSet.add(testItem);
    testSet.add(testItem2);
    testSet.add(testItem3);
    testSet2.add(testItem2);
    testSet2.add(testItem3);
    testSet2.add(testItem4);
    diffSet.add(testItem);
    diffSet.add(testItem4);

    expect(Set.difference(testSet, testSet2)).toEqual(diffSet);
  });

});
