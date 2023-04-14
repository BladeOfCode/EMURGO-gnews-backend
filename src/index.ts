require('dotenv').config();
import app from "./app";
import {keys} from './config/keys';

//run the server on a certain port.
const server = app.listen(keys.port, ()=> {
    console.log("Server is running...");
    console.log(`Listening on ${keys.port} with env_mode=${keys.env_mode}...`);
})

//deal with error
const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log("Server closed");
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };
  
  const unexpectedErrorHandler = (error: any) => {
    console.log(error);
    exitHandler();
  };
  
  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);
  