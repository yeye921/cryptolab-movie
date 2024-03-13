'use client';
import styled from 'styled-components';
import Tab from './Tab';
import Dropdown from './Dropdown';
import { useRecoilState } from 'recoil';
import { tabState } from '../../../atom';

export default function FilterBar() {
  const [tabMode, setTabMode] = useRecoilState<number>(tabState);

  return (
    <Container>
      <Tab />
      {tabMode == 1 && <Dropdown />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
