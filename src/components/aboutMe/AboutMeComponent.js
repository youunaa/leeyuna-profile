
import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import profileImg from '../../assets/image/profile3.jpg';
import myInfo from '../../mock/myInfo.js';

class AboutMeComponent extends Component {
    render() {
        return (
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
        )
    }
}

export default AboutMeComponent;