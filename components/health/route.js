module.exports = () => ({
   name: 'health',
   register: (server) => {
      server.route([{
         method: 'GET',
         path: '/status',
         handler: () => ({ status: 'UP' }),
      },
      ]);
   },
});

