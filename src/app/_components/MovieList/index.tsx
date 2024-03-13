'use client';
import Card from './Card';
import CardList from './CardList';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { tabState, genreState } from '../../../../atom';
import { useEffect, useState } from 'react';

interface MovieDataProps {
  page: number;
  results: ResultsProps[];
  total_pages: number;
  total_results: number;
}

interface ResultsProps {
  id: number;
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
}

export default function MovieList() {
  const [tabMode, setTabMode] = useRecoilState<number>(tabState);
  const [genre, setGenre] = useRecoilState<string>(genreState);
  const [data, setData] = useState<MovieDataProps>();

  const imgsrc = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const ACCESS_TOKEN = `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const TREND_URL = 'trending/movie/day?language=en-US';
  const API_URL = process.env.NEXT_PUBLIC_API_URL + TREND_URL;

  // if (tabMode == 1) {
  //   // 장르에 따라 불러옴
  // } else {
  //   // 좋아하는 영화 목록 불러옴
  // }

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
      .then((data: MovieDataProps) => {
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
      {data.results.map((movie: any) => (
        <Card key={movie.id}>
          <Image
            src={imgsrc + movie.poster_path}
            alt={movie.original_title}
            width={300}
            height={420}
            object-fit='cover'
          />
        </Card>
      ))}
    </CardList>
  );
}
