// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
let num_list = [];

const solution1 = (num_list) => {
  let answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
};

const solution2 = (num_list) => {
  return num_list.reverse();
};

console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution2([1, 0, 1, 1, 1, 3, 5]));
