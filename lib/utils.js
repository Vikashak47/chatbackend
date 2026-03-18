const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.TOKEN_SECRET;
const NODE = process.env.NODE_ENV;

function generateToken(userId, res) {
    const token = jwt.sign({ userId }, SECRET, { expiresIn: '7d' });

    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,

        // 🔥 IMPORTANT FIXES
        sameSite: NODE === 'development' ? 'lax' : 'none', // ✅ cross-origin support
        secure: NODE === 'production',                   // ✅ HTTPS required in prod
    });

    return token;
}

module.exports = {
    generateToken
};
