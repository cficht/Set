const { Set } = require('./Set');

describe('testing Set.js', () => {
  const testSet = new Set();
  console.log(testSet);

  it('adds item to the set', () => {
    const testItem = 'Chair';
    expect(testSet.add(testItem)).toEqual([testItem]);
  });

  it('does not add duplicates', () => {
    const testItem = 'Chair';
    testSet.add(testItem);
    expect(testSet.add(testItem)).toEqual([testItem]);
  });

  it('removes item from the set', () => {
    const testItem = 'Chair';
    const testItem2 = 'Couch';
    testSet.add(testItem);
    testSet.add(testItem2);
    expect(testSet.remove(testItem)).toEqual([testItem2]);
  });

});
