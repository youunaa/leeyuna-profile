import './App.css';

function App() {

   return (
      //html대신 jsx 문법 className으로 class설정
      // 데이터 바인딩이 쉽다
      <div className="App">
         <div className="container">
            <section>
               <h1>
                  데이터로 일하는<br/>개발자 이유나입니다<span className="period-mark">.</span>
               </h1>
               <h2>
                  Introduce<span className="period-mark">.</span>
               </h2>
               <p className="big-paragraph">
                  3년차 개발자로 웹 프론트엔드, 백엔드 엔지니어로 일하고 있으며 아름다운
                  인터페이스와 애니메이션을 구현하는 것을 좋아합니다. 주도적으로 업무를 진행할
                  수 있는 환경을 선호합니다.
               </p>
            </section>
            <section>
               <h2>
                  Work Experience<span className="period-mark">.</span>
               </h2>
               <div className="row">
                  <div className="row-left">
                     <h3>
                        토스페이먼츠
                        <span className="period-mark">.</span>
                     </h3>
                     <span className="role">Frontend Developer</span>
                     <span>
                        <time datetime="2020-08">2020. 08</time> - 현재
                     </span>
                  </div>
                  <div className="row-right">
                     <div className="project">
                        <h4>
                           토스페이먼츠 JavaScript SDK<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2020-08">2020. 08</time> - 현재
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           토스페이먼츠의 결제를 연동하기 위해 사용하는 JavaScript SDK를
                           만들고 유지보수하고 있습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>일반 결제 JavaScript SDK 구현</li>
                           <li>커넥트페이 JavaScript SDK 구현</li>
                           <li>npm 퍼블릭 패키지 배포</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, Jest, Rollup</p>
                     </div>
                     <div className="project">
                        <h4>
                           토스페이먼츠 결제 연동 매뉴얼
                           <span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2020-08">2020. 08</time> - 현재
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           토스페이먼츠 결제를 연동하기 위해서 참고할 수 있는 가이드 문서
                           제품, " "의 프론트엔드를 설계하고 유지보수 하고 있습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>
                              토스페이먼츠 결제 연동 문서 초기 버전 구현 및 문서 본문 작성
                           </li>
                           <li>결제 연동 문서 버전 2.0 구현 및 지속 개선</li>
                           <li>테크니컬 라이터와의 협업을 위한 MDX 기반 컨텐츠 관리</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, Next.js, MDX</p>
                     </div>
                     <div className="project">
                        <h4>
                           커넥트페이<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2020-10">2020. 10</time> -
                           <time datetime="2021-07">2021. 07</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           토스페이먼츠의 간편결제 구현 솔루션인 "커넥트페이"의 JavaScript
                           SDK와 프론트엔드를 구현했습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>커넥트페이 JavaScript SDK 구현</li>
                           <li>커넥트페이 프론트엔드 구현</li>
                           <li>
                              MessageChannel API를 이용한 SDK와 프론트엔드 UI의 실시간 통신
                           </li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, Next.js, emotion, MessageChannel API</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="row-left">
                     <h3>
                        비바리퍼블리카<span className="period-mark">.</span>
                     </h3>
                     <span className="role">Frontend Developer</span>
                     <span>
                        <time datetime="2018-12">2018. 12</time> - 2020. 08
                     </span>
                  </div>
                  <div className="row-right">

                     <div className="project">

                        <h4>
                           공통 라이브러리 기여
                           <span className="period-mark">.</span>
                        </h4>
                        <span className="time">

                           <time datetime="2019-09">2019. 09</time> -
                           <time datetime="2020-07">2020. 07</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>

                           TDS(Toss Design System, 토스 웹 서비스 대부분이 사용하는 React UI
                           Framework)을 비롯하여 생산성을 위해 사용하고 있는 각종 사내
                           라이브러리를 유지보수, 개선했습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>앱과 연동되는 웹뷰 다크모드 구현</li>
                           <li>TDS 컴포넌트 인터페이스 개선, 각종 컴포넌트 신규 개발</li>
                           <li>

                              하나의 거대한 라이브러리를 용도에 맞게 쪼개고 인터페이스 개선
                           </li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, Next.js, Sass, Jest</p>
                     </div>
                     <div className="project">
                        <h4>
                           GA Silo<span className="period-mark">.</span>
                        </h4>
                        <span className="time">

                           <time datetime="2019-07">2019. 07</time> -
                           <time datetime="2020-07">2020. 07</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>

                           토스의 "내 보험 조회" 서비스를 개발하면서 보험 상담으로의 전환률
                           향상에 공헌하고 있습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>"내 보험 조회" 코드 베이스 개선, 레거시 마이그레이션</li>
                           <li>각종 A/B 테스트 구현을 통한 전환률 향상에 기여</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, Next.js, emotion</p>
                     </div>
                     <div className="project">
                        <h4>
                           PropTech Silo<span className="period-mark">.</span>
                        </h4>
                        <span className="time">

                           <time datetime="2019-03">2019. 03</time> -
                           <time datetime="2019-07">2019. 06</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>

                           PropTech(부동산 테크)와 관련된 여러가지 소규모의 서비스를
                           개발했습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>"내가 살 아파트 찾기" 구현</li>
                           <li>"아파트 관리비 조회/납부" 구현</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, Next.js, emotion</p>
                     </div>
                     <div className="project">
                        <h4>
                           Growth Silo<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2018-12">2018. 12</time> -
                           <time datetime="2019-02">2019. 02</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>

                           Growth Silo에서 토스의 성장에 도움이 될만한 아이디어를
                           구현했습니다. 팀 특성상, 소규모의 프로덕트를 빠르게 실행해보고
                           유저 반응을 본 뒤 다시 개편하여 내놓거나 아예 다른 아이템으로
                           전환하는 경우가 많아서 현재 서비스되고 있는 것은 없습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>"토스 머니백" 구현 (현재 서비스 되고 있지 않음)</li>
                           <li>"금융 생활 보고서" 구현 (현재 서비스 되고 있지 않음)</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>TypeScript, React, MobX, Sass, Jest, Next.js</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="row-left">
                     <h3>
                        스튜디오씨드 코리아
                        <span className="period-mark">.</span>
                     </h3>
                     <span className="role">Software Engineer</span>
                     <span>

                        <time datetime="2016-10">2016. 10</time> -
                        <time datetime="2018-11">2018. 11</time>
                     </span>
                  </div>
                  <div className="row-right">
                     <div className="project">
                        <h4>
                           ProtoPie Enterprise<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2017-10">2017. 10</time> -
                           <time datetime="2018-11">2018. 11</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           ProtoPie Studio와 연동되는 ProtoPie Cloud의 엔터프라이즈 버전의
                           프론트엔드 인터페이스를 개발했습니다. 프론트엔드 부분은 혼자 맡아
                           진행했으며, 3월 경에 1차적으로 릴리즈가 완료되어 여러 기업에
                           납품되었습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
                           <li>MobX, MobX State Tree를 사용한 스토어 디자인</li>
                           <li>React기반 컴포넌트 계층 구조 디자인</li>
                           <li>스토리북을 이용한 컴포넌트 기반 개발 도입</li>
                           <li>Jest 기반의 테스트 작성</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>
                           TypeScript, React, MobX, styled-components, Storybook, Jest, React
                           Router, GitLab, GitLab CI, Docker
                        </p>
                     </div>
                     <div className="project">
                        <h4>
                           ProtoPie Share Page<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2017-04">2017. 04</time> -
                           <time datetime="2018-11">2018. 11</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           ProtoPie Studio에서 작업물을 업로드하면 웹으로 볼 수 있도록 해주는
                           를 개발했습니다. 마찬가지로 혼자 진행한 프로젝트이며, 스펙 상
                           페이지 하나만 개발하면 되는 프로젝트였기 때문에 별도의 프론트엔드
                           라이브러리는 사용하지 않았습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>프론트엔드 / 백엔드 기술환경 세팅 및 전체 기능 구현</li>
                           <li>AWS Lambda를 이용한 Pie 파일 다운로드 기능 구현</li>
                           <li>Pie 파일 다운로드 성능 최적화</li>
                           <li>다양한 브라우저 환경 및 사이즈 대응</li>
                           <li>CI 및 ECS를 이용한 지속적인 Blue-Green 배포 환경 셋업</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>
                           TypeScript, Gulp, webpack, PostCSS, CSSNext, Express, AWS Lambda,
                           AWS ECS, GitLab, GitLab CI, Docker
                        </p>
                     </div>
                     <div className="project">
                        <h4>
                           ProtoPie License Server<span className="period-mark">.</span>
                        </h4>
                        <span className="time">
                           <time datetime="2016-12">2016. 12</time> -
                           <time datetime="2018-11">2018. 11</time>
                        </span>
                        <h5>
                           Description<span className="period-mark">.</span>
                        </h5>
                        <p>
                           유저가 직접 ProtoPie Studio를 사용할 수 있는 라이센스를 결제하고,
                           ProtoPie Studio와 연동해 라이센스 체크를 할 수 있는 서버 및 구매한
                           라이센스를 확인할 수 있는 시니어 개발자와 협업하여 두명으로
                           프로젝트를 진행하였습니다. 제가 맡은 역할은 주로 프론트엔드
                           인터페이스 코딩과, 결제 솔루션과의 연동이었습니다. 총 세 개의
                           솔루션(PayGate, PayPal, FastSpring)과 연동했던 경험이 있습니다.
                           때문에 백엔드 API 코딩도 겸하여 프로젝트를 진행했습니다.
                        </p>
                        <h5>
                           What did I do<span className="period-mark">.</span>
                        </h5>
                        <ul>
                           <li>프론트엔드 기술환경 세팅</li>
                           <li>프론트엔드 인터페이스 구현</li>
                           <li>서드파티 결제 솔루션 연동</li>
                           <li>CS처리를 위한 어드민 툴 개발</li>
                        </ul>
                        <h5>
                           Tech Stack<span className="period-mark">.</span>
                        </h5>
                        <p>
                           TypeScript, Gulp, webpack, Sass, jQuery, Express, Sequelize,
                           MariaDB(MySQL), AWS ECS, GitLab, GitLab CI, Docker
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="row-left">
                     <h3>
                        페스타<span className="period-mark">.</span>
                     </h3>
                     <span className="role">Lead Frontend Developer</span>
                     <span>
                        <time datetime="2017-12">2017. 12</time> -
                        <time datetime="2018-06">2018. 06</time>
                     </span>
                  </div>
                  <div className="row-right">
                     <h4>
                        페스타 프론트엔드
                        <span className="period-mark">.</span>
                     </h4>
                     <h5>
                        Description<span className="period-mark">.</span>
                     </h5>
                     <p>
                        이벤트를 주최하거나 열려있는 이벤트에 참가할 수 있는 웹 서비스인
                        창업을 염두에 두고 진행한 사이드 프로젝트로서 본업과는 무관합니다.
                        약 6개월 간 초기버전의 프론트엔드를 대부분 개발했습니다. 체력과
                        동기부여의 문제로 중도에 그만두게 되었습니다.
                     </p>
                     <h5>
                        What did I Do<span className="period-mark">.</span>
                     </h5>
                     <ul>
                        <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
                        <li>MobX, MobX State Tree를 사용한 스토어 디자인</li>
                        <li>React기반 컴포넌트 계층 구조 디자인</li>
                        <li>스토리북을 이용한 컴포넌트 기반 개발 도입</li>
                        <li>Jest 기반의 테스트 작성</li>
                     </ul>
                     <h5>
                        Tech Stack<span className="period-mark">.</span>
                     </h5>
                     <p>
                        TypeScript, React, MobX, styled-components, Storybook, Jest, React
                        Router, GitLab
                     </p>
                  </div>
               </div>
            </section>
            <section>
               <h2>
                  Other Experiences<span className="period-mark">.</span>
               </h2>
               <div className="other">
                  <h3>
                     GDG Korea WebTech<span className="period-mark">.</span>
                  </h3>
                  <span className="role">Organizer</span>
                  <span className="time">
                     <time datetime="2018-08">2018. 08.</time> - 현재
                  </span>
                  <p>
                     구글의 웹 기술 기반 개발자 커뮤니티인 GDG Korea WebTech의 오거나이저를
                     맡고 있습니다. 여러가지 행사를 주최하거나 돕고 있습니다.
                  </p>
               </div>
               <div className="other">
                  <h3>
                     TypeScript Korea<span className="period-mark">.</span>
                  </h3>
                  <span className="role">Organizer</span>
                  <span className="time">
                     <time datetime="2017-10">2017. 10.</time> -
                     <time datetime="2018-12">2018. 12.</time>
                  </span>
                  <p>
                     TypeScript의 사용자 커뮤니티인 TypeScript Korea의 오거나이저를
                     맡았습니다.
                  </p>
               </div>
               <div className="other">
                  <h3>
                     Blog<span className="period-mark">.</span>
                  </h3>
                  <span className="role">Author, Maintainer</span>
                  <span className="time">
                     <time datetime="2016-09">2016. 09.</time> - 현재
                  </span>
                  <p>
                     <a href="https://seob.dev/" rel="noopener noreferrer">
                        seob.dev
                     </a>
                     이라는 이름의 개인 블로그를 운영하고 있습니다. 비정기적으로 제가
                     새롭게 배우게 된 내용 등을 글로 작성해 공유합니다. 블로그는 Gatsby와
                     ReScript, Vercel을 사용해 구현했습니다. 이전에는
                     <a href="https://hyunseob.github.io" rel="noopener noreferrer">
                        DailyEngineering
                     </a>
                     이라는 이름의 블로그를 운영했습니다.
                  </p>
               </div>
               <div className="other">
                  <h3>
                     ACM-ICPC<span className="period-mark">.</span>
                  </h3>
                  <span className="role">Honorable Mention</span>
                  <span className="time">
                     <time datetime="2013-11">2013. 11.</time>
                  </span>
                  <p>
                     ACM-ICPC라는 프로그래밍 알고리즘 경진대회에 출전해 학교별 예선에서
                     좋은 성적을 거두고, 지역본선에 학교 대표로 진출했습니다. 아쉽게도
                     본선에서는 입상하지 못했습니다.
                  </p>
               </div>
               <div className="other">
                  <h3>
                     금오공과대학교<span className="period-mark">.</span>
                  </h3>
                  <span className="role">컴퓨터소프트웨어공학과</span>
                  <span className="time">
                     <time datetime="2010-03">2010. 03.</time> -
                     <time datetime="2018-02">2018. 02.</time>
                  </span>
                  <p>
                     컴퓨터소프트웨어공학과에서 4년간 공부하며 컴퓨터구조, 자료구조,
                     컴퓨터네트워크, 웹 프로그래밍 등의 과목을 우수한 성적으로
                     이수하였습니다. 중간에 휴학을 하고 일을 하다가 다소 늦게 졸업했습니다.
                  </p>
               </div>
            </section>
            <section>
               <h2>
                  Contact<span class="period-mark">.</span>
               </h2>
               <ul>
                  <li>
                     <a href="mailto:mail@hyunseob.me">이메일</a>
                  </li>
                  <li>
                     <a href="https://seob.dev" rel="noopener noreferrer">
                        블로그
                     </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/hyunseoblee/" rel="noopener noreferrer">
                        링크드인
                     </a>
                  </li>
                  <li>
                     <a href="https://github.com/hyunseob" rel="noopener noreferrer">
                        깃허브
                     </a>
                  </li>
                  <li>
                     <a href="https://twitter.com/HyunSeob_" rel="noopener noreferrer">
                        트위터
                     </a>
                  </li>
                  <li>
                     <a href="https://facebook.com/hyunseob.lee.7" rel="noopener noreferrer">
                        페이스북
                     </a>
                  </li>
               </ul>
            </section>
         </div>
      </div>
   );
}

export default App;
