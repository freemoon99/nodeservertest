const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const data = require('../nodeservertest/data');

app.use(bodyParser.json());

app.use(cors());
app.get('/test', (req, res) => {
  res.send('good connect!');
})

//상태 업데이트
app.get('/booth', (req, res)=>{
  res.json(data);
});

app.listen(8000, () => console.log('서버가 실행됩니다. http://localhost:8000'));

//라우트 로그 남기기 추가 예정