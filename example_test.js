const testing = require('./testing.js');

const tests = new testing();
tests.add('Test assertEquals', () => {
    tests.assertEquals('foo', 'foo', 'Expected foo == foo');
  });

tests.add('Failing test', () => {
    tests.assertEquals('foo', 'bar', 'Erroneously expect foo == bar');
  });

tests.run();
