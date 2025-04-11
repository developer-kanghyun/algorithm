// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 1. 홀수만 순서대로 이어 붙인 수를 저장할 상수명 odd를 문자열로 생성
// 2. 짝수만 순서대로 이어 붙인 수를 저장할 상수명 even을 문자열로 생성
// 3. for문을 순회하고 나머지 연산자를 사용하여 짝수면 even, 홀수면 odd에 숫자를 저장
// 4. even과 odd를 숫자로 변환하며 더한다.

function solution(num_list) {
  let even = "";
  let odd = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += num_list[i];
    } else {
      odd += num_list[i];
    }
  }
  return parseInt(even) + parseInt(odd);
}

const solution1 = (num_list) => {
  return (
    Number(num_list.filter((v) => v % 2 == 0).join("")) +
    parseInt(num_list.filter((v) => v % 2 !== 0).join(""))
  );
};

console.log(solution([3, 4, 5, 2, 1], 393));
console.log(solution1([3, 4, 5, 2, 1], 393));
