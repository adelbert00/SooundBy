import { PopularArtist } from '@/interfaces/PopularArtist';

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/photos/${imageName}`, import.meta.url).href;
};

export const popularArtists: PopularArtist[] = [
  {
    name: 'A$AP ANT',
    description:
      'Znany raper pochodzący z Baltimore, USA. Od lat wierny członek kolektywu A$AP MOB',
    imageSrc: getImageUrl('ant.jpg'),
    tracks: ['A$AP ANT - Devil May Cry'],
  },
  {
    name: 'ĆPAJSTAJL',
    description: 'Legendarny twórca muzyki elektronicznej.',
    imageSrc: getImageUrl('cpajstajl.png'),
    tracks: [
      'ĆPAJ STAJL - Muszę się wyszumieć',
      'ĆPAJ STAJL - Nie chce więcej miłości',
      'ĆPAJ STAJL - Tolkien',
    ],
  },
  {
    name: 'Abram Montana',
    description: 'Pionier nowoczesnego hip-hopu.',
    imageSrc: getImageUrl('abram.jpg'),
    tracks: ['Abram Montana - Prawdziwy Trap', 'Abram Montana - Dwie Zajawki'],
  },
];
