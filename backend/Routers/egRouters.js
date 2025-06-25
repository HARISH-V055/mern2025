const express = require('express');
const router = express.Router();
const{getRoute, SignupRoute, putRoute, deleteRoute} = require('../controllers/egcontroller');

router.get('/get',getRoute);
router.post('/post/',SignupRoute);
router.put('/put/:id',putRoute);
router.delete('/delete/:id',deleteRoute);


module.exports = router;