const { User } = require('../models');


module.exports = {
    //Gets A USER By ID or USERNAME
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id: params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(404).json({ message: 'Cannot find a user with this id!!' })
        }
        res.json(foundUser);
    },
    async createUser ({ body }, res){
        const newUser = await User.create(body);

        if (!newUser){
            return res.status(400).json({ message: 'Something is wrong!' });
        }

        res.json({ newUser });
    }
}