/* jshint node: true, mocha: true, esversion: 6 */

var expect = require('expect');

var lib = require('../');

describe('[index]', () => {
  describe('#one', () => {
    it('returns true', () => {
      expect(lib.one()).to.equal(true);
    });
  });

  describe('#two', () => {
    it('sometimes returns true');

    it('sometimes returns false');
  });

  describe('#three', () => {
    it('return false');
  });
});
