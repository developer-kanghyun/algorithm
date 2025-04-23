// 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// 1. reduce() 함수를 사용한다.

const solution = (num_list) =>
  num_list.reduce((a, v) => (num_list.length >= 11 ? a + v : a * v));

const solution1 = (num_list) => {
  const multiple = (a, v) => a * v;
  const add = (a, v) => a + v;

  return num_list.length > 10
    ? num_list.reduce(add, 0)
    : num_list.reduce(multiple, 1);
};

const solution2 = (num_list) =>
  num_list.length >= 11
    ? num_list.reduce((a, c) => a + c)
    : num_list.reduce((a, c) => a * c);

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution1([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution2([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
