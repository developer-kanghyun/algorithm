// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) => {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
};

const solution1 = (numbers) => {
  return numbers.map((number) => number * 2);
};

const solution2 = (numbers) => {
  return numbers.reduce((a, b) => [...a, b * 2], []);
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution2([1, 2, 3, 4, 5]));
