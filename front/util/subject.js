const collageToDepartment = (collage) => {
  let datalist;
  switch (collage) {
    case 'Y0000361':
      datalist = [
        { name: '로봇공학과', code: 'Y0000982' },
        { name: '융합공학과', code: 'Y0000983' },
        { name: '국방정보공학과', code: 'Y0001030' },
        { name: '전자공학부', code: 'Y0001083' },
        { name: '재료화학공학과', code: 'Y0001084' },
        { name: '생명나노공학과', code: 'Y0000388' },
        { name: '건설환경공학과', code: 'Y0001155' },
        { name: '스마트융합공학부', code: 'Y0001250' },
        { name: '산업경영공학과', code: 'Y0000387' },
        { name: '건축학부', code: 'Y0000415' },
        { name: '기계공학과', code: 'Y0000386' },
        { name: '교통·물류공학과', code: 'Y0000389' },
      ];
      break;
    case 'Y0001165':
      datalist = [
        { name: '소프트웨어학부', code: 'Y0001166' },
        { name: 'ICT융합학부', code: 'Y0001169' },
      ];
      break;
    case 'Y0001173':
      datalist = [
        { name: '응용수학과', code: 'Y0001174' },
        { name: '응용물리학과', code: 'Y0001175' },
        { name: '분자생명과학과', code: 'Y0001176' },
        { name: '나노광전자학과', code: 'Y0001177' },
        { name: '화학분자공학과', code: 'Y0001178' },
        { name: '해양융합공학과', code: 'Y0001179' },
      ];
      break;
    case 'Y0000502':
      datalist = [
        { name: '보험계리학과', code: 'Y0000968' },
        { name: '회계세무학과', code: 'Y0000984' },
        { name: '경제학부', code: 'Y0000517' },
        { name: '경영학부', code: 'Y0000519' }];
      break;
    case 'Y0000446':
      datalist = [
        { name: '문화콘텐츠학과', code: 'Y0000453' },
        { name: '중국학과', code: 'Y0000454' },
        { name: '영미언어·문화학과', code: 'Y0000455' },
        { name: '일본학과', code: 'Y0001180' },
        { name: '프랑스학과', code: 'Y0001181' },
        { name: '문화인류학과', code: 'Y0000467' },
        { name: '한국언어문학과', code: 'Y0000452' }];
      break;
    case 'Y0000480':
      datalist = [
        { name: '광고홍보학과', code: 'Y0001066' },
        { name: '정보사회미디어학과', code: 'Y0001244' },
        { name: '신문방송학과', code: 'Y0000488' },
        { name: '정보사회학과', code: 'Y0000489' }];
      break;
    case 'Y0000651':
      datalist = [
        { name: '영상디자인학과', code: 'Y0001247' },
        { name: '주얼리·패션디자인학과', code: 'Y0000990' },
        { name: '커뮤니케이션디자인학과', code: 'Y0000993' },
        { name: '산업디자인학과', code: 'Y0001246' },
        { name: '서피스·인테리어디자인학과', code: 'Y0000991' },
        { name: '엔터테인먼트디자인학과', code: 'Y0000994' },
        { name: '테크노프로덕트디자인학과', code: 'Y0000992' }];
      break;
    case 'Y0000353':
      datalist = [
        { name: '무용예술학과', code: 'Y0001110' },
        { name: '스포츠과학부', code: 'Y0001111' },
        { name: '실용음악학과', code: 'Y0000358' }];
      break;
    case 'Y0000594':
      datalist = [
        { name: '약학과', code: 'Y0000596' }];
      break;
    default:
      break;
  }
  return datalist;
};

export default collageToDepartment;
