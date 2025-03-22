// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
//

const solution = (n) => {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
};

const solution1 = (n) => {
  let answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);
      if (i !== n / i) answer.push(n / i);
    }
  }
  return answer.sort((a, b) => a - b);
};

const solution2 = (n) =>
  Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => n % i === 0);

console.log(solution(24));
console.log(solution1(24));
console.log(solution2(24));
