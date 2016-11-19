const chai = require('chai');
const chaiArrays = require('../assertArrays');

chai.use(chaiArrays);

const expect = chai.expect;

describe('Assert Arrays', () => {
  describe('containing', () => {

    it('should assert presence of a value in array', () => {
      expect([1, 2, 3]).to.be.containing(1);
    });

    it('should assert absence of a value in array', () => {
      expect([1, 2, 3]).not.to.be.containing(4);
    });

    it('should assert presence of a value in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};

      const actual = [element1, element2];

      expect(actual).to.be.containing(element2);
    });

    it('should assert absence of a value in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element3];

      expect(actual).not.to.be.containing(element2);
    });

    it('should throw proper error when array does not contain the expected element', () => {
      expect(() => {
        expect([1, 2, 3]).to.be.containing(4);
      }).throws('expected [ 1, 2, 3 ] to be containing 4');
    });

    it('should throw proper error when array does contain the expected element', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.containing(2);
      }).throws('expected [ 1, 2, 3 ] not to be containing 2');
    });

  });

  describe('containingAllOf', () => {

    it('should assert presence of all values in array', () => {
      expect([1, 2, 3]).to.be.containingAllOf([1]);
      expect([1, 2, 3]).to.be.containingAllOf([1, 3]);
      expect([1, 2, 3]).to.be.containingAllOf([1, 2, 3]);
    });

    it('should assert absence of all values in array', () => {
      expect([1, 2, 3]).not.to.be.containingAllOf([4]);
      expect([1, 2, 3]).not.to.be.containingAllOf([1, 4]);
    });

    it('should assert presence of all values in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element2, element3];

      expect(actual).to.be.containingAllOf([element1, element3]);
    });

    it('should assert absence of all values in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element3];

      expect(actual).not.to.be.containingAllOf([element1, element2]);
    });

    it('should throw proper error when array does not contain the expected elements', () => {
      expect(() => {
        expect([1, 2, 3]).to.be.containingAllOf([1, 4]);
      }).throws('expected [ 1, 2, 3 ] to be containing all of [1,4]');
    });

    it('should throw proper error when array does contain the expected elements', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.containingAllOf([1]);
      }).throws('expected [ 1, 2, 3 ] not to be containing all of [1]');
    });

  });

  describe('containingAnyOf', () => {

    it('should assert presence of at least one value in array', () => {
      expect([1, 2, 3]).to.be.containingAnyOf([1]);
      expect([1, 2, 3]).to.be.containingAnyOf([1, 5]);
      expect([1, 2, 3]).to.be.containingAnyOf([1, 5, 3]);
    });

    it('should assert absence of all values in array', () => {
      expect([1, 2, 3]).not.to.be.containingAnyOf([4]);
      expect([1, 2, 3]).not.to.be.containingAnyOf([4, 5, 8]);
    });

    it('should assert presence of any of the values in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element3];

      expect(actual).to.be.containingAnyOf([element1, element2]);
    });

    it('should assert absence of all values in a array of complex objects', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element3];

      expect(actual).not.to.be.containingAnyOf([element2]);
    });

    it('should throw proper error when array does not contain any of the expected elements', () => {
      expect(() => {
        expect([1, 2, 3]).to.be.containingAnyOf([4]);
      }).throws('expected [ 1, 2, 3 ] to be containing any of [4]');
    });

    it('should throw proper error when array does contain any of the expected elements', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.containingAnyOf([1, 5]);
      }).throws('expected [ 1, 2, 3 ] not to be containing any of [1,5]');
    });

  });

  describe('equalTo', () => {

    it('should assert actual is equalTo expected', () => {
      expect([1, 2, 3]).to.be.equalTo([1, 2, 3]);
      expect(['foo', 'bar', 'foobar']).to.be.equalTo(['foo', 'bar', 'foobar']);
    });

    it('should assert actual is not equal to expected', () => {
      expect([1, 2, 3]).not.to.be.equalTo([1, 4, 3]);
      expect(['foo', 'bar', 'foobar']).not.to.be.equalTo(['foo', 'baz', 'foobar']);
    });

    it('should assert actual is equal to expected for complex arrays', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element2, element3];
      const expected = [element1, element2, element3];

      expect(actual).to.be.equalTo(expected);
    });

    it('should assert actual is equal to expected for complex arrays', () => {
      const element1 = {'foo': [{'a': 1}]};
      const element2 = {'foo': [{'a': 2}]};
      const element3 = {'foo': [{'a': 3}]};

      const actual = [element1, element2, element3];
      const expected = [element1, element3, element2];

      expect(actual).not.to.be.equalTo(expected);
    });

    it('should throw proper error when actual is not equal to expected', () => {
      expect(() => {
        expect([1, 2, 3]).to.be.equalTo([1, 2, 4]);
      }).throws('expected [ 1, 2, 3 ] to be equal to [1,2,4]');
    });

    it('should throw proper error when actual is equal to expected', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.equalTo([1, 2, 3]);
      }).throws('expected [ 1, 2, 3 ] not to be equal to [1,2,3]');
    });

  });

  describe('ofSize', () => {

    it('should assert the size of array', () => {
      expect([1, 2, 3]).to.be.ofSize(3);
    });

    it('should not assert the size of array', () => {
      expect([1, 2, 3]).not.to.be.ofSize(5);
    });

    it('should throw proper error when actual size is not equal to expected', () => {
      expect(() => {
        expect([1, 2, 3]).to.be.ofSize(5);
      }).throws('expected [ 1, 2, 3 ] to be of size 5');
    });

    it('should throw proper error when actual size is equal to expected', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.ofSize(3);
      }).throws('expected [ 1, 2, 3 ] not to be of size 3');
    });

  });

  describe('isArray', () => {

    it('should assert the type is array', () => {
      expect([1, 2, 3]).to.be.array();
    });

    it('should assert the type is not array', () => {
      expect('foo').not.to.be.array();
    });

    it('should throw proper error when actual is not an array', () => {
      expect(() => {
        expect(1).to.be.array();
      }).throws('expected 1 to be an Array');
    });

    it('should throw proper error when actual is an array', () => {
      expect(() => {
        expect([1]).not.to.be.array();
      }).throws('expected [ 1 ] not to be an Array');
    });
  });

  describe('sorted', () => {

    it('should assert that the array is sorted', () => {
      expect([1, 2, 3]).to.be.sorted();
    });

    it('should assert that the array is not sorted', () => {
      expect([1, 5, 2, 3]).not.to.be.sorted();
    });

    it('should assert that the array is sorted based on the method provided', () => {
      const by = function(prev, next) {
        return prev < next;
      };

      expect([3, 2, 1]).to.be.sorted(by);
    });

    it('should assert that the array is not sorted based on the method provided', () => {
      const by = function(prev, next) {
        return prev < next;
      };

      expect([1, 2, 3]).not.to.be.sorted(by);
    });

    it('should throw proper error when array is not sorted', () => {
      expect(() => {
        expect([1, 2, 4, 3]).to.be.sorted();
      }).throws('expected [ 1, 2, 4, 3 ] to be sorted');
    });

    it('should throw proper error when array is sorted', () => {
      expect(() => {
        expect([1, 2, 3]).not.to.be.sorted();
      }).throws('expected [ 1, 2, 3 ] not to be sorted');
    });
  });

});
