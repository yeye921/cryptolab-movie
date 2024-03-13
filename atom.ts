import { atom } from 'recoil';

export const tabState = atom<number>({
  key: 'tabState',
  default: 1, // 1이면 영화목록, 2이면 좋아하는 영화
});

export const genreState = atom<string>({
  key: 'genreState',
  default: 'Trending',
});

export const dropState = atom<boolean>({
  key: 'dropState',
  default: false,
});
