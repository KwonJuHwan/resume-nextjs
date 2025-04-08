import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '크립토랩',
      positions: [
        {
          title: '데이터사업개발실 백엔드 개발자',
          startedAt: '2024-04',
          endedAt: '2025-04',
          descriptions: [
            '암호 스타트업 (50명 이상, 개발팀 10~15명) ',
            'Post-Quantum Cryptography(PQC) 알고리즘을 지원하기 위한 Alliance Program 플랫폼 및 Migration 검증 플랫폼 구축',
            '사용자 건강정보 멀티스레딩 크롤링 로직 구현',
            'Intel SGX 기반의 Key Management System 구축',
            '백엔드 아키텍쳐 및 서버 인프라 구축',
          ],
          skillKeywords: [
            'Python',
            'Django',
            'Celery',
            'Selenium',
            'GCP',
            'GCS',
            'Docker',
            'nginx',
            'MySQL',
            'Redis',
            'BoringSSL (TLS Library)',
            'Architecture',
            'Cmake',
          ],
        },
      ],
    },
    {
      title: '패스트캠퍼스 X 야놀자 테크스쿨 - 백엔드 과정',
      positions: [
        {
          title: '백엔드 개발자',
          startedAt: '2023-07',
          endedAt: '2024-01',
          descriptions: [
            '핀테크 개발자 양성과정과 야놀자 기업연계 프로젝트 진행',
            '우수 수료생으로 수료',
            'Batch를 이용한 통계 데이터 수집 로직 구현',
            '숙박 예약 서비스 및 셀프 쿠폰 발급 서비스 레거시 프로젝트 개발',
            '백엔드 아키텍쳐 및 서버 인프라 구축',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JPA',
            'Batch',
            'AWS EC2',
            'AWS RDS',
            'Docker',
            'Redis',
            'Architecture',
          ],
        },
      ],
    },
  ],
};

export default experience;
