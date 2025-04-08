import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '권주환',
  },
  contact: [
    {
      title: 'kjh307ok@gmail.com',
      link: 'mailto:kjh307ok@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/KwonJuHwan',
      icon: faGithub,
    },
  ],
  notice: {
    title: '안녕하세요. 성장중인 백엔드 주니어 개발자 권주환입니다.',
    icon: faBell,
  },
};

export default profile;
