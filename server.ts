import TuitDao from "./daos/TuitDao";

const mongoose = require('mongoose');
//
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
const mongoString = "mongodb+srv://priyesh:priyesh123@cluster0.2ycnj.mongodb.net/tuiter?retryWrites=true&w=majority" ;

import UserController from "./controllers/UserController";
import express, {Request, Response} from 'express';
import UserDao from "./daos/UserDao";
import TuitController from "./controllers/TuitController";
//userDao: UserDao;

const app = express();
app.use(express.json());

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function() {
    console.log("Not Connected priyesh ")
})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
})

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!!!\nPlease use below link to see see the Tuits and Users\n' +
        '<html><a>https://soft-eng-priyesh.herokuapp.com/users\n</a>' +
        '<a>https://soft-eng-priyesh.herokuapp.com/users</a></html>'));


new  UserController(app,new UserDao);
new TuitController(app,new TuitDao);



const PORT = 4000;
app.listen(process.env.PORT || PORT);