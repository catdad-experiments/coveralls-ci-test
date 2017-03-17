/* jshint node: true, esversion: 6 */

function one() {
  return true;
}

function two(val) {
  if (val === 1) {
    return true;
  }

  return false;
}

function three() {
  return false;
}

module.exports = { one, two, three };
