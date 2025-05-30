// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

const solution1 = (start_num, end_num) => {
  let answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
};

const solution2 = (start_num, end_num) => {
  return Array.from(
    { length: start_num - end_num + 1 },
    (_, i) => start_num - i
  );
};

const solution3 = (start_num, end_num) => {
  return Array(start_num - end_num + 1)
    .fill()
    .map((_, i) => start_num - i);
};

const solution4 = (start_num, end_num) => {
  let answer = [];
  while (start_num >= end_num) {
    answer.push(start_num);
    start_num--;
  }
  return answer;
};

console.log(solution1(10, 3));
console.log(solution2(10, 3));
console.log(solution3(10, 3));
console.log(solution4(10, 3));
