import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages ',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Java',
      level: 2,
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks ',
  items: [
    {
      title: 'Django',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 2,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'GCP',
      level: 3,
    },
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'nginx',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'Linux',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'VS Code',
      level: 3,
    },
    {
      title: 'IDEA ',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworks, infrastructure, tools],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
