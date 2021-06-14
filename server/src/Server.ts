import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BaseRouter from './routes';
import testAPIRouter from './routes/testApi';
import mysqlRouter from './routes/mysql';
import logger from '@shared/Logger';
import { allowedNodeEnvironmentFlags } from 'process';

require('dotenv').config()
const app = express();
const { BAD_REQUEST } = StatusCodes;

const cors = require('cors');
app.use(cors());

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

app.use('/login', (req, res) => {
    var token_res = "401"
    if(req.body.username === "admin" && req.body.password === "C@pston3"){
        token_res = "3c92f90e047af0f002cb34c6f0f831a0"
    }
    res.send({
      token: token_res
    });
}); 

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('googleusercontent.com url here');
app.post("/api/v1/auth/google", async (req, res) => {
    const { token }  = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();  

    var token_res = "401"  
    
    if(email === "davion21@bergen.org" || email === "arjun@nairsnet.com" || email === "arjnai21@bergen.org" ||email === "elicho21@bergen.org" || email === "antlek21@bergen.org"){
        token_res = "Insert token here"
    }
    
    const user = { 
        token: token_res
    }

    res.status(201)
    res.json(user)
})

// Add APIs
app.use('/', BaseRouter);

app.get("*", function (req, res){
    res.json({'hi': 'this page doesnt axist'});
});

app.use("/testAPI", testAPIRouter);

app.use("/sql", mysqlRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

// const viewsDir = path.join(__dirname, 'views');
// app.set('views', viewsDir);
// const staticDir = path.join(__dirname, 'public');
// app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });

// Export express instance
export default app;
