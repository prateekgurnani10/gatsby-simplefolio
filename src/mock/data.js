import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prateek | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Prateek Gurnani',
  subtitle: 'I am a Graduate Student',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Graduate student at University of New Brunswick pursuing my Masters in Computer Science.I am passionate about creating high-quality, scalable, predictable and high performance web applications. My priorities are excellent client service, enhanced security and respecting user privacy. With a broad skill set covering important facets in the technology space, I am looking for an exciting internship or coop opportunity in the same for Fall 2021. Please feel free to contact me at prateekgurnani10@gmail.com.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gist1.png',
    title: 'C01',
    info: 'This is the first assignment',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1D5pxCMSYkKig0PUbVs3oueUJ6enowxBa#scrollTo=4fEEVWlfX4_F',
    repo: 'https://gist.github.com/prateekgurnani10/a3161eb9c4514b44259bb3910b3cd759', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist2.png',
    title: 'A01',
    info: 'Diamond price prediction',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1E_e5BsX74aWLWHWXD1-ugMV4wNygQXbo#scrollTo=OScPVcqnykxx',
    repo: 'https://gist.github.com/prateekgurnani10/22cb1f7712dd55f6dd1a6b6b34f1387c', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist3.png',
    title: 'C02',
    info: 'Weekly class Activity',
    info2: '',
    url:
      'https://colab.research.google.com/drive/123_I4X-BKKbcssyUeOEPgF5RO34bAuDo#scrollTo=oYcnYQKcFPjO',
    repo: 'https://gist.github.com/prateekgurnani10/204837a4ca566bdac4f1ddc79c87eac9', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist4.png',
    title: 'C04',
    info: 'Weekly class Activity',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1vgbwiou6LUqhgQX4_zbAO9Ac__kF_8x3#scrollTo=6DFlB67G3p4L',
    repo: 'https://gist.github.com/prateekgurnani10/3691e4f274f8643df3060cc907ab4941', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist5.png',
    title: 'C05',
    info: 'Weekly class Activity',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1QQCRI_Bc385-U1w9e2k3OUMiH59E0-ZV#scrollTo=78G1xpe4hwlG',
    repo: 'https://gist.github.com/prateekgurnani10/39d8d2a65e7f6718adb97a18cf4826c7', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist8.png',
    title: 'C08',
    info: 'Weekly class Activity',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1Bb4f4spgBCS4rpUkXPBK4a01OR53svaK#scrollTo=mTwsgz0QnbAq',
    repo: 'https://gist.github.com/prateekgurnani10/5eb7c40acfba0784c5a7087d0f6b5d6a', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist10.png',
    title: 'C10',
    info: 'Weekly class Activity',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1DrwBytoNU3lZ4vsI1p45a_VJVfNbOYYo#scrollTo=GhghO7h03itQ',
    repo: 'https://gist.github.com/prateekgurnani10/c90209cd629983dbb47bc1972288a95e', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gist11.png',
    title: 'Individual Project',
    info: 'EDA and segment analysis for customers in mall.',
    info2: '',
    url:
      'https://colab.research.google.com/drive/19W_1tjmn69pfn2xJy0WpZt9ppccIqlLv#scrollTo=SPJ5UqHBoh1Q',
    repo: 'https://gist.github.com/prateekgurnani10/09a3f8b3096a52d0ac8d0c0ea46b2742', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'prateegurnani10@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Prateek_theDev',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prateekgurnani/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/prateekgurnani10',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
