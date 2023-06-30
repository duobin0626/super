const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString();
  const 초 = 흐른_시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

// ` 백틱 으로 감싸줘야 변수로 나타낼 수 있다.

// 주기성
setInterval(setTime, 1000);
