
import React from 'react';

function Project(props) {
    const ProjectArr = JSON.parse(props.projectList);

    return (
        <div>
            {
                ProjectArr.map((project, index) => (
                    <div className={index === ProjectArr.length - 1 ? 'last row' : 'row'} key={index}>
                        <div className="row-left">
                            {project.link === '' &&
                                <h3 >
                                    {project.name}<span className="period-mark">.</span>
                                </h3>
                            }
                            {project.link !== '' &&
                                <h3>
                                    <a className='service link'
                                        target={'_blank'}
                                        rel="noopener noreferrer"
                                        href={project.link}
                                    >
                                        {project.name}
                                    </a>
                                    <span className="period-mark">.</span>
                                </h3>
                            }

                            <span className="role">{project.role}</span>
                            <span>
                                <time>{project.startDate}</time>~{project.endDate}{project.during}
                            </span>
                        </div>
                        <div className="row-right">
                            <div className="first project">
                                <h5>
                                    Service<span className="period-mark">.</span>
                                </h5>
                                <p>{project.service}</p>

                                <h5>
                                    Job<span className="period-mark">.</span>
                                </h5>
                                <ul>
                                    {
                                        project.job.map((job, i) => (
                                            <li>{job}</li>
                                        ))
                                    }
                                </ul>
                                <h5>
                                    Tech Stack<span className="period-mark">.</span>
                                </h5>
                                <p>
                                    {
                                        project.tech.map((tech, i) => (
                                            <span className="mr-1 badge badge-secondary">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}


export default Project;