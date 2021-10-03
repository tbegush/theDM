const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login,
    getAllUser
} = require('../../controllers/user-controller');



router
    .route('/')
    .post(createUser)
    .get(getAllUser);

router
    .route('/:id')
    .get(getSingleUser);

router
    .route('/login')
    .post(login);





module.exports = router;