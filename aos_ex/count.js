// counter 함수를 만들껀데

const counter = ($counter, max) => {
  let now = max;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(max - now); // ceil 올림 효과

    // 목표수치에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    }

    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;

    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
  }, 50);
};

let yheignt;

console.log(document.documentElement.clientHeight);

window.onload = () => {
  // 카운트를 적용시킬 요소
  const $counter = document.querySelector(".count");

  // 목표 수치
  const max = 325;

  setTimeout(() => counter($counter, max), 1000); // 비동기방식 2초후에 실행
};
