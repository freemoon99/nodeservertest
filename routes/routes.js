const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());

const router = express.Router();
const management = require('../controllers/stateController')

router.get('/test', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.send('good connect!');
})

//상태 업데이트
router.get('/booth', management.loadstate);


module.exports = router;