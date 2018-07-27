# NodeJS-Server-Seed
A seed project that does all the skeleton work for using: NodeJS, HapiJS, and MongoDB to create a backend database


### Description
Everything is more or less componentized:
- The `/models` folder that comprimises of of the functionality that is inheritable to controllers, 
logic like doing CRUD operations on the DB. 
- The `/components` folders holds all the functionality of creating the controllers, the routes, tests, validators, and utilites tied
to the route needs. This is where most of the work happens. 
- `/middleware` is stuff that happens prior to the data coming into the controller, things like authorization, rate limiting, making compatible 
queries for the database etc. 


### How to use: 
1. Fork/clone repository
2. Run: `npm install && npm run dev`
