/* 태그를 선택하는 방법 */
/* 1. getElementById : id만 가져올 수 있다. #쓰면 안됨. */
// const timeElement = document.getElementById("time");

/* 2.querySelector : 범용적으로 사용되기 때문에 잘 구분하여 작성 해줘야 한다. ex) class(.),id(#) */
// const timeElement = document.querySelector("h1");
// const timeElement = document.querySelector("#time");
const timeElement = document.querySelector(".titi");

function 실행될_함수() {
  timeElement.style.color = "tomato";
  timeElement.innerText = "12:00";
}
timeElement.style.color = "orange";

function 색깔을_바꿔줄_함수() {
  if (timeElement.style.color === "orange") {
    timeElement.style.color = "blue";
  } else {
    timeElement.style.color = "orange";
  }
}

function 숫자를_바꿔줄_함수() {
  timeElement.innerText = "12:00";
}

/* 마우스이벤트 */
// timeElement.addEventListener("click", 실행될_함수);
// timeElement.addEventListener("mouseover", 실행될_함수);

// timeElement.addEventListener("click", 색깔을_바꿔줄_함수);
timeElement.addEventListener("click", 숫자를_바꿔줄_함수);

// 윈도우 이벤트
// window.addEventListener("copy", 실행될_함수); // 복사했을 때
// window.addEventListener("resize", 실행될_함수); // 창 크기 조절했을 때

/* timeElement.addEventListener("click", 실행될_함수()); 
    만약 위와 같이 실행될_함수 뒤에()를 붙히게 되면 저 위치에서 
    바로 실행을 시켜달라는 의미 이기 때문에 주의해서 사용해야한다.
*/

//
//
/* 태그의 속성을 변경 (스타일,내부텍스트 변경가능) */
// timeElement.style.color = "tomato";
// timeElement.innerText = "12:00";
/* title변경 */
document.title = "❤❤❤❤❤❤❤❤❤❤❤❤";
