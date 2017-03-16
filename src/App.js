import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import { Glyphicon, ResponsiveEmbed } from 'react-bootstrap';
import Chart from 'chart.js'
import './App.css';

import Constants from './constants';

import Experience from './components/experience/experience';
import ContentSection from './components/content-section/content-section';

import avatar from './images/avatar.jpg';
import hootsuiteLogo from './images/hootsuitelogo.png';
import indochinoLogo from './images/indochinologo.png';
import resume from './assets/DanielTsangResume.pdf';
import nowPlaying from './images/nowplaying-screenshot.png';

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
            skillsGraphInView: true
        };

        this.mySkillsGraph = null;

        this.scrollHandler = _.throttle(this.scrollHandler.bind(this), 100);
    }

    componentDidMount () {
        this.chart = new Chart(document.getElementById("mySkillsChart"), Object.assign({}, Constants.skillsChart));
        window.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler () {
        if (this.isContentInView(this['mySkillsGraph'], true)) {
            if (this.state.skillsGraphInView) {
                // Content is still in view
                return;
            }
            // Content is in view
            console.log("in view");
            this.setState({skillsGraphInView: true});
            this.chart.data.datasets[0].data.forEach((value, index) => {
                this.chart.data.datasets[0].data[index] = Constants.initialSkillsChartData[index];
            });
            this.chart.update();
        } else {
            if (this.isContentInView(this['mySkillsGraph'], false)) {
                // Content is partially in view
                console.log("partially in view");
            } else {
                // Content is not in view
                console.log("not in view");
                if (this.state.skillsGraphInView) {
                    this.chart.data.datasets[0].data.forEach((value, index) => {
                        this.chart.data.datasets[0].data[index] = 0;
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
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }

    scrollSectionIntoView (nodeName) {
        let domNode = ReactDOM.findDOMNode(this[nodeName]);
        domNode.scrollIntoView();
    }

    setReference (node, nodeName) {
        this[nodeName] = node;
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
        return (
            <div className="App-intro">
                <h1>Hi, I'm Daniel</h1>
                <Glyphicon
                    glyph="menu-down"
                    style={glyphiconStyles}
                    onClick={this.scrollSectionIntoView.bind(this, "aboutMe")}
                />
            </div>
        );
    }

    // @TODO Create component for image container class
    renderBody () {
        return (
            <div className="App-body">
                <ContentSection title="Who Am I?" ref={(node) => this.setReference(node, "aboutMe")}>
                    <p className="about-me">Hi! My name is Daniel Tsang and I am an undergraduate at the University of British Columbia graduating in May 2017. Currently, I am searching for a job as a Front End Engineer in the Big Apple. I want to find a company that provides mentorship, boasts a learning environment, and most importantly treats their employees equally.</p>
                    <p className="about-me">If you think I'm a good fit for your company or know of someone who might, I'd love the chance to <a href="mailto:danieltsang94@gmail.com">chat</a> with you!</p>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="Who Have I Worked For?"
                    ref={(node) => this.setReference(node, "experience")}
                    orientation="row"
                >
                    <div className="App-experience-container">
                        <Experience
                            companyUrl="www.hootsuite.com"
                            duration="January 2016 - August 2016"
                            imageSrc={hootsuiteLogo}
                            position="Co-op Software Developer"
                            location="Vancouver, BC, Canada"
                            title="Hootsuite"
                        />
                        <Experience
                            companyUrl="www.indochino.com"
                            duration="January 2015 - August 2015"
                            imageSrc={indochinoLogo}
                            location="Vancouver, BC, Canada"
                            position="Co-op Full Stack Engineer"
                            title="Indochino"
                        />
                    </div>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="What Have I Built?"
                    ref={(node) => this.setReference(node, "projects")}
                    orientation="row"
                >
                    <div className="App-project">
                        <h3><a href="https://danieltsang.github.io/ShowcaseMovieApp">Now Playing - Mobile First Movie Listing Application</a></h3>
                        <div className="App-image-container">
                            <img src={nowPlaying} alt={"Now Playing"}/>
                        </div>
                    </div>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection
                    title="What Can I Do?"
                    ref={(node) => this.setReference(node, "skills")}
                    orientation="row"
                >
                    <canvas ref={(node) => this.setReference(node, "mySkillsGraph")} id="mySkillsChart" width="400" height="200"></canvas>
                </ContentSection>
                <div className="App-divider"></div>
                <ContentSection title="What Do I Like?" ref={(node) => this.setReference(node, "skills")}>
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
                    <h1>Ready to Meet a Young but Experienced Front End Engineer?</h1>
                    <p>Because I look forward to meeting you, and talking about opportunities starting May 2017.</p>
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
