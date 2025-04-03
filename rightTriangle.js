// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = Number(line); // 입력값을 숫자로 변환
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i)); // '*'를 i번 반복하여 출력
  }
  rl.close(); // 입력 종료
});
