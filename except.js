// 문자열 배열 strArr가 주어집니다.
// 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

// 1. 빈 배열 answer를 생성한다.
// 2. for문을 순회하며 문자열 strArr의 길이만큼 순회한다.
// 3. includes() 함수를 사용하여 strArr[i]에 "ad"가 포함하지 않는다면, answer에 저장한다.

const solution = (strArr) => {
  let answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].includes("ad")) {
      answer.push(strArr[i]);
    }
  }
  return answer;
};

const solution1 = (strArr) => strArr.filter((v) => !v.includes("ad"));

console.log(solution(["and", "notad", "abcd"]));
