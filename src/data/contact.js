import {
  faGithub, faFacebookF, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    link: 'https://github.com/jacobphillips99',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/jacob.phillips.739326/',
    label: 'Facebook',
    icon: faFacebookF,
  },

  {
    link: 'https://www.linkedin.com/in/jacob-phillips-749175163/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/jacob_dphillips',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: './pdfs/jacob_phillips_resume_spring_2022.pdf',
    label: 'Resume',
    icon: faFileLines,
  },
  {
    link: 'mailto:jacob.phillips8905@@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
