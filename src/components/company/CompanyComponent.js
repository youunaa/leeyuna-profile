
import React, { Component } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ProjectComponent from "../project/ProjectComponent";

import CompanyArr from '../../mock/company.js';

class CompanyComponent extends Component {

    render() {
        return (
            <section>
                <h2 className="subject">
                    Work Experience<span className="period-mark">.</span>
                </h2>
                {
                    CompanyArr.map((company, index) => (
                        <Accordion key={index} defaultExpanded={true} >
                            <AccordionSummary
                                expandIcon={<ExpandLessIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <h3>
                                        {company.name}
                                        <span className="period-mark">.</span>
                                    </h3>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <span className="role">{company.role}</span>
                                    <span>
                                        <time>{company.startDate}</time> - {company.endDate}
                                    </span>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <ProjectComponent
                                        projectList={JSON.stringify(company.project)}
                                    />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </section >
        )
    }
}

export default CompanyComponent;