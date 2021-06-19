function assertTrue(cond, msg) {
  if (!cond) {
    throw new Error(msg || `Condition must be true: ${cond}`);
  }
  return true;
}


function assertFalse(cond, msg) {
  if (cond) {
    throw new Error(msg || `Condition must be false: ${cond}`);
  }
  return false;
}


function assertEquals(expected, actual, msg) {
  if (expected !== actual) {
    throw new Error(msg || `expected(${expected}) != actual(${actual}).`);
  }
  return actual;
}


function assertFail(func, msg) {
  if (typeof func !== 'function') {
    throw new Error('Expected test condition to be a function, got: ' + (typeof func));
  }
  try {
    func();
  } catch (e) {
    return func;
  }
  throw new Error(msg || 'Function should throw error.');
}


function assertFinite(num, msg) {
  if (!Number.isFinite(num)) {
    throw new Error(msg || `Is not a number: ${num}`);
  }
  return num;
}


function assertInRange(num, min, max, msg) {
  assertFinite(num);
  if (num < min || num > max) {
    throw new Error(msg || `${num} is not in range (${min}, ${max}))`);
  }
  return num;
}


function assertDefined(val, msg) {
  if (typeof val == 'undefined') {
    throw new Error(msg || 'Value undefined')
  }
  return val;
}


function assertUndefined(val, msg) {
  if (typeof val !== 'undefined') {
    throw new Error(msg || 'Value defined')
  }
  return val;
}


class Testing {
  constructor() {
    this.tests = [];
    this.asserts = 0;
    this.skipped = 0;
  }


  run() {
    let ok = 0;
    let fail = 0;
    for (let i in this.tests) {
      const test = this.tests[i];
      const description = test[0];
      const fn = test[1];
      try {
        fn();
        ok++;
      } catch (e) {
        console.error(`FAIL: ${description} `, e.stack);
        fail++;
      }
    }
    if (this.skipped > 0) {
      console.log(`TOTAL OK: ${ok}, FAIL: ${fail}, SKIPPED: ${this.skipped}, ASSERTS: ${this.asserts}`);
    } else {
      console.log(`TOTAL OK: ${ok}, FAIL: ${fail}, ASSERTS: ${this.asserts}`);
    }
  }


  add(description, fn, onlyThisOne = false) {
    if (onlyThisOne) {
      this.tests.length = 0;
    }
    this.tests.push([description, fn]);
  }


  skip(description, fn, onlyThisOne = false) {
    this.skipped++;
  }


  assertTrue(cond, msg) {
    this.asserts++;
    assertTrue(cond, msg);
  }


  assertFalse(cond, msg) {
    this.asserts++;
    assertFalse(cond, msg);
  }


  assertEquals(expected, actual, msg) {
    this.asserts++;
    assertEquals(expected, actual, msg);
  }


  assertFinite(num, msg) {
    this.asserts++;
    assertFinite(num, msg);
  }


  assertInRange(num, min, max, msg) {
    this.asserts++;
    assertInRange(num, min, max, msg);
  }


  assertFail(func, msg) {
    this.asserts++;
    assertFail(func, msg);
    try {
      func();
      throw new Error(msg || 'Function should throw error.');
    } catch (e) { /* expected */ }
  }


  assertDefined(num, msg) {
    this.asserts++;
    assertDefined(num, msg);
  }


  assertUndefined(num, msg) {
    this.asserts++;
    assertUndefined(num, msg);
  }
}


export {
  Testing as default,
  assertTrue,
  assertFalse,
  assertEquals,
  assertFail,
  assertFinite,
  assertInRange,
  assertDefined,
  assertUndefined
}
