import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon, ResponsiveEmbed } from 'react-bootstrap';
import './App.css';

import Experience from './components/experience/experience';
import SideBySideSection from './components/side-by-side-section/side-by-side-section';

import avatar from './images/avatar.jpg';
import hootsuiteLogo from './images/hootsuitelogo.png';
import indochinoLogo from './images/indochinologo.png';

import bowling from './images/bowling.svg';
import bulldog from './images/french-bulldog.svg';
import shepherd from './images/police-dog.svg';
import pug from './images/pug.svg';
import soccer from './images/soccer-ball-variant.svg';
import watermelon from './images/watermelon.svg';

class App extends Component {
    constructor() {
        super();

        this.scrollSectionIntoView = this.scrollSectionIntoView.bind(this);
    }

    scrollSectionIntoView (nodeName) {
        var domNode = ReactDOM.findDOMNode(this[nodeName]);
        domNode.scrollIntoView();
    }

    setReference (node, nodeName) {
        this[nodeName] = node;
    }

    render () {
        const glyphiconStyles = {
            fontSize: "30px",
            margin: "0 8px 0 0",
            color: "#000000"
        };
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-header-left">
                        <div className="App-logo">
                            <img src={avatar} alt="logo" />
                        </div>
                    </div>
                    <div className="App-header-right">
                        <a href="https://github.com/Danieltsang?tab=repositories" className="App-header-button">
                            Work
                        </a>
                        <h3 className="App-header-button" onClick={this.scrollSectionIntoView.bind(this, "contact")}>
                            Contact
                        </h3>
                    </div>
                </div>
                <div className="App-intro">
                    <h1>Hi, I'm Daniel</h1>
                    <Glyphicon
                        glyph="menu-down"
                        style={glyphiconStyles}
                    />
                </div>
                <div className="App-body">
                    <SideBySideSection title="Who Am I?" ref={(node) => this.setReference(node, "aboutMe")}>
                        <p>Hi! My name is Daniel Tsang and I am an undergraduate at the University of British Columbia graduating in May 2017. Currently, I am searching for a job as a Front End Engineer in the Big Apple. The combination of the growing tech industry and my passion for coding invigorates me to travel from Vancouver, Canada to New York to kickoff my career.</p>
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <div className="App-experience" ref={(node) => this.setReference(node, "experience")}>
                        <h2>Who Have I Worked For?</h2>
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
                    </div>
                    <div className="App-divider"></div>
                    <SideBySideSection title="What Can I Do?" ref={(node) => this.setReference(node, "skills")}>
                        <ul>
                            <li>Vanilla Javascript</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>LESS</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Jasmine</li>
                        </ul>
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <SideBySideSection title="What Do I Do Well?" ref={(node) => this.setReference(node, "skills")}>
                        <ul>
                            <li>Adapt</li>
                            <li>Work Independently</li>
                            <li>Dedication</li>
                        </ul>
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <SideBySideSection
                        title="What Do I Like?"
                        ref={(node) => this.setReference(node, "skills")}
                    >
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
                    </SideBySideSection>
                    <div className="App-divider"></div>
                    <div className="App-contact" ref={(node) => this.setReference(node, "contact")}>
                        <h1>I have what it takes to be a great employee</h1>
                        <p>I look to begin my career as a Front End Engineer from May 2017 and onwards.</p>
                        <a href="mailto:danieltsang94@gmail.com">
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
