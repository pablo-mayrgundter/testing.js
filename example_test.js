import Testing from './testing.js';

const tests = new Testing();
tests.add('Test assertEquals', () => {
    tests.assertEquals('foo', 'foo', 'Expected foo == foo');
  });

tests.add('Failing test', () => {
    tests.assertEquals('foo', 'bar', 'Erroneously expect foo == bar');
  });

tests.run();
