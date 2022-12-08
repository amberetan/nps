const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

//signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, existingUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if (existingUser !== null) {
            res.status(400)
            return next(new Error("That username already exists"))
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ success: true, user: user.withoutPassword(), token})
        })
    })
})

//login
authRouter.post("/login", (req, res, next) =>{
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("Incorrect email or password"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(403)
                return next(new Error("Incorrect email or password"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Incorrect email or password"))
            }
            const token= jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.send({ token: token, user: user.withoutPassword(), success: true})
        })

    })
})


module.exports = authRouter