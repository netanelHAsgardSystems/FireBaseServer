import { Router, Request, Response } from "express";
// import { auth } from "firebase-admin";
import { EUrls } from "../CustomTypes/Enums/EUrls.enum";
import { IExtraDataRequestBody, IExtraDataUser } from "../CustomTypes/Interfaces/IRegisterUser.interface";
// import {auth} from '../configs/firebaseConfig'
import admin from '../configs/firebaseConfig';
// import admin from 'firebase-admin';


const router: Router = require('express').Router();






router.post("/" + EUrls.customClaims, async (req: Request<{}, {}, IExtraDataRequestBody>, res: Response) => {
    try {


        const { uid } = req.body;


        const { userExtraData } = req.body;


        if (!uid || !userExtraData || !userExtraData.firstName || !userExtraData.lastName) {
            res.json({ error: true, msg: "didnt fill all of the Details!" });
            return;
        }



        await admin.auth().setCustomUserClaims(uid, { ...userExtraData });
        res.json({ error: false, msg: "user Updated sucssesfully" });
    } catch (error) {
        console.log("error", error);
    }

});






module.exports = router;
