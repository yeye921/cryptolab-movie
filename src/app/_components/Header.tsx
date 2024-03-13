'use client';
import styled from 'styled-components';

export default function Header() {
  const text = '프론트엔드 구현 과제 (김예원)';
  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
}

const Container = styled.header`
  // display: flex;
  // align-items: center;
  // min-height: 72px;
  padding: 27px 20px 27px 20px;
  border-bottom: 1px solid #eeeeee;
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #531fc2;
`;
