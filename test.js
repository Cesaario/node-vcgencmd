"use strict";

var assert = require('assert');
var lib = require('./vcgencmd');

/*
    measureClock(clock)
 */
assert.throws(function() { lib.measureClock(); }, /incorrect/);
assert.throws(function() { lib.measureClock('Core'); }, /incorrect/);
assert(lib.measureClock('core') > 0);

/*
    measureTemp()
 */
assert(lib.measureTemp() > 0);

/*
    codecEnabled(codec)
 */
assert.throws(function() { lib.codecEnabled(); }, /incorrect/);
assert.throws(function() { lib.codecEnabled('h264'); }, /incorrect/);
assert.equal(typeof lib.codecEnabled('H264'), 'boolean');

/*
    getConfig(config|int|str)
 */
assert.throws(function() { lib.getConfig(); }, /incorrect/);
assert.throws(function() { lib.getConfig('test'); }, /incorrect/);
assert.equal(typeof lib.getConfig('arm_freq'), 'number');
assert(Object.keys(lib.getConfig('int')).length > 0);

/*
    getCamera()
 */
assert.equal(typeof lib.getCamera().supported, 'boolean');
assert.equal(typeof lib.getCamera().detected, 'boolean');

/*
    getMem(mem)
 */
assert.throws(function() { lib.getMem(); }, /incorrect/);
assert.throws(function() { lib.getMem('test'); }, /incorrect/);
assert.equal(typeof lib.getMem('arm'), 'number');