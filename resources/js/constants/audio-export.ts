export const audioCategories = [
  {
    title: 'Partytury Muzyczne',
    color: 'from-red-600 to-pink-600',
    examples: [
      {
        title: 'Ambient No Man Sky',
        src: new URL(
          '../assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
          import.meta.url
        ).href,
      },
      {
        title: 'ChurchArea',
        src: new URL(
          '../assets/music/ChurchArea_F_Minor_105BPM.mp3',
          import.meta.url
        ).href,
      },
    ],
  },
  {
    title: 'Efekty Dźwiękowe',
    color: 'from-blue-600 to-indigo-600',
    examples: [
      {
        title: 'JetPack Sequence',
        src: new URL(
          '../assets/music/SFX_JetPack_Sequence.mp3',
          import.meta.url
        ).href,
      },
      {
        title: 'Open Door Sound',
        src: new URL('../assets/music/SFX_UNI_INT_DR_Open.mp3', import.meta.url)
          .href,
      },
    ],
  },
  {
    title: 'Przykłady Foley',
    color: 'from-green-600 to-teal-600',
    examples: [
      {
        title: 'Coins Falling',
        src: new URL('../assets/music/Coins_Falling_01.wav', import.meta.url)
          .href,
      },
      {
        title: 'Coins Hit',
        src: new URL('../assets/music/Coins_Hit_04.wav', import.meta.url).href,
      },
    ],
  },
  {
    title: 'Przykłady Perkusji',
    color: 'from-yellow-600 to-orange-600',
    examples: [
      {
        title: 'Wood + Water Hit',
        src: new URL('../assets/music/Perc_Shot_10.wav', import.meta.url).href,
      },
      {
        title: 'Water Spring Hit',
        src: new URL('../assets/music/Perc_Shot_11.wav', import.meta.url).href,
      },
    ],
  },
];
