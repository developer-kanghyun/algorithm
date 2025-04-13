// 정수 배열 arr과 정수 n이 매개변수로 주어집니다.
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. arr의 길이가 홀수인 경우, arr의 모든 짝수 인덱스 위치에 n을 더한 배열을 리턴
// 2. arr의 길이가 짝수인 경우, arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 리턴

const solution = (arr, n) => {
  const oddNumber = arr.length % 2 === 1;
  return arr.map((v, i) =>
    oddNumber & (i % 2 === 0) || !oddNumber & (i % 2 === 1) ? v + n : v
  );
};

console.log(solution([49, 12, 100, 276, 33], 27));
