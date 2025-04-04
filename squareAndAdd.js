// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

const solution = (num_list) => {
  let totalMultiply = 1;
  let totalSum = 0;
  for (i = 0; i < num_list.length; i++) {
    totalMultiply *= num_list[i];
    totalSum += num_list[i];
  }
  return totalMultiply < totalSum * totalSum ? 1 : 0;
};

console.log(solution([3, 4, 5, 2, 1]));
