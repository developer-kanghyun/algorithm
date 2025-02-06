// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

const solution1 = (n) => {
  let answer = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i == n) {
      answer = 1;
    } else {
      answer = 2;
    }
  }
  return answer;
};

const solution2 = (n) => {
  for (let i = 1; i * i <= n; i++) {
    if (i * i == n) {
      return 1;
    }
  }
  return 2;
};

const solution3 = (n) => {
  let answer = 2;
  for (let i = 1; i * i <= n; i++) {
    if (i * i == n) {
      answer = 1;
      return answer;
    }
  }
  return answer;
};

console.log(solution1(144));
console.log(solution2(976));
