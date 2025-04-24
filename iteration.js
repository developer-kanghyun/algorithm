// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다.
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// 1. 원소들의 합을 저장할 변수 answer를 선언한다.
// 2. while문을 사용하여 배열 number의 정수 n을 순회하며 각 원소를 더하여 answer에 저장한다.
// 3. 원소들의 합의 크기가 정수 n의 크기보다 커질 때, answer를 리턴한다.

const solution = (numbers, n) => {
  let answer = 0;
  let i = 0;
  while (answer < n) {
    answer += numbers[i];
    i++;
  }
  return answer;
};

function solution1(numbers, n) {
  var answer = 0;
  let i = 0;
  while (answer <= n) {
    answer += numbers[i++];
  }
  return answer;
}

const solution2 = (numbers, n) => {
  return numbers.reduce((a, c) => (a < n ? a + c : a));
};

function solution3(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) break;
  }
  return sum;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution1([34, 5, 71, 29, 100, 34], 123));
console.log(solution2([34, 5, 71, 29, 100, 34], 123));
console.log(solution3([34, 5, 71, 29, 100, 34], 123));
