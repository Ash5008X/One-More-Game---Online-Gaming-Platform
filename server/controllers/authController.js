import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

/**
 * Shapes a safe user payload to include in responses.
 * Ensures the password hash is never exposed.
 */
const buildUserPayload = (user) => ({
  _id: user._id,
  fullName: user.fullName,
  username: user.username,
  email: user.email,
  avatar: user.avatar,
  bio: user.bio,
  provider: user.provider,
  stats: user.stats,
  lastLogin: user.lastLogin,
  isVerified: user.isVerified,
  createdAt: user.createdAt,
});

/**
 * POST /api/auth/register
 * Registers a new local user and returns a JWT.
 */
const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400);
      throw new Error('All fields are required');
    }

    const emailTaken = await User.findOne({ email: email.toLowerCase() });
    if (emailTaken) {
      res.status(409);
      throw new Error('Email already exists');
    }

    const user = await User.create({ fullName, email, password });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: buildUserPayload(user),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/login
 * Authenticates an existing user and returns a JWT.
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error('Email and password are required');
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      res.status(401);
      throw new Error('Invalid email or password');
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: buildUserPayload(user),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/auth/me
 * Returns the authenticated user attached by the protect middleware.
 */
const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    user: buildUserPayload(req.user),
  });
};

export { register, login, getMe };
