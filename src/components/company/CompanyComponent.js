
import React, { Component } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <h3>
                                        {/* <img src={company.logoUrl} className='company-logo' /> */}
                                        {company.name}
                                        <span className="period-mark">.</span>
                                    </h3>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <span className="role">Web Developer</span>
                                    <span>
                                        <time>{company.startDate}</time> - {company.endDate}
                                    </span>
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
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