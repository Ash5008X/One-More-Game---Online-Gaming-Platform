import jwt from 'jsonwebtoken';

/**
 * Generates a signed JWT for the given user ID.
 * @param {string} userId - The MongoDB _id of the authenticated user.
 * @returns {string} Signed JWT string.
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export default generateToken;
