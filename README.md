# MEAN Factory

I'm Matt Senn and I work as a developer in Charlotte, NC.  I've been learning a lot of AngularJS recently, however, this was my first dive into the other three letters of the MEAN stack. Luckily there is this awesome seed project. I hope you enjoy.

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - Make sure it's running on the default port (27017).

To view the website you'll need to start MongoDB and start the Node server. Clone my repo and install dependencies.
```
    $ git clone https://github.com/eternalmatt/mean-factory
    $ cd mean-factory
    $ npm install
```
Then create a dummy folder for MongoDB start the DB and server.
```
    $ mkdir mongo-data/
    $ mongod --dbpath mongo-data/ --smallfiles
    $ node server
``` 
  You can now open a browser and walk the site
```
    http://localhost:3000
```
## MEAN Stack

MEAN is a boilerplate that provides a nice starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you quick and organized way to start developing of MEAN based web apps with useful modules like mongoose and passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.  


