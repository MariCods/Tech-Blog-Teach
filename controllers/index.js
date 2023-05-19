const router = require('express').Router();
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes');
const apiRoutes = require('./api');


router.use(homeRoutes);
router.use(blogRoutes);
router.use('/api', apiRoutes);


module.exports = router;