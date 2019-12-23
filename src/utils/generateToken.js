import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    return jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: '7 days'})
}

export default generateToken