import jwt from 'jsonwebtoken';

const TOKEN_KEY = process.env.TOKEN_KEY || 'notagoodkey';

export const restrict = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // MAY NEED IF STATEMENT
    jwt.verify(token, TOKEN_KEY);
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send('Not Authorized');
  }
};
