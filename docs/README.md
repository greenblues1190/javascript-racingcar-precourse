## 구현할 기능 목록

### 1. 자동차 이름 입력 받기

- [x] 엘리먼트에 id 추가
  - [x] 자동차의 이름 입력 input 태그: `car-names-input`
  - [x] 자동차의 이름 제출 button 태그: `car-names-submit`
- [x] `car-names-submit` 버튼의 click 이벤트에 핸들러 추가
  - [x] 이벤트가 발생하면 `car-names-input`의 `value`를 읽어오기
  - [x] 읽어온 문자열을 `,`를 구분자로 하여 파싱
  - [x] 파싱한 문자열 각각의 양단의 공백 제거

### 2. 자동차 이름 유효성 검증하기

- [x] 파싱한 문자열 배열을 가지고 각 자동차 이름의 유효성 검증
  - [x] 1자 이상 5자 이하인지?
  - [x] 중복된 이름이 있는지?
- [x] 유효성 검증에 실패하면 `alert`를 사용해 에러 메시지 보여주기
- [x] 유효성 검증에 실패하면 `car-names-input`의 `value`를 빈 문자열로 초기화하기

### 3. 자동차 생성하기

- [ ] 자동차 이름 입력 유효성 검증을 통과하면 자동차 이름 배열을 순회하며 `Car` 객체를 생성
  - [ ] 이름: 입력받은 자동차 이름
  - [ ] 이동거리: 0

### 4. 이동 횟수 입력 받기

- [ ] 엘리먼트에 id 추가
  - [ ] 레이싱 횟수 입력 input 태그: `racing-count-input`
  - [ ] 레이싱 횟수 제출 button 태그: `racing-count-submit`
- [ ] `racing-count-submit` 버튼의 click 이벤트에 핸들러 추가
  - [ ] 이벤트가 발생하면 `racing-count-input`의 `valueAsNumber`를 읽어오기

### 5. 이동 횟수 유효성 검증하기

- [ ] 읽은 입력값의 유효성 검증
  - [ ] 1 이상 `이동 횟수 최댓값` 이하인지? _(`이동 횟수 최대값`은 `Number.MAX_SAFE_INTEGER`로 임시로 정한다.)_
- [ ] 유효성 검증을 실패하는 경우
  - [ ] alert를 사용해 에러 메시지 보여주기
  - [ ] `racing-count-input`의 `value`를 빈 문자열로 초기화
- [ ] 유효성 검증을 통과하는 경우
  - [ ] 입력받은 이동 횟수를 저장

### 6. 이동 횟수 입력값이 유효하다면 회차별 자동자 이동 진행하기

- [ ] 이동 횟수만큼 다음을 진행
- [ ] 모든 자동차를 순회하며 `자동차 이동`을 진행
  - [ ] [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 0에서 9 사이의 무작위 값을 생성한다.
  - [ ] 0에서 9 사이의 무작위 값을 생성해 4 이상인지 검사
  - [ ] 4 이상이면 자동차의 `이동거리`를 1 증가
- [ ] 모든 자동차를 순회하며 `{자동차 이름, 이동거리}`를 읽어 배열 반환

### 7. 회차별 출력하기

- [ ] `{자동차 이름, 이동 거리}` 배열을 받아 회차별 결과 문자열 생성
  - [ ] 문자열 포맷: `${자동차 이름}: ` + 이동 거리만큼의 `-`
- [ ] 생성한 문자열을 결과 div의 마지막에 추가

### 8. 최종 우승자 구하기

- [ ] 모든 자동차의 이동 거리 중 최댓값 구하기
- [ ] 이동 거리 최댓값과 같은 이동 거리를 가진 자동차의 이름으로 배열 생성
- [ ] 생성한 배열 반환

### 9. 최종 우승자 출력하기

- [ ] 최종 우승자 배열을 받아 `,`를 구분자로 하여 최종 우승자 문자열 생성
  - [ ] 문자열 포맷: `${최종 우승자}: ` + `,`로 구분한 최종 우승자 배열
- [ ] 생성한 문자열을 결과 div의 마지막에 추가