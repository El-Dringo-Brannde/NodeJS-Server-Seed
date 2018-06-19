const RateLimit = require('express-rate-limit');

const baseRateLimiting = new RateLimit({
   windowMs: 5 * 60 * 1000, // 5 minutes
   max: 100, // limit each IP to 100 requests per windowMs
   delayMs: 0, // disable delaying - full speed until the max limit is reached,
   message: 'Too many accounts created from this IP, please try again after in 5 minutes',
});

exports.baseRateLimiting = baseRateLimiting;
