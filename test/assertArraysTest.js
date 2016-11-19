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
      const actual = [{'foo': [{'a': 2}]}, {'foo': [{'a': 1}]}, {'foo': [{'b': 1}]}];
      const element = {'foo': [{'a': 1}]};

      expect(actual).not.to.be.containing(element);
    });

  });
});
