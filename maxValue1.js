// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// Math.max() 함수를 사용하여 가장 큰 수를 찾는다.
// indexOf() 함수를 사용하여 가장 큰 수의 인덱스를 찾는다.
const solution = (array) => {
  let maxValue = Math.max(...array);
  let indexOfMaxValue = array.indexOf(maxValue);
  return [maxValue, indexOfMaxValue];
};

const solution1 = (array) => {
  let maxValue = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
      maxIndex = i;
    }
  }
  return [maxValue, maxIndex];
};

console.log(solution([1, 8, 3]));
console.log(solution1([1, 8, 3]));
