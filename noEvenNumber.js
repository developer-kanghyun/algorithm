// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

let solution1 = (n) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer.sort((a, b) => a - b);
};

function solution2(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + 1 + index)
    .filter((v) => v % 2);
}

console.log(solution(10));
console.log(solution1(10));
console.log(solution2(10));
