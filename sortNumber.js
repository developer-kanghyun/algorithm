// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 1. replace 함수를 사용하여 숫자열을 제외한 원소 제거
// 2. split 함수를 사용하여 모든 원소를 나열
// 3. sort 함수를 사용하여 오름차순으로 정렬
// 4. 문자열을 숫자열로 변환한 후 리턴
const solution = (my_string) => {
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .sort((a, b) => a - b)
    .map(Number);
};

// const solution1 = (my_string) => {
//   return (
//     my_string
//       .match(/\d+/g) // 연속된 숫자 추출
//       ?.map(Number) // 숫자로 변환
//       .sort((a, b) => a - b) || []
//   ); // 빈 배열 처리
};
console.log(solution("hi12392"));
