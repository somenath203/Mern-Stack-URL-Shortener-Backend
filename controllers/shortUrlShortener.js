const Url = require('./../models/shortUrlModel');


const createShortUrl = async (req, res) => {

    try {

        const shortUrlCreated = await Url.create({ fullUrl: req.body.url });


        const shortUrlLink = `${req.protocol}://${req.headers.host}/${shortUrlCreated.shortUrlId}`;
        

        res.status(201).send({
            success: true,
            message: 'short url has been created successfully',
            data: shortUrlLink
        });

    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'something went wrong, try again',
            data: error.message
        });

    }
};


const openShortUrl = async (req, res) => {

    try {

        const shortUrl = await Url.findOne({ shortUrlId: req.params.shortUrlId });

        res.redirect(shortUrl.fullUrl);

    } catch (error) {

        console.log(error);

        res.status(500).send({
            success: false,
            data: error.message
        });

    }

};


module.exports = {
    createShortUrl,
    openShortUrl
}