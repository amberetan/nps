const express = require("express")
const tripRouter = express.Router()
const Trip = require("../models/trip")

//get all trips by user
tripRouter.get("/:user", (req, res, next) => {
    Trip.find({ user: req.auth._id }, (err, trips) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(trips)
    })
})

//get trip by id
tripRouter.get("/:user/:tripId", (req, res, next) => {
    Trip.findOne({ user: req.user._id, _id: req.params.tripId }, (err, trip) =>{
        if(err){
            res.status(500)
            return next(err)
        } else if (!trip){
            res.status(404)
            return next(new Error("No trip found."))
        }
        return res.status(201).send(trip)
    })
})

//post a new trip
tripRouter.post("/", (req, res, next) => {
    const trip = new Trip(req.body)
    trip.user = req.auth._id
    trip.save(function(err, newTrip){
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newTrip)
    })
})

//edit a trip
tripRouter.put("/:tripId", (req, res, next) => {
    Trip.findOneAndUpdate(
        { _id: req.params.tripId, user: req.auth._id},
        req.body,
        {new: true},
        (err, trip) => {
            if(err){
                console.log("There was an error submitting edits.")
                res.status(500)
                return next(err)
            }
            return res.send(trip)
        }
    )
})

//delete a trip
tripRouter.delete("/:tripId", (req, res, next) =>{
    Trip.findOneAndRemove({ _id: req.params.tripId, user: req.auth._id}, (err, trip) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(trip)
    })
})

module.exports = tripRouter