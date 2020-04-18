import React from 'react';
import './styles.scss'

export default function Resume() {
    return (
        <div className={'resume-container'}>
            <div className={'header'}>
                <div className={'header-left'}>
                    <div className={'name'}>Philip Andresen</div>
                    <div className={'title'}>Application Developer</div>
                </div>
                <div className={'header-right'}>
                    <div>
                        Email: info@maineWildlife.org
                    </div>
                    <div>
                        Phone: N / A
                    </div>
                </div>
            </div>
            <div className={'content'}>
                <section>
                    <div className={'section-title'}>Experience</div>
                    <div className={'section-content'}>
                        <div className={'content-header'}>IDEXX Laboratories</div>
                        <div className={'content-subheader'}>September 2017 - March 2020, Developer ( Kanban / Scrum )</div>
                        <ul>
                            <li>Full Stack developer on React / Node Communicaton Software</li>
                            <li>Participated in and lead architectural discussions</li>
                            <li>Conducted front end refactors and established design patterns</li>
                        </ul>
                        <div className={'content-subheader'}>March 2016 - March 2018, Developer ( Scrum )</div>
                        <ul>
                            <li>Supported and patched legacy Java / Spring application as needed</li>
                            <li>Developed features for Java production support app</li>
                            <li>Diagnosed Production issues across Java app and ETL pipeline</li>
                            <li>Orchestrated and conducted no-downtime redis migration to AWS</li>
                        </ul>
                        <div className={'content-subheader'}>December 2013 - March 2016, Customer Support Consultant</div>
                        <ul>
                            <li>Network connectivity / veterinary diagnostic troubleshooting with emphasis on clear communication</li>
                        </ul>
                        <br/>
                        <div className={'content-header'}>Hess Biophysics Research Group</div>
                        <div className={'content-subheader'}>2010 - 2013, Student Laboratory Aid ( Waterfall )</div>
                        <ul>
                            <li>Wrote software supporting the analysis / collection of data from super-resolution visible light microscopy</li>
                            <li>Practiced Hazardous material handling and radiation safety measures during basic lab procedures</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className={'section-title'}>Technologies</div>
                    <div className={'section-content'}>
                        <div className={'tech-flow'}>
                            <div>Java</div>
                            <div>Java.Spring</div>
                            <div>React Native</div>
                            <div>Javascript</div>
                            <div>JS.React</div>
                            <div>JS.Node</div>
                            <div>JS.Jest</div>
                            <div>REST</div>
                            <div>Websocket</div>
                            <div>SSE</div>
                            <div>S/CSS</div>
                            <div>CSS.Grid</div>
                            <div>Redis</div>
                            <div>ElasticSearch</div>
                            <div>Oracle SQL</div>
                            <div>Git</div>
                            <div>AWS.S3</div>
                            <div>AWS.DynamoDB</div>
                            <div>AWS.Cloudformation</div>
                            <div>AWS.Lambda</div>
                            <div>AWS.CodePipeline</div>
                            <div>AWS.EC2</div>
                            <div>AWS.Route53</div>
                            <div>AWS.ELB</div>
                            <div>AWS.Cognito</div>
                            <div>Matlab</div>
                            <div>C#</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={'section-title'}>Education</div>
                    <div className={'section-content'}>
                        <div className={'content-header'}>Bachelor Of Science, Physics</div>
                        <div className={'content-subheader'}>University of Maine, Orono, 2012</div>

                    </div>
                </section>
            </div>
        </div>
    )
}