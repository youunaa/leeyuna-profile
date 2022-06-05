
import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

class OtherExperiences extends Component {

    render() {
        return (
            <section>
                <h2 className="subject">
                    Other Experiences<span className="period-mark">.</span>
                </h2>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
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
                    </CardContent>
                </Card>
            </section>
        )
    }
}

export default OtherExperiences;