import React from 'react';

import myInfo from './mock/myInfo.js';

import AboutMe from "./components/aboutMe/AboutMe";
import Introduce from "./components/introduce/Introduce";
import Skill from "./components/skill/Skill";
import Company from "./components/company/Company";
import OtherExperiences from "./components/other/OtherExperiences";

function App() {

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

            <AboutMe />

            <Introduce />

            <Skill />

            <Company />

            <OtherExperiences />

         </div>
      </div>
   );
}

export default App;
