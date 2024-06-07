const express = require('express')
const cros= require('cors')
const router= express.Router()
const {uploadprofile,uploadimage} = require('../helper/multer')


const {get,Register,login,getProfile,logout,uploadRescue,getres}= require('../controller/auth.controller')

router.use(cros({
    origin:['http://localhost:3000'],
    credentials:true
}))

//These are the routes for the end points
router.get('/',get)
router.post('/register',uploadprofile.single('profile'),Register)
router.post('/login',login)
router.get('/profile',getProfile)
router.get('/logout',logout)
router.post('/uploadrescue',uploadimage.single('image'),uploadRescue)
router.get('/respost',getres)

module.exports = router