// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
// 1. 내림차순하여 인덱스넘버 0과 1을 곱한다.
// 2. 음수가 2개가 있다면 음수끼리 곱하였을때 가장 큰 수가 나오는지 확인
const solution = (numbers) => {
  numbers.sort((a, b) => b - a);
  const multiple1 = numbers[0] * numbers[1];
  const multiple2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return Math.max(multiple1, multiple2);
};

const solution1 = (numbers) => {
  numbers.sort((a, b) => b - a);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
};

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution1([1, 2, -3, 4, -5]));
