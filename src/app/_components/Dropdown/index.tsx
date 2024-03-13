'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Menu from './\bMenu';
import Item from './Item';
import { useRecoilState } from 'recoil';
import { dropState } from '../../../../atom';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(dropState);

  return (
    <Container>
      <Item />
      {isOpen && <Menu />}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;
