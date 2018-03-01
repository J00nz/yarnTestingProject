var sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds "1" + "2" to equal 3', () => {
  expect(sum('1', '2')).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('adds 1 + 2 + 3 + 4 to equal 10', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('adds 1 + 2 + 3 + 4 + 5 to equal 15', () => {
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
});

test('can add houndred arguments', () => {
  var i = 100
  var arr = []
  while (i--) {
    arr[i] = 1
  }

  expect(sum.apply(null, arr)).toBe(100);
})

