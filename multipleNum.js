// 정수 n과 정수 배열 num_list 매개변수로 주어질 때, num_list에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

// 1. num_list에서 n을 나누었을 때, 나머지가 0인 수를 arr에 저장.
// 2. arr 리턴
const solution = (n, num_list) => {
  let arr = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % n == 0) {
      arr.push(num_list[i]);
    }
  }
  return arr;
};

const solution1 = (n, num_list) => {
  return num_list.filter((num) => num % n === 0);
};

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution1(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
