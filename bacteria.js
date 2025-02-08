// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
// 1시간에 2배 증가
// 세균의 마리수 n
// 경과한 시간 t
// 세균의 수 return
const solution1 = (n, t) => {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
};

const solution2 = (n, t) => {
  return n << t;
};

const solution3 = (n, t) => {
  return n * Math.pow(2, t);
};

console.log(solution1(2, 10));
console.log(solution2(7, 15));
console.log(solution3(10, 4));
