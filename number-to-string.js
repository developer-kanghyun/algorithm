// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

const solution1 = (n) => {
  let answer = 0;
  let number = String(n);
  for (let i = 0; i < number.length; i++) {
    answer += parseInt(number[i]);
  }
  return answer;
};

const solution2 = (n) => {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
};

const solution3 = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(solution1(1234));
console.log(solution2(1234));
console.log(solution3(1234));
