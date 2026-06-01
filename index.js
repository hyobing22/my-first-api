const express = require('express');
const app = express();
const port = 3000;

// 응원 메시지 목록
const messages = [
  "걱....걱...걱..",
  "꺄아아아아아아아아아아아악",
  "당신에게서 빛이 납니다!! 눈부셔잉",
  "당신은 완전 멋있습니다.",
  "오늘도 화이팅!!!!",
  "엄준식",
  "우와아아아아아아앙",
  "아 배고프다",
  "^^당신은 최고입니다!",
  "오늘도 멋찐 하루 보내세요^^",
  "내 옆에 외계인이 있따",
  "당신은 오늘도 값진 하루를 보냈습니다^^",
  "꿀 고구마 라떼",
  "청계천",
  "목초지",
  "알루미늄",
  "다 잘될거얏",
  "오리를 생으로 먹으면? 회오리",
  "다 별로라 하는 말이 하는 말은? 다그닥 다그닥",
  "비빔밥 재료들이 나누는 인사는? 왼손으로 비비고 오른손으로 비비고",
  "자동차가 울면? 잉잉"
];

// API 엔드포인트 설정
app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  res.json({
    message: messages[randomIndex],
    status: "success",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`API 서버가 시작되었습니다! 주소: http://localhost:${port}`);
});
