import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/앱 서비스 백엔드 개발과 스타트업 개발자로서의 다양한 경험이 있습니다. Java, Python, MySQL, Redis, GCP, AWS, Docker 등을 사용하여 프로덕션 서비스를 설계 및 개발을 진행하였습니다.',
    '학부생과 부트캠프에서는 Spring boot를 사용하여 개발을 하였고, 스타트업 회사에서는 Django를 사용하여 개발을 진행하였습니다. 언어에 제약을 두지 않고, 경험해보지 못한 다양한 기술, 라이브러리를 활용하여 개발하고 싶다는 생각을 갖고 경험을 쌓고 있습니다.',
    '스타트업 회사에서 개발자로 일하면서 개발도 중요하지만 커뮤니케이션 역시 중요하다고 생각하고 있습니다. 개발자도 비즈니스 풀에서 함께 적극적으로 커뮤니케이션을 해야 더 좋은 서비스를 만들수 있다고 생각합니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'JuHwan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
