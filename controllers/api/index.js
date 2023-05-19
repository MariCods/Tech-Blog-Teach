const router = require('express').Router();
const userRoutes = require('./users-routes');

router.use('/user',userRoutes);


module.exports = router;