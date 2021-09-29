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
    //Creates a New User
    async createUser ({ body }, res){
        const newUser = await User.create(body);

        if (!newUser){
            return res.status(400).json({ message: 'Something is wrong!' });
        }

        res.json({ newUser });
    },
    //Login a User
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email } ] });

        if(!user){
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPW = await user.isCorrrectPassword(body.password);

        if(!correctPW) {
            return res.status(400).json({ message: 'Wrong password' });
        }

        res.json({ user });
    }
}