import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'QuGuesser.png',
    title: 'QuGuesser',
    info: 'QuGuesser ist ein Spiel wo du in eine zufällige Google Street View reinversetzt wirst. Deine Aufgabe ist es den Ort zu erraten',
    info2: '',
    url: 'http://161.97.137.13:3000/',
    repo: 'https://github.com/Rvvlf/QuGuesser', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuOnline.png',
    title: 'QuOnline',
    info: 'QuOnline ist ein online Filehosting-Dienst. Die Plattform ermöglicht es Datein hochzuladen, herunterzuladen oder zu löschen. Backend basiert auf NodeJS und GoLang. Veränderungen werden dynamisch von Javascript übernommen',
    info2: '',
    url: '',
    repo: 'https://github.com/Rvvlf/QuOnline', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuChat.png',
    title: 'QuChat',
    info: 'QuChat ist eine Chat App die auf NodeJS basiert. Als Protokoll wird WebRTC benutzt',
    info2: '',
    url: 'https://www.dropbox.com/s/glw4w4xeu6m1lan/Fg45Sdf.mp4?dl=0',
    repo: 'https://github.com/Rvvlf/QuChat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuDrive.png',
    title: 'QuDrive',
    info: 'QuDrive ist ein Filehosting-Dienst, dass auf C# und C basiert. Hochgeladene Datein werden automatisch mit dem Server synchronisiert',
    info2: '',
    url: 'https://www.dropbox.com/s/jl64rc38pn0ier6/Fghc%403zx.mp4?dl=0',
    repo: 'https://github.com/Rvvlf/QuDrive', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'quepeeker.png',
    title: 'QuePeeker',
    info: 'QuePeeker ist eine Software für die Fernsteuerung, dass auf C++ QT Framework und die Windows32API basiert',
    info2: '',
    url: 'https://www.dropbox.com/s/t5q6hwqprexp2t0/qe%23fp4ee%24k.mp4?dl=0',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jakub.bilski@outlook.de',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
