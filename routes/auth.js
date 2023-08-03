const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {body, validationResult}= require("express-validator");


// Define a route for the root path ("/api/auth")
router.post("/auth",[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('name').isLength({ min: 3 }).withMessage('Enter a valid name'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),

],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user));
});

module.exports = router;
