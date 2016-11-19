const doesContain = function(array, element) {
  return array.indexOf(element) !== -1;
};

const doesContainAll = function(array, values) {
  return values.every((element) => doesContain(array, element));
};

module.exports = (chai) => {

  chai.Assertion.addMethod('containing', function(value) {
    this.assert(
      doesContain(this._obj, value),
      `expected #{this} to be containing ${value}`,
      `expected #{this} not to be containing ${value}`
    );
  });

  chai.Assertion.addMethod('containingAllOf', function(values) {
    this.assert(
      doesContainAll(this._obj, values),
      `expected #{this} to be containing all of [${values.join(', ')}]`,
      `expected #{this} not to be containing all of[${values.join(', ')}]`
    );
  });

};
