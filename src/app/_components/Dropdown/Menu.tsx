'use client';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { genreState, dropState } from '../../../../atom';

const GENRES = [
  'Trending',
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
];

export default function Menu() {
  const [genre, setGenre] = useRecoilState<string>(genreState);
  const [isOpen, setIsOpen] = useRecoilState<boolean>(dropState);

  const handleGenreClick = (item: string) => {
    setGenre(item);
    setIsOpen(false);
  };

  return (
    <Container>
      {GENRES.map((item: string) => (
        <Divider
          key={item}
          colored={genre === item ? 'true' : 'false'}
          onClick={() => handleGenreClick(item)}
        >
          {item}
        </Divider>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 180px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  margin-top: 10px;
`;

const Divider = styled.div<{ colored: string }>`
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #d7d7d7;
  box-sizing: border-box;
  cursor: pointer;

  font-size: 14px;
  color: ${(props) => (props.colored === 'true' ? '#0A0A0A' : '#7b7d82')};
  &:hover {
    color: #0a0a0a;
  }
`;
