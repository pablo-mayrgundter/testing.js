function assertTrue(cond, msg) {
  this.asserts++;
  if (!cond) {
    throw new Error(msg || `Condition not true: ${cond}`);
  }
  return true;
}

function assertEquals(expected, actual, msg) {
  this.asserts++;
  if (expected !== actual) {
    throw new Error(msg || `expected(${expected}) != actual(${actual}).`);
  }
  return actual;
}

function assertFail(func, msg) {
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

class Testing {
  constructor() {
    this.tests = [];
    this.asserts = 0;
  }

  add(description, fn, onlyThisOne = false) {
    if (onlyThisOne) {
      this.tests.length = 0;
    }
    this.tests.push([description, fn]);
  }

  assertTrue(cond, msg) {
    this.asserts++;
    assertTrue(cond, msg);
  }

  assertEquals(expected, actual, msg) {
    this.asserts++;
    assertEquals(expected, actual, msg);
  }

  assertFinite(num, msg) {
    this.asserts++;
    assertFinite(num, msg);
  }

  assertFail(func, msg) {
    this.asserts++;
    assertFail(func, msg);
    try {
      func();
      throw new Error(msg || 'Function should throw error.');
    } catch (e) { /* expected */ }
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
    console.log(`TOTAL OK: ${ok}, FAIL: ${fail}, ASSERTS: ${this.asserts}`);
  }
}

export {
  Testing as default,
  assertTrue,
  assertEquals,
  assertFail,
  assertFinite
}
