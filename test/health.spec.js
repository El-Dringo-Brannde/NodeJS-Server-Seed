var assert = require('chai').assert;
var events = require('./../utilities/events');

var server = require('./../index');


describe('health tester', function () {

   before(function (done) {
      events.once('ready', data => {
         server = data
         done();
      })
   }); // naive way of getting around async nature of server start

   it('should get back { "status": "up" }', async function () {
      let retVal = await server.inject('/health/status');
      assert.deepEqual(retVal.result, { status: "UP" })
   });
});