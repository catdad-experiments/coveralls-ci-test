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

// super simple function that does code that
// is specific to an os
function platform() {
  var os = /^win/.test(process.platform) ? 'win' : 'linux';

  if (os === 'linux') {
    return one();
  }

  var str = four().toString();

  if (str.length > 2) {
    return 2;
  }

  return 1;
}

module.exports = { one, two, three, platform };
