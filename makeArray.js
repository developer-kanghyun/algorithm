// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

const solution = (n, k) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) answer.push(i);
  }
  return answer;
};

const solution1 = (n, k) => {
  let answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
};

const solution2 = (n, k) => {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  return array.filter((array) => array % k === 0);
};

console.log(solution(10, 5));
console.log(solution1(10, 5));
console.log(solution2(10, 5));
