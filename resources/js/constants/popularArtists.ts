import { PopularArtist } from '@/interfaces/PopularArtist';

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/photos/${imageName}`, import.meta.url).href;
};

export const popularArtists: PopularArtist[] = [
  {
    name: 'A$AP ANT',
    description:
      'Znany raper pochodzący z Baltimore, USA. Od lat wierny członek kolektywu A$AP MOB',
    imageSrc: getImageUrl('studio1.jpg'),
    tracks: [
      'Track 1 - Wydany 2021',
      'Track 2 - Wydany 2020',
      'Track 3 - Wydany 2019',
    ],
  },
  {
    name: 'ĆPAJSTAJL',
    description: 'Legendarny twórca muzyki elektronicznej.',
    imageSrc: getImageUrl('studio2.jpg'),
    tracks: [
      'Hit 1 - Wydany 2022',
      'Hit 2 - Wydany 2020',
      'Hit 3 - Wydany 2018',
    ],
  },
  {
    name: 'Gen9820',
    description: 'Pionier nowoczesnego hip-hopu.',
    imageSrc: getImageUrl('studio3.jpg'),
    tracks: [
      'Singiel 1 - Wydany 2021',
      'Singiel 2 - Wydany 2019',
      'Singiel 3 - Wydany 2017',
    ],
  },
];
