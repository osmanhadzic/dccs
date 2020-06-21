import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { Form } from "./entity/Form";
import { request } from "http";

createConnection().then(async connection => {

    
    // create express app
    const app = express();

    //app.engine("ejs", require("express-ejs-extend"));
    app.set('views', (__dirname +'/views'));
   

    app.set("view engine", "ejs");

    app.use(bodyParser.json());

    app.get("/test",(req,res)=>{
        res.render("form");
    });
    
    app.post("/admin",(req,res)=>{
        var name = req.query.name;
        
        console.log(name);
        res.send("200");
    })
   

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

      // insert new users for test
      await connection.manager.save(connection.manager.create(Form, {
        formName:"Form 2",
        formStruct:"Nesto"
    }));

  
 
    console.log("Express server has started on port 3000. Open http://localhost:3000/form to see results");

}).catch(error => console.log(error));
