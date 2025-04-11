// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 1. sort()함수를 사용하여 오름차순으로 나열한다.
// 2. slice()함수를 사용하여 앞의 가장 작은 수 5개를 제외한 수를 리턴한다.

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

console.log(
  solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10], [15, 32, 38, 46, 56])
);
