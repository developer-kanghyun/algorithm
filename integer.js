// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

const solution = (num_list, n) => (num_list.includes(n) ? 1 : 0);

const solution1 = (num_list, n) => {
  for (let i of num_list) {
    if (i === n) {
      return 1;
    } else {
      0;
    }
  }
};

console.log(solution([1, 2, 3, 4, 5], 3));
console.log(solution1([1, 2, 3, 4, 5], 3));
