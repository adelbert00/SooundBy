import { SamplePack } from '../interfaces/SamplePack';

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/covers/${imageName}`, import.meta.url).href;
};

export const samplePacks: SamplePack[] = [
  {
    imageSrc: getImageUrl('1.jpg'),
    name: 'Look Inside Volume 1',
    contents: ['40 Melody loops', '7 MIDI Patterns, HiHats', 'Some Bass Shots'],
    previewLink: 'https://www.youtube.com/watch?v=UdmH48mIO5w',
  },
  {
    imageSrc: getImageUrl('2.jpg'),
    name: 'Look Inside Volume 2',
    contents: ['40 Melody Loops', '15 Drums Loops', '15 MIDI patterns'],
    previewLink: 'https://www.youtube.com/watch?v=YcXC8cjytJY&t=2s',
  },
  {
    imageSrc: getImageUrl('3.jpg'),
    name: 'Look Inside Volume 3',
    contents: ['50 Melody Loops', '60 Drums', '60 Chord hits'],
    previewLink: 'https://www.youtube.com/watch?v=Yd7HZ2V3UeM',
  },
  {
    imageSrc: getImageUrl('4.jpg'),
    name: 'Look Inside Volume 4',
    contents: ['51 Melody Loops', '54 Drums', '11 MIDI patterns'],
    previewLink: 'https://www.youtube.com/watch?v=YiD0f6CnnWs',
  },
];
