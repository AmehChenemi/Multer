const express = require('express')
const router = express.Router();
const upload = require('../utilities/multer.js')

const{signUp, getOne, getAll, updateUser, deleteUser} = require('../controllers/controller.js')

router.post('/signup', upload.single('profileImage'),signUp)
router.get('/getone/:id', upload.single('profileImage'),getOne)
router.get('/getall', upload.single('profileImage'),getAll)
router.patch('/update/:id', upload.single('profileImage'),updateUser)
router.delete('/delete/:id', deleteUser)


module.exports = router