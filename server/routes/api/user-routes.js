const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login
} = require('../../controllers/user-controller');



router
    .route('/')
    .post(createUser)

router
    .route('/:id')
    .get(getSingleUser);

router
    .route('/login')
    .post(login);





module.exports = router;