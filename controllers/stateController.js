const state = require('../models/State')
module.exports = {
    loadstate: async (req, res) => {
        const origin = req.headers.origin;
        console.log('상태조회성공')
        const response = await state.load();
        console.log(response);
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.json(response);
    },
};