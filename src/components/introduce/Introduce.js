
import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import myInfo from '../../mock/myInfo.js';

class Introduce extends Component {
    render() {
        return (
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
        )
    }
}

export default Introduce;