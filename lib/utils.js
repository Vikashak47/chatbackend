const NODE = process.env.NODE_ENV;

// ✅ Single source of truth for all cookie operations
function cookieConfig(maxAge) {
    return {
        maxAge,
        httpOnly: true,
        sameSite: NODE === 'production' ? 'none' : 'lax',
        secure: NODE === 'production',
    };
}

function generateToken(userId, res) {
    const token = jwt.sign({ userId }, SECRET, { expiresIn: '7d' });
    res.cookie('jwt', token, cookieConfig(7 * 24 * 60 * 60 * 1000));
    return token;
}

module.exports = { generateToken, cookieConfig };
