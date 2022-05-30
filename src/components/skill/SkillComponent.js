import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skill from '../../mock/skill.js';

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

class SkillComponent extends Component {
    render() {
        return (
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
        )
    }
}

export default SkillComponent;