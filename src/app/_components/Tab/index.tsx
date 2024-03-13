'use client';
import styled from 'styled-components';
import TabText from './TabText';
import { tabState } from '../../../../atom';
import { useRecoilState } from 'recoil';

export default function Tab() {
  const [tabMode, setTabMode] = useRecoilState<number>(tabState);

  const handleListClick = () => {
    setTabMode(1);
  };

  const handleFavoriteClick = () => {
    setTabMode(2);
  };
  return (
    <Container>
      <TabText type={tabMode == 1 ? 1 : 2} onClick={handleListClick}>
        Movie List
      </TabText>
      <TabText type={tabMode == 2 ? 1 : 2} onClick={handleFavoriteClick}>
        My Favorite List
      </TabText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0px 30px;
`;
