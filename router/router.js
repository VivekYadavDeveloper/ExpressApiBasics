const router = require('express').Router();


router.post('/profile', (req, res) => { res.send("Welcome To Profile From Routing"); });

router.post('/login', (req, res) => { res.send("Welcome To Contact From Routing"); });

module.exports = router;