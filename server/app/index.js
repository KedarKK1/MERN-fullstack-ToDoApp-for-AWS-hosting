const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const ErrorMiddleware = require('./http/middleware/Error');
const api = require('./routes/api');
require('dotenv').config();
const app = express();

let ec2_site = process.env.EC2_API_KEY + ":3000";
let local_site = process.env.LOCAL_API + ":3000";
let allowedOrigins = [ec2_site, local_site];

class Application {
  constructor() {
    this.setupExpressServer();
    this.setupMongoose();
    this.setupRoutesAndMiddlewares();
    this.setupConfigs();
  }

  // Allow requests from the specific origin (replace with your client's domain)


  setupRoutesAndMiddlewares() {
    // built-in middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

    // third-party middleware
    app.use(cors(
      {
        origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
          }
        }
      }
    ));

    //routes
    app.use('/api', api);

    app.use(ErrorMiddleware);
  }

  setupConfigs() {
    winston.add(new winston.transports.File({ filename: 'error-log.log' }));
    winston.add(
      new winston.transports.MongoDB({
        // db: 'mongodb://localhost:27017/todoList',
        db: `${process.env.MONGODB_API_KEY}/todoList`,
        level: 'error',
      }),
    );

    process.on('uncaughtException', (err) => {
      console.log(err);
      winston.error(err.message);
    });
    process.on('unhandledRejection', (err) => {
      console.log(err);
      winston.error(err.message);
    });
  }

  setupMongoose() {
    mongoose
      // .connect('mongodb://localhost:27017/todoList', {
      .connect(`${process.env.MONGODB_API_KEY}/todoList`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('db connected');
        winston.info('db connected');
      })
      .catch((err) => {
        console.error('Error in connecting db! ', err);
      });
  }
  setupExpressServer() {
    const port = process.env.Port || 3000;
    app.listen(port, (err) => {
      if (err) console.log(err);
      else console.log(`app listen to port ${port}`);
    });
  }
}

module.exports = Application;
