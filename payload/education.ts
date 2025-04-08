import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '상명대학교',
      subTitle: '컴퓨터과학과 학사 졸업',
      startedAt: '2018-03',
      endedAt: '2024-02',
    },
    {
      title: '경희고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
