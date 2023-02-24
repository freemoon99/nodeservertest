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

const booth = [
  {
    "id" : "1",
    "name" : "동아리명1",
    "category" : "카테고리1",
    "location" : "A1",
    "img": "https://picsum.photos/id/237/200/300",
    "introduction": "한줄소개 1"
  },
  {
    "id" : "2",
    "name" : "동아리명2",
    "category" : "카테고리2",
    "location" : "A2",
    "img": "https://picsum.photos/id/237/200/300",
    "introduction": "한줄소개 2"
  },
  {
    "id" : "3",
    "name" : "동아리명3",
    "category" : "카테고리3",
    "location" : "A3",
    "img": "https://picsum.photos/id/237/200/300",
    "introduction": "한줄소개 3"
  }
];

//상태 업데이트
app.get('/booth', (req, res)=>{
  res.json(booth);
});

app.listen(8000, () => console.log('서버가 실행됩니다. http://localhost:8000'));

//라우트 로그 남기기 추가 예정