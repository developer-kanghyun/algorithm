// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

// 주어진 문자열 number를 한 글자씩 쪼개서 각 자리 숫자를 분리한다. (예: "152" → ['1', '5', '2'])
// 분리된 숫자 문자열들을 모두 더한다.
// 최종적으로 더해진 합을 9로 나눈 나머지를 구한다.

function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    answer = answer + Number(number[i]);
  }
  return answer % 9;
}

const solution1 = (number) => {
  let answer = number.split("").reduce((a, b) => a + Number(b));
  return answer % 9;
};

console.log(solution("123"));
console.log(solution1("123"));
