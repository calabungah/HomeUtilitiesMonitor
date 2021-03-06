const {User} = require('../models')
const {ElectricDevice} = require('../models')
const {WaterDevice} = require('../models')
const {ElectricSeconds} = require('../models')
const config = require('../../config/config')
const {MockElectricSeconds} = require('../models')
const {MockElectricMinutes} = require('../models')
const {CircuitName} = require('../models')
const {MockWaterSeconds} = require('../models')
const {MockWaterMinutes} = require('../models')

module.exports = {
    async init (req, res) {
        try {
            const body = req.body
            const user = await User.findOne({
                where: {
                    username: body.username
                }
            })
            res.send({
                message: 'success'
            })

        } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock water seconds device'
        })
    }
  },
  async addNewElectricDevice (req, res) {
    try {
        const body = req.body
        const user = await User.findOne({
            where: {
                username: body.username
            }
        })
        console.log("found user")
        await ElectricDevice.create({
            UserUserID: user.userID
        })
        console.log("added electric device")
        
        const electricDevice = await ElectricDevice.findOne({
            where: {
                UserUserID: user.userID
            }
        })
        console.log("found electric device with correct userID")
        console.log(electricDevice.dataValues.electricDeviceID)

        //create 8 circuits
        for(let i = 1; i < 9; i++){
            await CircuitName.create({
                circuitID: i,
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID
            })
        }
        
        console.log("created electric circuit table with 8 ids spots")
        
        let dataArr = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,6,7,8,9,10,10,11,11,12,12,12,10,13,13,13,15,5,5,5,5,5,5,5,5,5,5,5,3,2,1,2,3,4,5,6,7,9,8,7,6,5,4,3,2,1]

        
        //create mock last 60 seconds
        for(let i = 1; i < 61; i++){
            await MockElectricSeconds.create({
                data: dataArr[i-1],
                date: i,
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                circuitID: (i % 8) + 1  
            })
        }
        console.log("inserted 60 seconds electric mock data")
        
        //create mock last 60 minutes
        for(let i = 1; i < 61; i++){
            await MockElectricMinutes.create({
                data: (dataArr[i-1]*Math.random()*10),
                date: i,
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                circuitID: (i % 8) + 1
            })
        }
        console.log("inserted 60 minutes electric mock data")

        res.send({
            message: 'success'
        })

    } catch (err) {
    res.status(500).send({
        error: 'An error has occured getting mock electric seconds device'
    })
    }
    },
    async addNewWaterDevice (req, res) {
        try {
            const body = req.body
            const user = await User.findOne({
                where: {
                    username: body.username
                }
            })
            console.log("found user")
            await WaterDevice.create({
                UserUserID: user.userID
            })
            console.log("added water device")
            
            const waterDevice = await WaterDevice.findOne({
                where: {
                    UserUserID: user.userID
                }
            })
            console.log("found water device with correct userID")
            console.log(waterDevice.dataValues.waterDeviceID)
            
            let dataArr = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,6,7,8,9,10,10,11,11,12,12,12,10,13,13,13,15,5,5,5,5,5,5,5,5,5,5,5,3,2,1,2,3,4,5,6,7,9,8,7,6,5,4,3,2,1]
    
            //create mock last 60 seconds
            for(let i = 1; i < 61; i++){
                await MockElectricSeconds.create({
                    data: dataArr[i-1],
                    date: i,
                    WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID
                })
            }
            console.log("inserted 60 seconds water mock data")
            
            /*
            for(let i = 1; i < 61; i++){
                await MockWaterSeconds.create({
                    data: dataArr[i-1],
                    date: i,
                    WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID
                })
            }
            console.log("inserted 60 seconds water mock data")
            */

            //create mock last 60 minutes
            for(let i = 1; i < 61; i++){
                await MockElectricMinutes.create({
                    data: (dataArr[i-1]*Math.random()*10),
                    date: i,
                    WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID
                })
            }
            console.log("inserted 60 minutes water mock data")
    
            /*
            for(let i = 1; i < 61; i++){
                await MockWaterMinutes.create({
                    data: (dataArr[i-1]*Math.random()*10),
                    date: i,
                    WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID
                })
            }
            console.log("inserted 60 minutes water mock data")
            */

            res.send({
                message: 'success'
            })
    
        } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock water seconds device'
        })
        }
        },
}
