module.exports = (chai) => {

  chai.Assertion.addMethod('containing', function(value) {
    this.assert(
      this._obj.indexOf(value) !== -1,
      `expected #{this} to be containing ${value}`,
      `expected #{this} not to be containing ${value}`
    );
  });

};
