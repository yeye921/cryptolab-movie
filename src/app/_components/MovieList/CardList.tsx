'use client';
import styled from 'styled-components';

interface CardListProps {
  children: React.ReactNode;
}
export default function CardList({ children }: CardListProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px 0px 20px 0px;
`;
