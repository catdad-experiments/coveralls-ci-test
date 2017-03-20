/* jshint node: true, mocha: true, esversion: 6 */

var expect = require('chai').expect;

var lib = require('../');

describe('[index]', () => {
  describe('#one', () => {
    it('returns true', () => {
      expect(lib.one()).to.equal(true);
    });
  });

  describe('#two', () => {
    it('sometimes returns true', () => {
      expect(lib.two(1)).to.equal(true);
    });

    it('sometimes returns false');
  });

  describe('#three', () => {
    it('return false', () => {
      expect(lib.three()).to.equal(false);
    });
  });

  describe('#platform', () => {
    it('does a thing', () => {
      expect(lib.platform()).to.not.equal(undefined);
    });
  });
});
