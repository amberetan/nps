const express = require("express")
const listRouter = express.Router()
const List = require("../models/list")

//get all lists by user
listRouter.get("/:user", (req, res, next) => {
    List.find({ user: req.user._id }, (err, lists) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(lists)
    })
})

//get list by id
listRouter.get("/:user/:listId", (req, res, next) => {
    List.find({ user: req.user._id, _id: req.params.listId}, (err, list) => {
        if(err) {
            res.status(500)
            return next(err)
        } else if(!list) {
            res.status(404)
            return next(new Error("No list found."))
        }
        return res.status(201).send(list)
    })
})

//post a new list
listRouter.post("/", (req, res, next) => {
    const list = new List(req.body)
    list.user = req.user._id
    list.save((err, newList) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return resizeTo.status(201).send(newList)
    })
})

//edit a list
listRouter.put("/:listId", (req, res, next) => {
    List.findOneAndUpdate(
        { _id: req.params.listId, user: req.user._id },
        req.body,
        {new: true},
        (err, list) => {
            if(err) {
                console.log("THere was an error submitting edits.")
                res.status(500)
                return next(err)
            }
            return res.send(list)
        }
    )
})

//delete a list
listRouter.delete("/:listId", (req, res, next) =>{
    List.findOneAndRemove({ _id: req.params.listId, user: req.user._id }, (err, list) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(list)
    })
})

module.exports = listRouter