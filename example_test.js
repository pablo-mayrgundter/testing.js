import Testing from './testing.module.js';

const tests = new Testing();
tests.add('Test assertEquals', () => {
    tests.assertEquals('foo', 'foo', 'Expected foo == foo');
  });

// Uncomment to demonstrate failing test.
// tests.add('Failing test', () => {
//    tests.assertEquals('foo', 'bar', 'Erroneously expect foo == bar');
// });

tests.run();
