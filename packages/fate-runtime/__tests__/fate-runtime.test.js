'use strict';

const fateRuntime = require('..');
const assert = require('assert').strict;

assert.strictEqual(fateRuntime(), 'Hello from fateRuntime');
console.info('fateRuntime tests passed');
