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
          content:
            '회원의 민감정보들(건강검진 기록, 진료/처방 기록)을 서버에 저장하지 않고 건강관련 기능을 제공하는 애플리케이션',
        },
        {
          content: '백엔드 MSA 설계',
          weight: 'MEDIUM',
          descriptions: [
            { content: '크롤링 서비스, 백업 서비스, 질병 예측 서비스, 질병&약재 정보 서비스' },
            {
              content:
                '크롤링 서비스와 질병 예측 서비스의 CPU 사용량, 개별 서비스 발전 가능성으로 인한 분리',
            },
          ],
        },
        {
          content: 'Selenium Library를 이용한 크롤링으로 사용자 건강검진, 진료 및 투약정보 수집',
        },
        {
          content:
            'ThreadPoolExecutor를 이용한 멀티스레딩으로 크롤링 평균 응답 속도 감소 ( 최대 8분 → 최대 3분 )',
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
          content: 'NIST 표준 PQC 알고리즘과 KpqC 채택 알고리즘을 통합한 검증 플랫폼',
          weight: 'MEDIUM',
          descriptions: [
            { content: '운영 홈페이지', href: 'https://pqcmp.kr/' },
            {
              content: '(관련기사) LGU+, 기업용 "PQC 마이그레이션 플랫폼" 다음달 출시',
              href: 'https://zdnet.co.kr/view/?no=20241216092635',
            },
          ],
        },
        {
          content: 'Kyber PQC 알고리즘을 이용한 키교환 로직 구현',
        },
        {
          content:
            '검증 서비스에서 사용한 라이브러리 테스트 및 검수 (소프트웨어 검증, 부채널 취약점 검증, 프로토콜 검증)',
        },
        {
          content:
            'BoringSSL(TLS Library) 기반 PQC 알고리즘 서버&클라이언트 프로토콜 검증 서비스 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Redis 데이터 캐싱을 이용하여 내부 포트 점유 관리 자동화 구축' },
          ],
        },
        {
          content: 'Admin 서비스 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'API 호출 기반 사용자 활동 로그 저장' },
            { content: '사용자 활동 로그 기반 통계 데이터 확인' },
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
          weight: 'MEDIUM',
          descriptions: [
            { content: '데이터 연산 및 키 생성 C++ Library 활용 ' },
            { content: '키생성, 데이터 연산 API 구축' },
          ],
        },
        {
          content: 'Cmake를 활용한 C++ to Python 변환',
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
            'PQC 알고리즘을 이해하고 이를 사업적으로 활용할 수 있도록 지원하기 위한 Alliance Program 플랫폼',
          weight: 'MEDIUM',
          descriptions: [{ content: '운영 홈페이지', href: 'https://heaanpqc.com/ko-KR/home' }],
        },
        {
          content: '추가 개발 요구사항 (뉴스 게시판, Q&A 고도화 등) 개발',
        },
        {
          content: 'Celery, Redis를 활용하여 회원 soft delete 자동화 ',
        },
        {
          content: '이메일 알림 서비스 구축 (Q&A 추가, 등록 등)',
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
      title: '셀프 쿠폰 발급 웹 서비스 프로젝트',
      startedAt: '2023-12',
      endedAt: '2024-01',
      where: '백엔드 개발',
      descriptions: [
        {
          content:
            '야놀자에 등록된 숙박업소 사장님들이 이용할 수 있는 B2B 셀프 쿠폰 발급 서비스 프로젝트',
        },
        {
          content:
            '회원의 민감정보들(건강검진 기록, 진료/처방 기록)을 서버에 저장하지 않고 건강관련 기능을 제공하는 애플리케이션',
        },
        {
          content: 'Batch를 이용하여 대용량 데이터 수집 및 처리',
        },
        {
          content: '화면에 필요한 데이터 처리 및 변환 로직 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '일간 쿠폰 리포트, 지역별 쿠폰 평균 개수, 지역별 쿠폰 다운로드 Top3 등' },
          ],
        },
        {
          content: 'Redis Cache를 이용하여 월별, 연별 데이터 API 응답속도 향상 (1309ms → 138ms)',
        },
        {
          content: 'AWS EC2, Docker를 활용한 서버 구축',
        },
      ],
    },
    {
      title: '숙박 예약 웹 서비스',
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
      title: '디지털 헬스케어 애플리케이션 개발',
      startedAt: '2024-07',
      endedAt: '2024-12',
      where: '백엔드 개발',
      descriptions: [
        {
          content: '부트캠프 수강생들끼리 익명으로 의견을 공유할 수 있는 게시판 웹 서비스 프로젝트',
        },
        {
          content: '주요 기능 중 로그인 기능, 공모전, 대회 게시판 기능 구현',
        },
        {
          content: '크롤링을 통해 공모전, 대회 정보 로직 구현',
        },
        {
          content: 'Scheduler를 통해 새로운 공모전, 대회 정보 크롤링 업데이트 로직 구현',
        },
        {
          content:
            '로그인 기능 중 1차 세션 기반 로그인 구현, 2차 JWT 토큰 기반 로그인 구현으로 변경',
        },
      ],
    },
    {
      title: '서울문화활동 웹서비스',
      startedAt: '2023-03',
      endedAt: '2023-10',
      where: '백엔드 개발',
      descriptions: [
        {
          content:
            '서울시에서 개최하는 문화 활동들에 대한 정보와 다양한 활동을 할 수있는 웹 서비스 프로젝트',
        },
        {
          content: '중요 기능 중 후기 작성 게시판 기능 구현',
        },
        {
          content: ' Selenium Library를 이용한 크롤링으로 사용자 건강검진, 진료 및 투약정보 수집',
        },
        {
          content: '서울시 공공 데이터 API를 통해 문화 활동 정보 가져오는 로직 구현',
        },
        {
          content: 'Spring Boot를 활용한 첫 프로젝트',
        },
      ],
    },
  ],
};

export default project;
