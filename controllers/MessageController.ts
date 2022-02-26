import {Request, Response, Express} from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageController";

export default class MessageController implements MessageControllerI {
    app: Express;
    MessageDao: MessageDao;

    constructor(app: Express, MessageDao: MessageDao) {
        this.app = app;
        this.MessageDao = MessageDao;
        this.app.post('/users/:uid1/messages/:uid2', this.createMessage);
        this.app.delete('/users/:uid1/messages/:uid2', this.deleteMessage);
        this.app.get("/users/:uid1/messages/:uid2",this.findMessageUser);
        this.app.get("/users/:uid/Messages",this.findMessage);
        this.app.get("/users/:uid/recentMessages",this.recentMessage);

    }

    findMessage=(req: Request, res: Response) =>
        this.MessageDao.findMessage( req.params.uid)
            .then(Message => res.json(Message));

    recentMessage=(req: Request, res: Response) =>
        this.MessageDao.recentMessage( req.params.uid)
            .then(Message => res.json(Message));

    findMessageUser=(req: Request, res: Response) =>
        this.MessageDao.findMessageUser( req.params.uid1,req.params.uid2)
            .then(Message => res.json(Message));


    createMessage=(req: Request, res: Response) =>
        this.MessageDao.createMessage( req.params.uid1,req.params.uid2,req.body.message)
            .then(Message => res.json(Message));



    deleteMessage = (req: Request, res: Response) =>
        this.MessageDao.deleteMessage( req.params.uid1,req.params.uid2)
            .then(Message => res.json(Message));

}
