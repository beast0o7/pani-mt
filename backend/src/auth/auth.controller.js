const { generateToken } = require('../../utils/jwt');
const { db } = require('../../models');
const bcrypt = require('bcrypt');


exports.signUp = async (req, res) => {
    const { email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.findOne({ $or: [{ email }, { username }]});

    if (user) {
        return res.status(400).json({ error: 'Email or username already used' });
    }

    const newUser = await db.user.create({ email, username, password: hashedPassword });
    const token = generateToken({ userId: newUser._id, email: newUser.email });
    await db.userToken.create({ userId: newUser._id, token });

    res.status(201).json({ message: 'User registered successfully' ,token});
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await db.user.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = generateToken({ userId: user._id, email: user.email })
        await db.userToken.create({ userId: user._id, token });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

