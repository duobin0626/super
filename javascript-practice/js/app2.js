const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString(); // 1. 숫자이기 때문에 문자열로 변환
  const 초 = 흐른_시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
  // 2.문자열로 바꿔준 변수를 .padStart을 이용하여 2자리 수로 표현해줌 .
  // .padStart는 문자열에서만 지원 , 숫자는 오류발생
}

// ` 백틱 으로 감싸줘야 변수로 나타낼 수 있다.

// 주기성
setInterval(setTime, 1000);
