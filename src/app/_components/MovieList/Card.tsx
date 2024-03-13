'use client';
import styled from 'styled-components';

export default function Card({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #d7d7d7;

  //   시간되면 반응형으로 개선하기 + 이미지마다 주소도 다르게 설정
  //   @media screen and (min-width: 1200px) and (max-width: 1920px) {
  //     width: 300px;
  //     height: 420px;
  //   }
  //   @media screen and (min-width: 480px) and (max-width: 999px) {
  //     width: 200px;
  //     height: 120px;
  //   }
  //   @media screen and (max-width: 479px) {
  //     width: 300px;
  //     height: 420px;
  //   }
`;
