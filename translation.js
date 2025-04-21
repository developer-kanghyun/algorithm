// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때,
// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

// 1. map() 메소드를 사용하여 인덱스가 홀수일 때, 모든 문자열을 대문자로 리턴하고 그 외의 경우에는 문자열을 소문자로 리턴한다.

const solution = (strArr) =>
  strArr.map((str, i) => (i % 2 === 0 ? str.toUpperCase() : str.toLowerCase()));

function solution1(strArr) {
  var answer = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 == 0) {
      answer.push(strArr[i].toLowerCase());
    } else {
      answer.push(strArr[i].toUpperCase());
    }
  }

  return answer;
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
