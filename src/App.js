import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'underscore';
import { Glyphicon, ResponsiveEmbed } from 'react-bootstrap';
import Chart from 'chart.js'

import './App.css';

import Constants from './constants';

import Experience from './components/experience/experience';
import ContentSection from './components/content-section/content-section';

import avatar from './images/8bitavatar.png';
import hootsuiteLogo from './images/hootsuitelogo.png';
import indochinoLogo from './images/indochinologo.png';
import resume from './assets/DanielTsangResume.pdf';

import nowPlaying from './images/nowplaying-rect.png';
import honeyBuns from './images/honeybuns-rect.png';

import bowling from './images/bowling.svg';
import bulldog from './images/french-bulldog.svg';
import shepherd from './images/police-dog.svg';
import pug from './images/pug.svg';
import soccer from './images/soccer-ball-variant.svg';
import watermelon from './images/watermelon.svg';

class App extends Component {
    constructor () {
        super();

        this.state = {
            skillsGraphInView: true,
            inView: {
                aboutMe: false,
                experience: false,
                projects: false,
                skills: false,
                hobbies: false
            }
        };

        this.nodes = {};
        this.mySkillsGraph = null;

        this.scrollHandler = _.throttle(this.scrollHandler.bind(this), 100);
    }

    componentDidMount () {
        this.chart = new Chart(document.getElementById("mySkillsChart"), Object.assign({}, Constants.skillsChart));
        this.scrollHandler();
        window.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler () {
        let titlesInView = {};
        ["aboutMe", "experience", "projects", "skills", "hobbies"].forEach(node => {
            titlesInView[node] = this.isContentInView(ReactDOM.findDOMNode(this.nodes[node]), false);
        });

        if (!_.isEqual(this.state.inView, titlesInView)) {
            this.setState({
                inView: {...this.state.inView, ...titlesInView}
            });
        }

        if (this.isContentInView(this.nodes['mySkillsGraph'], true)) {
            if (this.state.skillsGraphInView) {
                // Content is still in view
                return;
            }
            // Content is in view
            this.setState({skillsGraphInView: true});
            this.chart.data.datasets[0].data.forEach((value, index) => {
                this.chart.data.datasets[0].data[index] = Constants.initialSkillsChartData[index];
            });
            this.chart.update();
        } else {
            if (this.isContentInView(this.nodes['mySkillsGraph'], false)) {
                // Content is partially in view
            } else {
                // Content is not in view
                if (this.state.skillsGraphInView) {
                    this.chart.data.datasets[0].data.forEach((value, index) => {
                        this.chart.data.datasets[0].data[index] = "";
                    });
                    this.chart.update();
                    this.setState({skillsGraphInView: false});
                }
            }
        }
    }

    isContentInView (node, fullyInView) {
        let pageTop = document.documentElement.scrollTop || document.body.scrollTop;
        let pageBottom = pageTop + window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        let elementTop = node.offsetTop;
        let elementBottom = elementTop + node.offsetHeight;

        if (fullyInView === true) {
            return ((pageTop < elementTop + 110) && (pageBottom > elementBottom - 110));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }

    scrollSectionIntoView (nodeName) {
        let domNode = ReactDOM.findDOMNode(this.nodes[nodeName]);
        domNode.scrollIntoView();
    }

    setReference (node, nodeName) {
        this.nodes[nodeName] = node;
    }

    renderHeader () {
        return (
            <div className="App-header">
                <div className="App-header-left">
                    <div className="App-logo">
                        <img src={avatar} alt="logo" />
                    </div>
                </div>
                <div className="App-header-right">
                    <a className="App-header-button" href={resume} download="DanielTsangResume">
                        Resume
                    </a>
                    <a className="App-header-button" target="blank" href="https://github.com/Danieltsang?tab=repositories">
                        Work
                    </a>
                    <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "contact")}>
                        Contact
                    </h3>
                </div>
            </div>
        );
    }

    renderIntro () {
        const glyphiconStyles = {
            fontSize: "30px",
            margin: "0 8px 0 0",
            cursor: "pointer"
        };
        let helloText = "Hi, I'm Daniel";
        return (
            <div className="App-intro">
                <ReactCSSTransitionGroup
                    transitionName="App-intro-hi-animation"
                    transitionAppear={true}
                    transitionAppearTimeout={1700}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <h1 key="hi-animation">{helloText}</h1>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="App-intro-glyph-animation"
                    transitionAppear={true}
                    transitionAppearTimeout={1700}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Glyphicon
                        key="glyph-animation"
                        glyph="menu-down"
                        style={glyphiconStyles}
                        onClick={this.scrollSectionIntoView.bind(this, "aboutMe")}/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }

    // @TODO Create component for image container class
    renderBody () {
        return (
            <div className="App-body">
                <ContentSection
                    title="Who Am I?"
                    titleInView={this.state.inView['aboutMe']}
                    ref={(node) => this.setReference(node, "aboutMe")}>
                    <p className="about-me">Hi! My name is Daniel Tsang and I am an undergraduate at the University of British Columbia graduating in May 2017. Currently, I am searching for a job as a Front End Engineer. I want to find a company that provides mentorship, boasts a learning environment, and most importantly treats their employees equally.</p>
                    <p className="about-me">If you think I am a good fit for your company or know of someone who might, I would love the chance to <a href="mailto:danieltsang94@gmail.com">chat</a> with you!</p>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="Who Have I Worked For?"
                    titleInView={this.state.inView['experience']}
                    ref={(node) => this.setReference(node, "experience")}
                    orientation="row">
                    <div className="App-experience-container">
                        <Experience
                            companyUrl="www.hootsuite.com"
                            duration="January 2016 - August 2016"
                            imageSrc={hootsuiteLogo}
                            position="Co-op Software Developer"
                            location="Vancouver, BC, Canada"
                            title="Hootsuite"/>
                        <Experience
                            companyUrl="www.indochino.com"
                            duration="January 2015 - August 2015"
                            imageSrc={indochinoLogo}
                            location="Vancouver, BC, Canada"
                            position="Co-op Full Stack Engineer"
                            title="Indochino"/>
                    </div>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="What Have I Built?"
                    titleInView={this.state.inView['projects']}
                    ref={(node) => this.setReference(node, "projects")}
                    orientation="row">
                    <div className="App-project">
                        <div className="App-image-container">
                            <a href="https://danieltsang.github.io/ShowcaseMovieApp" target="_blank">
                                <img src={nowPlaying} alt={"Now Playing"}/>
                            </a>
                        </div>
                    </div>
                    <div className="App-project">
                        <div className="App-image-container">
                            <a href="https://danieltsang.github.io/honeybuns" target="_blank">
                                <img src={honeyBuns} alt={"Honey Buns"}/>
                            </a>
                        </div>
                    </div>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="What Can I Do?"
                    titleInView={this.state.inView['skills']}
                    ref={(node) => this.setReference(node, "skills")}
                    orientation="row">
                    <canvas ref={(node) => this.setReference(node, "mySkillsGraph")} className="App-skills-chart" id="mySkillsChart" width="300" height="200"></canvas>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="What Do I Like?"
                    titleInView={this.state.inView['hobbies']}
                    ref={(node) => this.setReference(node, "hobbies")}>
                    <div className="row">
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={bowling} />
                            </ResponsiveEmbed>
                        </div>
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={soccer} />
                            </ResponsiveEmbed>
                        </div>
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={watermelon} />
                            </ResponsiveEmbed>
                        </div>
                    </div>
                    <div className="row">
                        <h3>My Dogs</h3>
                    </div>
                    <div className="row">
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={bulldog} />
                            </ResponsiveEmbed>
                            Dagan
                        </div>
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={shepherd} />
                            </ResponsiveEmbed>
                            Zelda
                        </div>
                        <div className="svg">
                            <ResponsiveEmbed a16by9>
                                <embed type="image/svg+xml" src={pug} />
                            </ResponsiveEmbed>
                            Tia
                        </div>
                    </div>
                </ContentSection>
                <div className="App-divider"></div>
                <div className="App-contact" ref={(node) => this.setReference(node, "contact")}>
                    <h1>Ready to Meet a Young and Experienced Front End Engineer?</h1>
                    <p>Because I look forward to meeting you, and talking about opportunities starting June 2017.</p>
                    <a href="mailto:danieltsang94@gmail.com">
                        Connect with Daniel
                    </a>
                </div>
            </div>
        );
    }

    renderFooter () {
        return (
            <div className="App-footer">
                <div className="App-social-networks">
                    <a target="blank" href="https://ca.linkedin.com/in/daniel-tsang-36730a80">LinkedIn</a>
                    <a target="blank" href="https://github.com/Danieltsang">GitHub</a>
                </div>
                <div className="App-icon-credits">
                    <p>Icon Credits:</p>
                    <div>Icons made by <a target="blank" href="http://www.flaticon.com/authors/papedesign" title="Papedesign">Papedesign</a> from <a target="blank" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a target="blank" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
                    <div>Icons made by <a target="blank" href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a target="blank" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a target="blank" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
                    <div>Icons made by <a target="blank" href="http://www.freepik.com" title="Freepik">Freepik</a> from <a target="blank" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a target="blank" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="App">
                {this.renderHeader()}
                {this.renderIntro()}
                {this.renderBody()}
                {this.renderFooter()}
            </div>
        );
    }
}

export default App;
