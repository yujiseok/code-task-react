# Code - 사전과제

DEMO: https://code-task-react.vercel.app/

## 기술 스택

- React (18.2.0)
- TypeScript
- Recoil
- Tailwind CSS
- Framer-motion
- vite

## 기능 구현

### Recoil의 `selectorFamily`를 활용한 데이터 페칭

거래소의 목록과 각 거래소의 데이터를 페치하기 위해 Recoil의 `selectorFamily`를 활용하였습니다. 이때 `Suspense`를 활용하여 스켈레톤 UI로 UI를 대체하였습니다.

### filter 상태에 따른 거래량 정렬

filter 값에 따라 배열의 메서드인 `sort`를 활용하여 거래량 정렬을 구현하였습니다.

## 커스텀 훅

### useClickOutside

모달의 외부 클릭을 감지하기 위해 `useEffect`와 `ref`를 사용해 커스텀 훅을 생성하였습니다. 이때, 컴포넌트가 언마운트될 시 부착된 이벤트 핸들러를 클린업하는 함수를 추가하였습니다.

### useModal

모달의 토글 상태와 거래소의 id 값을 상태를 저장하기 위한 커스텀 훅을 생성하였습니다.

### usePagination

거래소 목록의 페이지네이션을 위한 커스텀 훅을 생성하였습니다.
