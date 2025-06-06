const translation = {
  title: '로그',
  description: '로그는 애플리케이션 실행 상태를 기록합니다. 사용자 입력 및 AI 응답이 포함됩니다.',
  dateTimeFormat: 'YYYY/MM/DD HH:mm',
  table: {
    header: {
      updatedTime: '업데이트 시간',
      time: '생성 시간',
      endUser: '엔드 유저 또는 계정',
      input: '입력',
      output: '출력',
      summary: '요약',
      messageCount: '메시지 수',
      userRate: '사용자 비율',
      adminRate: '관리자 비율',
      startTime: '시작 시간',
      status: '상태',
      runtime: '실행 시간',
      tokens: '토큰',
      user: '엔드 유저 또는 계정',
      version: '버전',
    },
    pagination: {
      previous: '이전',
      next: '다음',
    },
    empty: {
      noChat: '아직 대화가 없습니다',
      noOutput: '출력이 없습니다',
      element: {
        title: '여기 누구 있어요?',
        content:
          '여기에서 엔드 유저와 AI 애플리케이션 간 상호 작용을 관찰하고 주석을 달아 AI 정확도를 계속 향상시킵니다. 웹 앱을 <shareLink>공유</shareLink>하거나 <testLink>테스트</testLink>하고 다시 이 페이지로 돌아오세요.',
      },
    },
  },
  detail: {
    time: '시간',
    conversationId: '대화 ID',
    promptTemplate: '프롬프트 템플릿',
    promptTemplateBeforeChat: '채팅 전 프롬프트 템플릿 - 시스템 메시지로',
    annotationTip: '{{user}}에 의해 향상됨',
    timeConsuming: '시간 소요',
    second: '초',
    tokenCost: '토큰 비용',
    loading: '로드 중',
    operation: {
      like: '좋아요',
      dislike: '좋아요 취소',
      addAnnotation: '향상 추가',
      editAnnotation: '향상 편집',
      annotationPlaceholder: 'AI 가 응답할 것으로 예상하는 답변을 입력하여 향후 모델 세부 조정 및 텍스트 생성 품질 지속적 향상을 위해 개선할 수 있습니다.',
    },
    variables: '변수',
    uploadImages: '업로드된 이미지',
    modelParams: '모델 매개 변수',
  },
  filter: {
    period: {
      today: '오늘',
      last7days: '지난 7 일',
      last4weeks: '지난 4 주',
      last3months: '지난 3 개월',
      last12months: '지난 12 개월',
      monthToDate: '월 초부터 오늘까지',
      quarterToDate: '분기 초부터 오늘까지',
      yearToDate: '연 초부터 오늘까지',
      allTime: '모든 기간',
    },
    annotation: {
      all: '모두',
      annotated: '향상 주석 ({{count}} 개 항목)',
      not_annotated: '주석 없음',
    },
    sortBy: '정렬 기준:',
    descending: '내림차순',
    ascending: '오름차순',
  },
  workflowTitle: '워크플로우 로그',
  workflowSubtitle: '이 로그는 Automate 의 작업을 기록했습니다.',
  runDetail: {
    title: '대화 로그',
    workflowTitle: '로그 세부 정보',
    fileListDetail: '세부',
    fileListLabel: '파일 세부 정보',
  },
  promptLog: '프롬프트 로그',
  agentLog: '에이전트 로그',
  viewLog: '로그 보기',
  agentLogDetail: {
    agentMode: '에이전트 모드',
    toolUsed: '사용된 도구',
    iterations: '반복',
    iteration: '반복',
    finalProcessing: '최종 처리',
  },
}

export default translation
