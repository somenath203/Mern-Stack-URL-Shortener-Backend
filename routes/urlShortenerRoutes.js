const router = require('express').Router();

const { createShortUrl, openShortUrl } = require('../controllers/shortUrlShortener');


router.post('/createShortUrl', createShortUrl);

router.get('/:shortUrlId', openShortUrl);


module.exports = router;