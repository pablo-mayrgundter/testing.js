import Testing from './dist/testing.module.js';
// Example import statement from NPM:
// import Testing from '@pablo-mayrgundter/testing.js/testing.js'
// Alternatively, just import asserts as needed, e.g.:
// import {assertEquals, assertFinite} from '@pablo-mayrgundter/testing.js/testing.js';


const tests = new Testing();
tests.add('Test assertEquals', () => {
  tests.assertTrue(1 == 1, 'Expected condition to be true');
});


tests.add('Test many', () => {
  tests.assertFalse(1 == 2, 'Expected condition to be false');

  tests.assertEquals('foo', 'foo', 'Expected foo == foo');

  tests.assertFail(() => {
    throw new Error('This should fail');
  }, 'Expected function to fail');

  tests.assertFinite(1e10, 'Number must be finite');

  tests.assertInRange(42, -10, 100, 'Number not in range');


  tests.assertDefined({foo: 1}.foo, 'Value not defined');

  tests.assertUndefined({foo: 1}.bar, 'Value should not be defined');
  });

// Uncomment to demonstrate failing test.
// tests.add('Failing test', () => {
//    tests.assertEquals('foo', 'bar', 'Erroneously expect foo == bar');
// });

tests.run();
