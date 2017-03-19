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

function four() {
  return 4;
}

module.exports = { one, two, three };
