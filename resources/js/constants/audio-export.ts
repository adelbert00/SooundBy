export interface musicScores {
  src: string;
  title: string;
  details: string;
}

export const musicScores: musicScores[] = [
  {
    src: new URL(
      '../assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
      import.meta.url
    ).href,
    title: 'Ambient No Man Sky',
    details: '117 BPM & C MINOR',
  },
  {
    src: new URL(
      '../assets/music/ChurchArea_F_Minor_105BPM.mp3',
      import.meta.url
    ).href,
    title: 'ChurchArea',
    details: '105 BPM & F MINOR',
  },
];

export interface SoundEffect {
  src: string;
  type: string;
  title: string;
  details: string;
}

export const soundEffects: SoundEffect[] = [
  {
    src: new URL('../assets/music/SFX_JetPack_Sequence.mp3', import.meta.url)
      .href,
    type: 'audio/wav',
    title: 'JetPack Sequence',
    details: 'StackoBot',
  },
  {
    src: new URL('../assets/music/SFX_UNI_INT_DR_Open.mp3', import.meta.url)
      .href,
    type: 'audio/wav',
    title: 'Open Door Sound',
    details: 'StackoBot',
  },
];

export interface foleyExamples {
  src: string;
  type: string;
  title: string;
  details: string;
}

export const foleyExamples: foleyExamples[] = [
  {
    src: new URL('../assets/music/Coins_Falling_01.wav', import.meta.url).href,
    type: 'audio/wav',
    title: 'Coins Falling',
    details: 'Suitcaise Hero',
  },
  {
    src: new URL('../assets/music/Coins_Hit_04.wav', import.meta.url).href,
    type: 'audio/wav',
    title: 'Coins Hit',
    details: 'Suitcaise Hero',
  },
];

export interface percExamples {
  src: string;
  type: string;
  title: string;
  details: string;
}

export const percExamples: percExamples[] = [
  {
    src: new URL('../assets/music/Perc_Shot_10.wav', import.meta.url).href,
    type: 'audio/wav',
    title: 'Wood + Water Hit',
    details: 'Look Inside Volume 4',
  },
  {
    src: new URL('../assets/music/Perc_Shot_11.wav', import.meta.url).href,
    type: 'audio/wav',
    title: 'Water Spring Hit',
    details: 'Look Inside Volume 4',
  },
];
