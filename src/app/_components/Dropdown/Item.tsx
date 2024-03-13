'use client';
import styled from 'styled-components';
import Image from 'next/image';
import arrow_up from '/public/arrow_up.png';
import arrow_down from '/public/arrow_down.png';
import { useRecoilState } from 'recoil';
import { dropState, genreState } from '../../../../atom';

export default function Item() {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(dropState);
  const [genre, setGenre] = useRecoilState<string>(genreState);

  const handleDropClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Container onClick={handleDropClick}>
      <Label>{genre}</Label>
      <Image
        src={isOpen ? arrow_up : arrow_down}
        alt='arrow-up'
        width={24}
        height={24}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 180px;
  height: 40px;
  padding: 0px 10px 0px 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #f9f9f9;
  cursor: pointer;
  box-sizing: border-box;
`;

const Label = styled.span`
  font-size: 14px;
  color: #0a0a0a;
`;
