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

});
