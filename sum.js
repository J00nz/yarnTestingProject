module.exports = function sum(a, b, c) {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    const num = parseInt(arguments[i]);

    sum += num;
  }

  return sum;
}

