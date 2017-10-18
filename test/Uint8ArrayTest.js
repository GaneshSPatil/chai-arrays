const chai = require('chai');
const chaiArrays = require('../assertArrays');

chai.use(chaiArrays);

const expect = chai.expect;

describe('Assert Uint8Array', () => {
  it('should assert the type is Uint8Array', () => {
    const collection = new Uint8Array();

    expect(collection).to.be.Uint8Array();
  });

  it('should assert presence of a value in array', () => {
    const collection = new Uint8Array(2);

    collection[0] = 1;
    collection[1] = 2;

    expect(collection).to.be.containing(1);
  });

  it('should assert absence of a value in array', () => {
    const collection = new Uint8Array(2);

    collection[0] = 1;
    collection[1] = 2;

    expect(collection).not.to.be.containing(4);
  });

  it('should assert presence of all values in array', () => {
    const collection = new Uint8Array(3);

    collection[0] = 1;
    collection[1] = 2;
    collection[2] = 3;

    expect(collection).to.be.containingAllOf(new Uint8Array([1]));
    expect(collection).to.be.containingAllOf(new Uint8Array([1, 3]));
    expect(collection).to.be.containingAllOf(new Uint8Array([1, 2, 3]));
  });

  it('should assert absence of all values in array', () => {
    const collection = new Uint8Array(3);

    collection[0] = 1;
    collection[1] = 2;
    collection[2] = 3;

    expect(collection).not.to.be.containingAllOf(new Uint8Array([4]));
    expect(collection).not.to.be.containingAllOf(new Uint8Array([1, 4]));
  });

  it('should assert presence of at least one value in array', () => {
    const collection = new Uint8Array(3);

    collection[0] = 1;
    collection[1] = 2;
    collection[2] = 3;

    expect(collection).to.be.containingAnyOf(new Uint8Array([1]));
    expect(collection).to.be.containingAnyOf(new Uint8Array([1, 5]));
    expect(collection).to.be.containingAnyOf(new Uint8Array([1, 5, 3]));
  });

  it('should assert absence of all values in array', () => {
    const collection = new Uint8Array(3);

    collection[0] = 1;
    collection[1] = 2;
    collection[2] = 3;

    expect(collection).not.to.be.containingAnyOf(new Uint8Array([4]));
    expect(collection).not.to.be.containingAnyOf(new Uint8Array([4, 5, 8]));
  });

  it('should assert actual is equalTo expected', () => {
    expect(new Uint8Array([1, 2, 3])).to.be.equalTo(new Uint8Array([1, 2, 3]));
    expect(new Uint8Array(['foo', 'bar', 'foobar'])).to.be.equalTo(new Uint8Array(['foo', 'bar', 'foobar']));
  });

  it('should assert actual is not equal to expected for unequal length arrays', () => {
    expect(new Uint8Array([1])).not.to.be.equalTo(new Uint8Array([1, 2, 3]));
  });

  it('should assert the size of array', () => {
    expect(new Uint8Array([1, 2, 3])).to.be.ofSize(3);
  });

  it('should not assert the size of array', () => {
    expect(new Uint8Array([1, 2, 3])).not.to.be.ofSize(5);
  });

  it('should assert that the array is sorted', () => {
    expect(new Uint8Array([1, 2, 3])).to.be.sorted();
  });

  it('should assert that the array is not sorted', () => {
    expect(new Uint8Array([1, 5, 2, 3])).not.to.be.sorted();
  });
});
