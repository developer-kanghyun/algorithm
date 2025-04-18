// 정수로 이루어진 문자열 n_str이 주어질 때,
//  n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

//  1. for문을 사용하여 0이 아닌 숫자가 나올 때까지 순회 후, 인덱스넘버를 저장한다.
//  2. slice() 함수를 사용하여 문자열 왼쪽에 0들을 제거한 후, 나머지 문자열을 리턴한다.

const solution = (n_str) => {
  let idxNum = 0;
  for (let i = 0; i < n_str.length - 1; i++) {
    if (n_str[i] !== "0") {
      idxNum = i;
      break;
    }
  }
  return n_str.slice(idxNum);
};

const solution1 = (n_str) => n_str.replace(/^0+/, "");

console.log(solution("0010", "10"));
console.log(solution1("0010", "10"));
