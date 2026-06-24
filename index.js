const express = require('express');
const app = express();
const port = 3000;

// 응원 메시지 목록
const messages = [
  /*"오늘의 일기 : 바퀴벌레를 봤다. 동네 계단에서도 바퀴벌레를 봤다. 으으 그리고 너무 고된 하루엿따.",
  "오늘의 일기 : 야르바이트를 했다. 내 인생에서 가장 긴 19시간 이었다.",
  "오늘의 일기 : 왕유행이라는 포켓몬카드를 뽑았다. 좋은거 안나와서 계속 뽑다가 파산해따..",
  "언제나 당신의 편이 되어줄 사람이 있다는 걸 잊지 마세요!",
  "당신은 이미 최강입니다. goat.",
  "당신은 충분히 잘하고 있습니다!",
  "얍!! 응원 버프 걸어드릴게요🤩",
  "hello my friend! my name is hyobing23. im from korea. my favorite food is kimchi. just like common korean.. ㅎㅎ And i hate oyster. :( i really hate that. if you want to have dinner with me? don't suggest menu include oyster! have a nice day~",
  "i have turtle neck.. zz my neck is broken. take me to the hospital",*/
  "오늘 배운 것 : 시멘틱 태그 : section article nav 등등... div쓰지 말고 시멘틱 태그로 써라",
  "오늘 배운 것 : nav 안에 suvNav 만들기.. a 밑에 ul 생성 <ul class="gnb"><il><a href"#"><ul class="lnb"><il><a href"#"></a></li></ul></a></li></ul>",
  "where함수 쓰는 법 --> 선택자:where(선택자){속성:값;} where으로 지정한 값을 또 where로 변경할 수 있다.(가상선택자같은거) 그냥 :where()갖다붙이고 또 :where() 쓰면 댐. is()도 있음. is가 더 쎄다.",
  "has함수 쓰는 법 --> 선택자1:has(선택자2){속성:값;} 선택자2를 가진 선택자1의 값을 지정한다. 특정 값을 가진 자식의 부모요소를 선택할 때 사용할 수 있음. ul:has(li::after){}",
];

// 배열을 무작위로 섞는 함수 (Fisher-Yates 셔플)
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 최초로 무작위 섞인 메시지 배열 생성
let shuffledMessages = shuffle(messages);

// API 엔드포인트 설정
app.get('/', (req, res) => {
  // 만약 모든 메시지를 다 꺼내서 썼다면, 다시 새로 섞어서 채워넣기
  if (shuffledMessages.length === 0) {
    shuffledMessages = shuffle(messages);
    console.log("모든 메시지를 소진하여 새로 섞었습니다!");
  }

  // pop()을 사용해 배열의 맨 뒤 요소를 하나씩 제거하며 가져옴 (중복 방지)
  const selectedMessage = shuffledMessages.pop();

  res.json({
    message: selectedMessage,
    status: "success",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`API 서버가 시작되었습니다! 주소: http://localhost:${port}`);
});
