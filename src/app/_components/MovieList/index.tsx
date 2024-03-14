'use client';
import Card from './Card';
import CardList from './CardList';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { tabState, genreState } from '../../../../atom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatRate, formatDate, formatStar } from '@/app/_utils';
import arrow_right from '/public/small_arrow_right.png';

interface MovieListProps {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}

interface MovieProps {
  id: number;
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export default function MovieList() {
  const [tabMode, setTabMode] = useRecoilState<number>(tabState);
  const [genre, setGenre] = useRecoilState<string>(genreState);
  const [data, setData] = useState<MovieListProps>();

  const imgsrc = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const ACCESS_TOKEN = `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const TREND_URL = 'trending/movie/day?language=en-US';
  const API_URL = process.env.NEXT_PUBLIC_API_URL + TREND_URL;

  // if (tabMode == 1) {
  //   // 장르에 따라 불러옴
  // } else {
  //   // 좋아하는 영화 목록 불러옴
  // }
  const [hoveredCard, setHoveredCard] = useState<number>();

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: ACCESS_TOKEN,
      },
      cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data: MovieListProps) => {
        setData(data);
        console.log(data);
        // setLoading(false);
      });
  }, [ACCESS_TOKEN, API_URL]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <CardList>
      {data.results.map((movie: MovieProps) => (
        <Card
          key={movie.id}
          onMouseOver={() => setHoveredCard(movie.id)}
          onMouseOut={() => setHoveredCard(0)}
        >
          <StyledImage
            src={imgsrc + movie.poster_path}
            alt={movie.original_title}
            width={300}
            height={420}
            object-fit='cover'
            isHovered={hoveredCard === movie.id}
          />
          {hoveredCard === movie.id && (
            <OverlayCard>
              <TopContainer>
                <TitleText>{movie.original_title}</TitleText>
                <SmallText>({formatDate(movie.release_date)})</SmallText>
              </TopContainer>

              <BottomContainer>
                <RateWrapper>
                  <SmallText>{formatRate(movie.vote_average)}</SmallText>
                  {/* 별: 숫자로 알려주면 3.6 이런식으로 알려주면 여기서 계산하게 해야함 */}
                  <StarWrapper>
                    <SmallText>{formatStar(movie.vote_average)}</SmallText>
                  </StarWrapper>
                </RateWrapper>
                {/* 장르 넣기 */}
                <MiddleText>{movie.overview}</MiddleText>
                <DetailWrapper>
                  <SmallText>View Details</SmallText>
                  <Image
                    src={arrow_right}
                    alt='right-arrow'
                    width={18}
                    height={18}
                  />
                </DetailWrapper>
              </BottomContainer>
            </OverlayCard>
          )}
        </Card>
      ))}
    </CardList>
  );
}

const OverlayCard = styled.div`
  position: absolute;
  font-size: 20px;
  top: 0;
  left: 0;
  padding: 20px 20px 10px 20px;

  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const StyledImage = styled(Image)<{ isHovered: boolean }>`
  position: relative;
  filter: ${(props) => props.isHovered && 'brightness(0.4);'};
  transition: filter 0.2s ease-in-out;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

const RateWrapper = styled.div`
  display: flex;
`;

const StarWrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TitleText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
`;

const MiddleText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;
`;

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #ffffff;
`;
