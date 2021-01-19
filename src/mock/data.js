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
  img: 'profile.jpeg',
  paragraphOne:
    'I am a Graduate student at University of New Brunswick pursuing my Masters in Computer Science.I am passionate about creating high-quality, scalable, predictable and high performance web applications. My priorities are excellent client service, enhanced security and respecting user privacy. With a broad skill set covering important facets in the technology space, I am looking for an exciting internship or coop opportunity in the same for Fall 2021. Please feel free to contact me at prateekgurnani10@gmail.com.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'C01',
    info: '',
    info2: '',
    url:
      'https://colab.research.google.com/drive/1D5pxCMSYkKig0PUbVs3oueUJ6enowxBa#scrollTo=4fEEVWlfX4_F',
    repo: 'https://gist.github.com/prateekgurnani10/a3161eb9c4514b44259bb3910b3cd759', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
