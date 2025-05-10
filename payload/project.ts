import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '디지털 헬스케어 애플리케이션 개발',
      startedAt: '2024-09',
      endedAt: '2025-04',
      where: '백엔드 개발',
      descriptions: [
        {
          content: '질환 네트워크(Disease Network) 모델을 활용한 디지털 헬스케어 애플리케이션',
        },
        {
          content: '백엔드 MSA 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '크롤링 서비스, 백업 서비스, 질병 예측 서비스, 질병&약재 정보 제공 서비스로 구성',
            },
            {
              content:
                '크롤링 서비스와 질병 예측 서비스의 고부하 CPU 사용량 및 독립적 확장 가능성을 고려한 서비스 분리 채택',
            },
          ],
        },
        {
          content: 'Selenium Library를 사용한 크롤링 기술로 사용자 건강검진, 진료 및 투약정보 수집',
        },
        {
          content:
            'ThreadPoolExecutor를 사용한 멀티스레딩 기술로 크롤링 평균 응답 속도 감소 ( 최대 8분 → 최대 3분 )',
        },
        {
          content: 'GCS(Google Cloud Storage)를 이용한 백업 서비스 구축',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Signed URL 적용을 통한 보안 강화' }],
        },
        {
          content: 'GCP Compute Engine, Docker, nginx를 활용한 백엔드 서버 구축',
        },
      ],
    },
    {
      title: 'PQC Migration Platform 웹 서비스 개발',
      startedAt: '2024-07',
      endedAt: '2025-02',
      where: '백엔드 리드 개발',
      descriptions: [
        {
          content: 'NIST 표준 PQC 알고리즘과 KpqC 알고리즘을 통합한 검증 플랫폼',
          weight: 'MEDIUM',
          descriptions: [
            { content: '운영 홈페이지 링크', href: 'https://pqcmp.kr/' },
            {
              content: '(관련기사) LGU+, 기업용 "PQC 마이그레이션 플랫폼" 다음달 출시',
              href: 'https://zdnet.co.kr/view/?no=20241216092635',
            },
          ],
        },
        {
          content: 'Kyber PQC 알고리즘을 사용한 키교환 로직 구현',
        },
        {
          content:
            '검증 서비스에서 사용한 라이브러리 테스트 및 검수 (소프트웨어 검증, 부채널 취약점 검증, 프로토콜 검증)',
        },
        {
          content: 'BoringSSL 기반 PQC 알고리즘 프로토콜 검증 서비스 구축',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Redis를 사용하여 TLS서버 라이프사이클 관리' }],
        },
        {
          content: 'Admin 서비스 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'API 호출 기반 사용자 활동 로그 저장' },
            { content: '사용자 활동 로그 기반 통계 데이터 제공' },
          ],
        },
        {
          content: 'Docker, nginx를 활용한 운영 서버 구축',
        },
      ],
    },
    {
      title: 'AI 보안 시제품 개발 ',
      startedAt: '2024-07',
      endedAt: '2024-09',
      where: '백엔드 개발',
      descriptions: [
        {
          content: '동형암호를 활용한 1:N 안면 인증 시제품',
        },
        {
          content: 'Intel SGX enclave 기반의 Key Management System 구축',
        },
        {
          content: 'C++ 라이브러리를 Python 환경에서 사용 가능한 모듈로 변환',
        },
      ],
    },
    {
      title: 'PQC Alliance Program 웹 서비스 개발',
      startedAt: '2024-04',
      endedAt: '2024-07',
      where: '백엔드 개발',
      descriptions: [
        {
          content:
            'PQC 알고리즘을 사업적으로 활용할 수 있도록 지원하기 위한 Alliance Program 플랫폼',
          weight: 'MEDIUM',
          descriptions: [
            { content: '운영 홈페이지 링크', href: 'https://heaanpqc.com/ko-KR/home' },
          ],
        },
        {
          content: '추가 개발 요구사항 (뉴스 게시판, Q&A 고도화 등) 개발',
        },
        {
          content: 'Celery, Redis를 사용하여 회원 soft delete 자동화',
        },
        {
          content: '이메일 알림 서비스 구축(Q&A 관련 활동 알림)',
        },
        {
          content: 'translation 라이브러리를 이용한 English 지원',
        },
        {
          content: 'GCP Compute Engine, Docker, nginx를 활용한 서버 구축',
        },
      ],
    },
    {
      title: '셀프 쿠폰 발급 웹 서비스 개발',
      startedAt: '2023-12',
      endedAt: '2024-01',
      where: '백엔드 개발',
      descriptions: [
        {
          content:
            '야놀자에 등록된 숙박업소 사장님들이 이용할 수 있는 B2B 셀프 쿠폰 발급 서비스 프로젝트',
        },
        {
          content: 'Spring Batch를 사용하여 대용량 데이터 수집 및 처리',
        },
        {
          content: '화면에 필요한 데이터 처리 및 변환 로직 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '일/월/연간 통계, 일간 쿠폰 리포트, 지역별 쿠폰 평균 개수, 지역별 쿠폰 다운로드 Top3',
            },
          ],
        },
        {
          content: 'Redis Cache를 사용하여 월별, 연별 데이터 API 응답속도 향상 (1309ms → 138ms)',
        },
        {
          content: 'AWS EC2, Docker를 활용한 서버 구축',
        },
      ],
    },
    {
      title: '숙박 예약 웹 서비스 개발',
      startedAt: '2024-11',
      endedAt: '2024-11',
      where: '백엔드 개발',
      descriptions: [
        {
          content: '야놀자 서비스와 같은 숙박 예약 서비스를 제공해주는 웹 서비스 프로젝트',
        },
        {
          content: '주요 기능 중 장바구니 기능, 주문 기능 구현',
        },
        {
          content: 'AWS EC2, Git Actions를 이용한 인프라 구축',
        },
      ],
    },
    {
      title: '부트캠프 수강생 의견 공유 게시판 웹 서비스 개발',
      startedAt: '2024-07',
      endedAt: '2024-12',
      where: '백엔드 개발',
      descriptions: [
        {
          content: '부트캠프 수강생들끼리 익명으로 의견을 공유할 수 있는 게시판 웹 서비스 프로젝트',
        },
        {
          content: '주요 기능 중 로그인 기능과 공모전 게시판 기능 구현',
        },
        {
          content: '크롤링과 Scheduler를 사용하여 공모전 및 대회 정보 수집 자동화',
        },
        {
          content: '세션 기반 로그인 기능 구현 후, JWT 토큰 기반 로그인으로 전환',
        },
      ],
    },
    {
      title: '서울 문화활동 웹 서비스 개발',
      startedAt: '2023-03',
      endedAt: '2023-10',
      where: '백엔드 개발',
      descriptions: [
        {
          content:
            '서울시에서 개최하는 문화 활동들에 대한 정보와 다양한 활동을 할 수 있는 웹 서비스 프로젝트',
        },
        {
          content: '중요 기능 중 후기 작성 게시판 기능 구현',
        },
        {
          content: '서울시 공공 데이터 API를 통해 문화 활동 데이터 수집 로직 구현',
        },
        {
          content: 'Spring Boot를 활용한 첫 프로젝트',
        },
      ],
    },
  ],
};

export default project;
