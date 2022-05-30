import React from 'react';

import profileImg from './assets/image/profile3.jpg';
import emgram from './assets/image/emgram.png';
import jplus from './assets/image/jplus.PNG';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Skill from './mock/skill.js';
import myInfo from './mock/myInfo.js';

function App() {

   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : true);
   };

   const FrontEnd = Skill.FrontEnd;
   const BackEnd = Skill.BackEnd;
   const Database = Skill.Database;

   function skillList(skill) {
      var result = '';
      for (let i = 0; i < skill.length; i++) {
         result += skill[i];
         if (i < skill.length - 1) {
            result += ', ';
         }
      }
      return result;
   };

   return (
      <div className="App">
         <div className="container">
            <section>
               <h1>
                  <span role="img">📢</span>
                  {myInfo.keyWord}
                  <span className="period-mark">.</span>
               </h1>
            </section>

            <section>
               <h2 className="subject">
                  About me<span className="period-mark">.</span>
               </h2>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                     <div className="last row">
                        <div className="row-left">
                           <img src={profileImg} alt="profile" className="profile-img" />
                        </div>
                        <div className="row-right">
                           <div className="first project">
                              <h5>
                                 Contact<span className="period-mark">.</span>
                              </h5>
                              <ul>
                                 <li>
                                    <span role="img" alt="email">🙎‍♀️</span>
                                    <span className='strong'>
                                       이름<span className="period-mark">.</span>
                                    </span>
                                    {myInfo.name}
                                 </li>
                                 <li>
                                    <span role="img" alt="email">✉️</span>
                                    <span className='strong'>
                                       이메일<span className="period-mark">.</span>
                                    </span>
                                    {myInfo.email}
                                 </li>
                                 <li>
                                    <span role="img" alt="email">📞</span>
                                    <span className='strong'>
                                       연락처<span className="period-mark">.</span>
                                    </span>
                                    {myInfo.phone}
                                 </li>
                              </ul>
                              <h5>
                                 Channel<span className="period-mark">.</span>
                              </h5>
                              <ul>
                                 <li>
                                    <span className='strong'>
                                       Blog<span className="period-mark">.</span>
                                    </span>
                                    {myInfo.blog}
                                 </li>
                                 <li>
                                    <span className='strong'>
                                       Github<span className="period-mark">.</span>
                                    </span>
                                    {myInfo.github}
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </section>

            <section>
               <h2 className="subject">
                  Introduce<span className="period-mark">.</span>
               </h2>

               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                     <p className="big-paragraph">
                        <div dangerouslySetInnerHTML={{ __html: myInfo.indtroduce }}>
                        </div>
                     </p>
                  </CardContent>
               </Card>
            </section>

            <section>
               <h2 className="subject">
                  Skill<span className="period-mark">.</span>
               </h2>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                     <ul>
                        <li>
                           <span className='strong'>
                              Front-End<span className="period-mark">.</span>
                           </span>
                           {skillList(FrontEnd)}
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <span className='strong'>
                              Back-End<span className="period-mark">.</span>
                           </span>
                           {skillList(BackEnd)}
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <span className='strong'>
                              Database<span className="period-mark">.</span>
                           </span>
                           {skillList(Database)}
                        </li>
                     </ul>
                  </CardContent>
               </Card>
            </section>

            <section>
               <h2 className="subject">
                  Work Experience<span className="period-mark">.</span>
               </h2>

               <Accordion style={{ padding: '1rem' }} expanded={expanded === 'true'} onChange={handleChange('true')}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1bh-content"
                     id="panel1bh-header"
                  >
                     <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <h3>
                           <img src={emgram} alt="profile" style={{ verticalAlign: 'middle', width: '25px' }} />
                           &nbsp;(주)엠그램<span className="period-mark">.</span>
                        </h3>
                     </Typography>
                     <Typography sx={{ color: 'text.secondary' }}>
                        <span className="role">Web Developer</span>
                        <span>
                           <time>2020. 03</time> - 2022. 05
                        </span>
                     </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                     <Typography>
                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 e-chain<span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2022.02</time>~2022.05(3개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    외부수집 데이터를 활용한 사업자별 탄소배출량 계산
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>방법론 별 수집 데이터 계산(장비, 모니터링 데이터, 계산식)</li>
                                    <li>계산식 변수 관리</li>
                                    <li>모니터링 데이터 관리</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">Spring Batch</span>
                                    <span className="mr-1 badge badge-secondary">PostgreSQL11</span>
                                    <span className="mr-1 badge badge-secondary">Wildfly 14.0</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 MEG-LE<span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2021.08</time> - 2022.02(7개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    KT MEG 플랫폼 통합 관리
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>레거시 Portal을 신규&nbsp;
                                       <a className='site link'
                                          target={'_blank'}
                                          rel="noopener noreferrer"
                                          href="https://gigaenergy.kt.com"
                                       >
                                          Portal
                                       </a>&nbsp;플랫폼 으로 이전
                                    </li>{/* 어떤 레거시를 어떻게 바꿨는지 설명 필요  */}
                                    <li>Jsp 에서 Vue.js 전환</li>
                                    <li>DR관제 데이터 통합 대시보드 개발</li>
                                    <li>맥공통 API 수정
                                       <ul>
                                          <li>포탈 공지사항용 첨부파일 다운로드 기능 추가</li>
                                       </ul>
                                    </li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">SpringFramework 4.0</span>
                                    <span className="mr-1 badge badge-secondary">PostgreSQL11</span>
                                    <span className="mr-1 badge badge-secondary">Wildfly 14.0</span>
                                    <span className="mr-1 badge badge-secondary">Vue.js</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 <a className='service link'
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                    href='http://isearch.interpark.com/isearch?q=k%EC%87%BC%ED%95%91'
                                 >
                                    K쇼핑
                                 </a>
                                 <span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2021.04</time>~2021.07(4개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    인터파크 제휴사 K쇼핑 입점개발
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>인터파크와 kshop 상품 카테고리 동기화</li>
                                    <li>교환/반품 로직 구현</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">Spring Boot</span>
                                    <span className="mr-1 badge badge-secondary">Mysql</span>
                                    <span className="mr-1 badge badge-secondary">Oracle DB</span>
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 한화생명 LCP<span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2020.12</time>~2021.03(4개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    상담사 매칭 및 오픈채팅 웹
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>socket서버 연동된 실시간 알람기능</li>
                                    <li>상담사 스케줄관리</li>
                                    <li>리포팅 관리</li>
                                    <li>상담사별 회원 관리</li>
                                    <li>파일 업로드/다운로드</li>
                                    <li>아이디 찾기/비밀번호 찾기</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">quasar Framework</span>
                                    <span className="mr-1 badge badge-secondary">Vue.js</span>
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 T-MaaS<span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2021.04</time>~2021.07(4개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    스마트 관광을 위한 모빌리티 서비스<br />
                                    관광객 여정에 따른 기사 추천 및 매핑 서비스, 오디오 가이드 등
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>파파고 Open API 연동</li>
                                    <li>blob 파일 업로드/다운로드</li>
                                    <li>관리자/ 고객사웹 개발</li>
                                    <li>이메일 전송 처리/ 메일 인증 html파일 처리</li>
                                    <li>로그인 jwt 처리</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">Spring Boot</span>
                                    <span className="mr-1 badge badge-secondary">mariaDB</span>
                                    <span className="mr-1 badge badge-secondary">Vue.js</span>
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="last row">
                           <div className="row-left">
                              <h3>
                                 <a className='service link'
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                    href='https://www.jeclean.com/'
                                 >
                                    제클린
                                 </a>
                                 <span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2020.03</time>~2020.06(4개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    제주도 내 O2O 세탁사업 플랫폼
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>기능 : 세탁관리, 공지사항, 회원관리</li>
                                    <li>정기결제 시스템 비지니스 로직 개발</li>
                                    <li>카카오톡 알림톡 발송 메신저 문구 로직 개발</li>
                                    <li>aws s3파일 업로드/다운로드</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">Spring Boot</span>
                                    <span className="mr-1 badge badge-secondary">Mysql</span>
                                    <span className="mr-1 badge badge-secondary">Vue.js</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </Typography>
                  </AccordionDetails>
               </Accordion>

               <Accordion style={{ padding: '1rem' }} expanded={expanded === 'true'} onChange={handleChange('true')}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2bh-content"
                     id="panel2bh-header"
                  >
                     <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <h3>
                           <img src={jplus} alt="profile" style={{ verticalAlign: 'middle', width: '25px', marginRight: '3px' }} />
                           제이플러스
                           <span className="period-mark">.</span>
                        </h3>
                     </Typography>
                     <Typography sx={{ color: 'text.secondary' }}>
                        <span className="role">Web Developer</span>
                        <span>
                           <time>2019. 11</time> - 2020. 02
                        </span>
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        <div className="row">
                           <div className="row-left">
                              <h3>
                                 <a className='service link'
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                    href='https://www.foodlife-edu.or.kr/main.do'
                                 >
                                    식생활교실
                                 </a>
                                 <span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2019.12</time>~2020.02(3개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    지속가능한 식생활 확산 및 농업·농촌 가치 인식 확대를 위한 식생활교육 종합정보 플랫폼
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>아이핀인증 밎 휴대폰인증API사용</li>
                                    <li>게시판 - 커스트마이징 게시판, QnA 게시판 (권한별 댓글/답글 기능)</li>
                                    <li>자가진단 - 설문 후 점수에 따른 결과 보이기</li>
                                    <li>CMS - 통계관리 - google chart를 활용한 메뉴별 접속현황, 홈페이지 방문자수 통계</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">egovframework3.7</span>
                                    <span className="mr-1 badge badge-secondary">JSP</span>
                                    <span className="mr-1 badge badge-secondary">MySQL</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="last row">
                           <div className="row-left">
                              <h3>
                                 <a className='service link'
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                    href='https://edu.merti.or.kr/user/Main.do'
                                 >
                                    해양환경교육센터
                                 </a>
                                 <span className="period-mark">.</span>
                              </h3>
                              <span className="role">Web Developer</span>
                              <span>
                                 <time>2019.11</time>~2020.01(3개월)
                              </span>
                           </div>
                           <div className="row-right">
                              <div className="first project">
                                 <h5>
                                    서비스<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    해양환경, 맞춤형 개발환경, 바다사랑, 현장, 실무능력등의 교육신청 및 체험 일정관리 플랫폼
                                 </p>
                                 <h5>
                                    업무<span className="period-mark">.</span>
                                 </h5>
                                 <ul>
                                    <li>교육프로그램찾기 - 사용자가 알리고싶은 교육프로그램을 홈페이지에 등록 구현</li>
                                    <li>교육권역별 교육프로그램 신청(해양환경이동교실)</li>
                                    <li>CMS : 휴무관리 - 해양환경이동교실 및 찾아가는 강사단의 휴무일정 등록 및 수정삭제 (기능 보완)</li>
                                    <li>CMS : 교육관리 - 사용자가 신청한 교육을 조회 및 수정,승인,삭제 등의 (기능 보완)</li>
                                 </ul>
                                 <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                 </h5>
                                 <p>
                                    <span className="mr-1 badge badge-secondary">egovframework3.7</span>
                                    <span className="mr-1 badge badge-secondary">JSP</span>
                                    <span className="mr-1 badge badge-secondary">MySQL</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </Typography>
                  </AccordionDetails>
               </Accordion>

            </section>

            <section>
               <h2 className="subject">
                  Other Experiences<span className="period-mark">.</span>
               </h2>
               <div className="other">
                  <h3>
                     교육이수내역<span className="period-mark">.</span>
                  </h3>
                  <span className="role">더조은컴퓨터아트학원</span>
                  <span className="time">
                     <time>2019.03</time> - 2019.09 (6개월)
                  </span>
                  <p>
                     자바, 파이썬을 활용한 빅데이터 플랫폼 개발자 양성 과정
                  </p>
               </div>
               <div className="other">
                  <h3>
                     Education<span className="period-mark">.</span>
                  </h3>
                  <span className="role"></span>
                  <span className="time">
                     <h3 className="title">학력<span className="indetail">최종학력
                        <span className="bar">대학교<em>4년</em>졸업</span></span></h3>
                     <time>2019.06</time> - 2021.08 국가평생교육진흥원대학교 (서울) 컴퓨터공학 전공
                     <br />
                     <time>2017.03</time> - 2019.02 한림성심대학교 (강원) 정보통신네트워크과
                  </span>
               </div>
            </section>

         </div>
      </div>
   );
}

export default App;
