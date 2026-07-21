import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Protects routes by verifying the Authorization Bearer token.
 * Attaches the authenticated user (without password) to req.user.
 */
const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401);
    return next(new Error('Not authorized — no token'));
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      res.status(401);
      return next(new Error('Not authorized — user not found'));
    }

    next();
  } catch {
    res.status(401);
    next(new Error('Not authorized — invalid token'));
  }
};

export { protect };
