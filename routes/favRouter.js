const express = require("express")
const favRouter = express.Router()
const User = require("../models/user")
const Favorites = require("../models/favorites")



//get favorites
favRouter.get("/:userId", (req, res, next) => {
    User.find({ _id: req.params.userId }, (err, faves) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(faves)
    })
})


//favorites with $addToSet and $pull
favRouter.put("/add/:userId/:parkId", (req,res,next) => {
    User.findByIdAndUpdate(
        { _id: req.params.userId },
        {
            $addToSet: {favorites: req.params.parkId},
        },
        { new: true},
        (err, addFav) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(addFav)
        }

    )
})
favRouter.put("/remove/:userId/:parkId", (req,res,next) => {
    User.findByIdAndUpdate(
        { _id: req.params.userId },
        {
            $pull: {favorites: req.params.parkId},
        },
        { new: true},
        (err, removeFav) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(removeFav)
        }

    )
})

module.exports = favRouter