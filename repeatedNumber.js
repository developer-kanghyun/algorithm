// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

const solution1 = (array, n) => {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
};

const solution2 = (array, n) => {
  return array.filter((j) => j === n).length;
};

const solution3 = (array, n) => {
  let count = 0;
  let answer = array.map((number) => {
    if (number === n) {
      count++;
    }
  });
  return count;
};

const solution4 = (array, n) => {
  let answer = 0;
  array.forEach((number) => {
    if (number === n) {
      answer += 1;
    }
  });
  return answer;
};

console.log(solution1([1, 1, 2, 3, 4, 5], 1));
console.log(solution2([1, 1, 2, 3, 4, 5], 1));
console.log(solution3([1, 1, 2, 3, 4, 5], 1));
console.log(solution4([1, 1, 2, 3, 4, 5], 1));
