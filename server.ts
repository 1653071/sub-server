
import swaggerJsdoc from "swagger-jsdoc"
import fs from "fs"
import path from "path"
import express, { Application } from 'express';
import * as ioServer from "socket.io"
import cors from 'cors'

//import * as ChatController from "./controller/chat-message"
import bodyParser from "body-parser"

import { AnyExpression } from "mongoose";
import { validationResult } from "express-validator";

const httpApp = express();
function recursiveRoutes(app: Application, port: number, routePrefixUrl: string, folderName: string) {
  fs.readdirSync(folderName).forEach(function (file) {

    let fullName = path.join(folderName, file);
    let stat = fs.lstatSync(fullName);

    if (stat.isDirectory()) {
      // folder
      recursiveRoutes(app, port, routePrefixUrl, fullName);
    }
    else if (file.toLowerCase().endsWith('.js') ) {
      // file

      // get parent folder
      let parentFolderFile = fullName.replace(path.join(__dirname, './src/test2/routes'), '');
      let parentFolder: string = parentFolderFile.replace(file, '').replace(/\\/g, '/');

      // get only filename
      let name = file.substr(0, file.indexOf('Route.js'));
     
      // route
      let myRouter = require(fullName);
      let myRouteUrl = `${routePrefixUrl}${parentFolder}${name}`
      if (file == "index.js" || file == "index.ts") {
        myRouteUrl = `${routePrefixUrl}`
      }
      console.log(myRouteUrl)
      console.log(myRouter)
      app.use(myRouteUrl, myRouter);

      // print log routes
    }
  });
}
httpApp.use(bodyParser.urlencoded({ extended: false }));
httpApp.use(express.json());
httpApp.use('/static', express.static('uploads'))
httpApp.use(cors({origin: true}));
recursiveRoutes(httpApp,4000,"",path.join(__dirname,"./src/test2/routes"))
httpApp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const httpServer = require('http').createServer(httpApp);

httpServer.listen(4000, () => {
  console.log(`Server is running on http://localhost:${4999}`)
})
