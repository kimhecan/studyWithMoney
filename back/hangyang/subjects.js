const axios = require('axios');

const Subjectsfunc = async (collage, department, grade, subject) => {
  collage == 'null' ? collage = "" : collage;
  department == 'null' ? department = "" : department;
  grade == 'null' ? grade = "" : grade;
  subject == 'null' ? subject = "" : subject;
  try {
    const url = "https://portal.hanyang.ac.kr/sugang/SgscAct/findSuupSearchSugangSiganpyo.do?pgmId=P310278&menuId=M006631&tk=e9068598524e004a4af6d96d34410fa56705e76bb2f7fc2df35729471b0f3b45"
    const config = {
      headers: {
        'Host': 'portal.hanyang.ac.kr',
        'Connection': 'keep-alive',
        'Content-Length': '610',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.58',
        'Content-Type': 'application/json+sua; charset=UTF-8',
        'Origin': 'https://portal.hanyang.ac.kr',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://portal.hanyang.ac.kr/sugang/sulg.do',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'ko,en;q=0.9,en-US;q=0.8',
      }
    }
    const data = {
      "skipRows": "0",
      "maxRows": "400",
      "strLocaleGb": "ko",
      "strIsSugangSys": "true",
      "strDetailGb": "0",
      "notAppendQrys": "true",
      "strSuupOprGb": "0",
      "strJojik": "Y0000316",
      "strSuupYear": "2020",
      "strSuupTerm": "20",
      "strDaehak": collage ? collage : "", //단과대
      "strHakgwa": department ? department : "", //학과
      "strIsuGrade": grade ? grade : "",  //학년 "1"
      "strGwamok": subject ? subject : "", //과목명 "데이터베이스"
      "strTsGangjwaAll": "0",
      "strTsGangjwa3": "0",
      "strIlbanCommonGb": "2",
    }

    const response = await axios.post(url, data, config);
    const subjectList = response.data.DS_SUUPGS03TTM01[0].list

    let subjects = [];
    let tempObj = {};
    subjectList.forEach((v) => {
      tempObj.grade = v.banGrade;
      tempObj.banSosokNm = v.banSosokNm;
      tempObj.isuGbNm = v.isuGbNm;
      tempObj.yungyukNm = v.yungyukNm;
      tempObj.suupNo = v.suupNo;
      tempObj.haksuNo = v.haksuNo;
      tempObj.gwamokNm = v.gwamokNm;
      tempObj.gyogangsaNms = v.gyogangsaNms;
      tempObj.suupTimes = v.suupTimes;
      tempObj.hakjeom = v.hakjeom;
      tempObj.jehanInwon = v.jehanInwon;
      subjects.push(tempObj);
      tempObj = {};
    });

    return subjects;


  } catch (e) {
    console.log('error발생');
    console.error(e);
  }
}

module.exports = { Subjectsfunc };

