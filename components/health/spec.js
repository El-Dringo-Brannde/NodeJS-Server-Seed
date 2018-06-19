/* eslint no-undef:0 */
// ^^ ignore not finding 'describe', 'before', 'it'

const { assert } = require('chai');
const events = require('./../../utilities/events.js');

let server = require('./../../server.js');


describe('health tester', () => {
   before((done) => {
      new server(); // eslint-disable-line
      events.on('ready', (data) => {
         server = data;
         done();
      });
   }); // naive way of getting around async nature of server start

   describe('#health check', () => {
      it('should get back { "status": "up" }', async () => {
         const { result } = await server.inject('/health/status');
         assert.deepEqual(result, { status: 'UP' });
      });
   });
});
