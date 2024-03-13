'use client';
import FilterBar from '@/app/_components/FilterBar';
import MovieList from '@/app/_components/MovieList';
import styled from 'styled-components';

export default function MovieListPage() {
  // 1. 영화목록페이지 => Dropdown에 따라서 다른 장르 영화목록 불러옴
  // 2. 좋아요 페이지 => 탭으로만 변경됨
  return (
    <Container>
      <FilterBar />
      <MovieList />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 20px 0px 20px 0px;
  box-sizing: border-box;
`;
