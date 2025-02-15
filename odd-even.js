// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution1 = (num_list) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return [even, odd];
};

function solution2(num_list) {
  let evenCount = 0;
  let oddCount = 0;

  for (let num of num_list) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return [evenCount, oddCount];
}

function solution3(num_list) {
  const evenCount = num_list.filter((num) => num % 2 === 0).length;
  return [evenCount, num_list.length - evenCount];
}

console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution2([1, 2, 3, 4, 5]));
console.log(solution3([1, 2, 3, 4, 5]));
