//required
const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

//router names
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
