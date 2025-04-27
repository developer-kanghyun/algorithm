// 정수 리스트 num_list가 주어집니다.
// 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요.
// 두 값이 같을 경우 그 값을 return합니다.

// 1. 숫자열 oddSum과 EvenSum을 생성한다.
// 2. for문을 순회하여 2로 나누었을 때 나머지가 1인 수(홀수)를 OddSum에 더하여 저장하고 그 외의 수(짝수)를 EvenSum에 저장한다.
// 3. oddSum과 evenSum보다 크다면 oddSum을 리턴, 그 외의 경우 EvenSum을 리턴한다.

const solution = (num_list) => {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 == 1) {
      oddSum += num_list[i];
    } else {
      evenSum += num_list[i];
    }
  }
  return Math.max(oddSum, evenSum);
};

const solution1 = (num_list) => {
  let oddSum = 0;
  let evenSum = 0;
  num_list.forEach((v, i) => (i % 2 === 1 ? (oddSum += v) : (evenSum += v)));
  return Math.max(oddSum, evenSum);
};

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution1([4, 2, 6, 1, 7, 6]));
