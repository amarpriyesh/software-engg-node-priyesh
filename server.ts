const mongoose = require('mongoose');
//
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
const mongoString = "mongodb+srv://priyesh:priyesh123@cluster0.2ycnj.mongodb.net/tuiter?retryWrites=true&w=majority" ;

import UserController from "./controllers/UserController";
import express, {Request, Response} from 'express';
import UserDao from "./daos/UserDao";
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


userController:  new UserController(app,new UserDao);



const PORT = 4000;
app.listen(process.env.PORT || PORT);