'use client';
import styled from 'styled-components';

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Wrapper>{children}</Wrapper>;
}

// 좌우 여백만 여기서 주고 상하 여백은 각 페이지에서 설정함
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 50px 0px 50px;
`;
