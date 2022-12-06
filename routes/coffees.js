const router = require('express').Router();
const coffeeController = require('../controllers/coffeeController');


router.route('/')
    .get(coffeeController.getCoffees)

router.route('/:coffeeId/')
    .get(coffeeController.getCoffeeById)


module.exports = router;