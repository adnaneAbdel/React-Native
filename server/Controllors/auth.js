const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        // If everything is good, save the decoded token to the request for use in other routes
        req.userId = decoded.id;
        req.userEmail = decoded.email;
        req.userName = decoded.name;
        next();
    });
};

module.exports = verifyToken;
