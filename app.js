const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());
app.get('/', (req, res) => {
  res.send('good connect!');
})

const booth = [
  {
    "id" : "1",
    "name" : "밤하늘",
    "category" : "천체관측 및 학술 동아리",
    "location" : "3",
    "img": "https://i.ibb.co/gSgkNRM/image.jpg",
    "introduction": "스피드 퀴즈에 참가하면 다양한 보상이! 그래서 거기가 어디야"
  },
  {
    "id" : "2",
    "name" : "Auto-Mania",
    "category" : "자작자동차 동아리",
    "location" : "4",
    "img": "https://i.ibb.co/0tddPMx/image.jpg",
    "introduction": "자작자동차 제작과정 소개 및 동아리 활동 소개"
  },
  {
    "id" : "3",
    "name" : "거북선신화",
    "category" : "발명•창업 동아리",
    "location" : "5",
    "img": "https://i.ibb.co/Wtc7Gwr/image.jpg",
    "introduction": "동아리활동내용 소개 및 전시, 부스를 방문하는 신입생 대상 추첨형 상품증정"
  },
  {
    "id" : "4",
    "name" : "YMCA",
    "category" : "봉사 동아리",
    "location" : "8",
    "img": "https://i.ibb.co/NL1vJDm/YMCA.jpg",
    "introduction": "솜사탕 & 클레이비누 만들기"
  },
  {
    "id" : "5",
    "name" : "미담장학회",
    "category" : "대학 연합 교육봉사 동아리",
    "location" : "9",
    "img": "https://i.ibb.co/8PxCG0W/image.jpg",
    "introduction": "미담장학회와 관련한 퀴즈를 맞추면 팝콘을 준다고?!"
  },
  {
    "id" : "6",
    "name" : "두손 모아 사랑을",
    "category" : "수화 봉사 동아리",
    "location" : "10",
    "img": "https://i.ibb.co/xLw3L9h/image.jpg",
    "introduction": "이번 학기의 나의 운세는? 행운의 포춘쿠키❤"
  },
  {
    "id" : "7",
    "name" : "미크로코스모스",
    "category" : "천주교 동아리",
    "location" : "11",
    "img": "https://i.ibb.co/HF98qzN/image.png",
    "introduction": "◆ 말씀카드 및 간식배부 ◆ 종교와 가톨릭 장점 소개 ◆ 동아리 활동 소개"
  },
  {
    "id" : "8",
    "name" : "With Us",
    "category" : "아동 봉사동아리",
    "location" : "12",
    "img": "https://i.ibb.co/GTTBnfz/with-us.jpg",
    "introduction": "그동안의 노력 보상받자! 봉사시간 인증 시 여러 혜택이?!!"
  },
  {
    "id" : "9",
    "name" : "금오태극회",
    "category" : "운동 체육 동아리",
    "location" : "A3",
    "img": "https://i.ibb.co/nLbTHrg/image.jpg",
    "introduction": "스트레스를 날려버릴 수 있는 송판격파 !"
  },
  {
    "id" : "10",
    "name" : "금오공대스키부SIKT",
    "category" : "동계스포츠 동아리",
    "location" : "19",
    "img": "https://i.ibb.co/7JcC2WL/SKIT.pngL",
    "introduction": "스키장과 스키장비, 스키종목에 대한 모든것! 스키 퀴즈 맞추기!"
  },
  {
    "id" : "11",
    "name" : "SEABIRD",
    "category" : "수중생태계탐험 및 정화, 스쿠버다이빙",
    "location" : "20",
    "img": "https://i.ibb.co/B33CkJN/SEABIRD.jpg",
    "introduction": "수중카메라로 직접 찍은 사진 및 동영상 시청, 동아리 간단설명, 설명회 일정 공유"
  },
  {
    "id" : "12",
    "name" : "공데쌩",
    "category" : "그림 동아리",
    "location" : "21",
    "img": "https://i.ibb.co/SJDptqW/image.jpg",
    "introduction": "나만의 키링 만들기! 슈링클스로 만드는 나만의 키링. 마음대로 그려서 만들면, 하나밖에 없는 키링이 완성됩니다. 직접 만들 키링으로 나만의 개성을 표현해보세요."
  },
  {
    "id" : "13",
    "name" : "C.O.K",
    "category" : "공연예술 분과",
    "location" : "22",
    "img": "https://i.ibb.co/prW8z8Q/COK.jpg",
    "introduction": "동아리내 보유중인 악기 체험 및 선배들이 연주하는 클래식 청취"
  },
  {
    "id" : "14",
    "name" : "타니말라",
    "category" : "락밴드 동아리",
    "location" : "24",
    "img": "https://i.ibb.co/3d5XP7j/image.jpg",
    "introduction": "밴드 악기 체험 부스!!"
  },
  {
    "id" : "15",
    "name" : "소리샘",
    "category" : "감성 어쿠스틱 밴드부",
    "location" : "25",
    "img": "https://i.ibb.co/4FW6skf/image.png",
    "introduction": "캠퍼스 생활에 낭만 한 스푼😊, 금오공대 낭만 버스킹🎶🎙"
  },
];

//상태 업데이트
app.get('/booth', (req, res)=>{
  res.json(booth);
});

app.listen(8000, () => console.log('서버가 실행됩니다. http://localhost:8000'));

//라우트 로그 남기기 추가 예정