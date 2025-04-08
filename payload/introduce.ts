import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/앱 서비스 백엔드 개발과 스타트업 개발자로서의 경험이 있습니다.Java, Python을 활용한 서비스 개발과 GCP/AWS 기반 인프라 운영에 참여했습니다. MySQL과 Redis를 통한 데이터 관리, Docker 컨테이너 배포 경험을 통해 실제 서비스 개발 전과정을 경험하며 문제 해결 역량을 강화했습니다.',
    '학부 시절 Spring Boot로 웹 서비스의 기초를 다졌으며, 스타트업에서는 Django를 사용하며 프레임워크와 언어에 구애받지 않는 유연한 개발 사고력을 키웠습니다. 새로운 기술을 배우고 프로젝트에 적용하는 과정에서 실용적인 개발 역량을 쌓았으며, 특히 신기술 도입과 기존 시스템 개선에 대한 도전을 두려워하지 않습니다.',
    '스타트업 환경에서는 다양한 팀과의 소통이 프로젝트 완성도를 높이는 핵심 요소임을 배웠습니다. 기획자, 디자이너와 협력해 요구사항을 구체화하고, 기술적 제약을 고려한 현실적인 개발 방향성을 제안하는 과정에서 팀 간 협업의 중요성을 체감했습니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 지속적으로 학습하고 경험을 확장해 나가고 있습니다.',
  ],
  sign: 'JuHwan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
