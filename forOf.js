// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때,
// arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// 1. 상수 빈 배열 X를 선언한다.
// 2. forOf 문을 사용하여 값을 반복하여 빈 배열 X에 저장한다.

const solution = (arr) => {
  let X = [];
  for (let a of arr) {
    for (let i = 0; i < a; i++) {
      X.push(a);
    }
  }
  return X;
};

console.log(solution([5, 1, 4]));
