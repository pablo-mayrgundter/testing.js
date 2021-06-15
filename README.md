# testing.js
Unit testing support for javascript.

example_test.js:
```javascript
import Testing from '@pablo-mayrgundter/testing.js/testing.js';

// Alternatively, just import asserts as needed, e.g.:
// import {assertEquals, assertFinite} from '@pablo-mayrgundter/testing.js/testing.js';

const tests = new Testing();
tests.add('Test assertEquals', () => {
  tests.assertEquals('foo', 'foo', 'Expected foo == foo');
});

tests.add('Failing test', () => {
  tests.assertEquals('foo', 'bar', 'Erroneously expect foo == bar');
});

tests.run();
```

Run with node like this (first test passes, second fails):
```
~/testing.js> node example_test.js
FAIL: Failing test  Error: Erroneously expect foo == bar
    at Testing.assertEquals (/Users/pablo/testing.js/testing.js:19:13)
    at tests.add (/Users/pablo/testing.js/example_test.js:9:11)
    at Testing.run (/Users/pablo/testing.js/testing.js:39:9)
    at Object.<anonymous> (/Users/pablo/testing.js/example_test.js:12:7)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
TOTAL OK: 1, FAIL: 1
```

# Build
```
# Test before build
npm run test
# If all OK, increment version:
vi package.json
# Then build dist:
npx rollup -c
npm publish
# Follow-up with git checkin
```
