// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// 1. split() 함수를 사용하여 문자열 나눈다.
// 2. reduce() 함수를 사용하여 배열 안의 숫자를 더한다.
// 3. Number()함수를 사용하여 문자열을 숫자로로 바꾼다.

const solution = (num_str) => {
  return num_str.split("").reduce((sum, num) => sum + Number(num), 0);
};

const solution1 = (num_str) => {
  return num_str.split("").reduce((sum, num) => sum + +num, 0);
};

function solution2(num_str) {
  var answer = 0;

  num_str.split("").map((a) => (answer += Number(a)));

  return answer;
}

console.log(solution("123456789", 45));
console.log(solution1("123456789", 45));
console.log(solution2("123456789", 45));
