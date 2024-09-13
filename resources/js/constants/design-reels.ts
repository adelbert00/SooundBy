// resources/js/constants/design-reels.ts

export interface Reel {
  width: number;
  height: number;
  src: string;
  title: string;
  subtitle: string;
}

export const reels: Reel[] = [
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/2MHh9BsH2d0?si=7wmS9LTQq-GqEppo',
    title: 'GTA 5 Online: The Last Dose',
    subtitle: 'Music & Sfx Redesign',
  },
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/v2xGSW5-t7g?si=3hAJFuX6br1WxmdH',
    title: 'League of Legends',
    subtitle: 'Rengar: Sound Redesign',
  },
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/eeQrxWYofVo?si=7x7dgyDwyfh-HAtK',
    title: 'Stacko Bot',
    subtitle: 'Music & Sfx + UE5 Implementation',
  },
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/EOn5UYs99oI?si=iQFsKM2VNCTLDdup',
    title: 'Ryno 8',
    subtitle: 'Sfx Redesign',
  },
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/Hy76V2oZKl0?si=GZ2mxLC40Gzgo84a',
    title: 'MTS: Animation 04',
    subtitle: 'Music & Sfx + Voiceover Redesign',
  },
  {
    width: 640,
    height: 280,
    src: 'https://www.youtube.com/embed/rOXcvxUCFRQ?si=gFsNn9knLQhm_hoF',
    title: 'MTS: Animation 07',
    subtitle: 'Music + Sfx Redesign',
  },
];
